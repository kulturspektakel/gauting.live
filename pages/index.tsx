import { GetServerSideProps } from "next";
import Bar from "../components/Bar";
import { BetterplaceData, fetchBetterplaceData } from "../utils/betterplace";
import DonateNow from "../components/Donate";
import DonationList from "../components/DonationList";
import React from "react";
import Link from "next/link";
import Page from "../components/Page";
import Reminder from "../components/Reminder";
import Schedule from "../components/Schedule";
import Live from "../components/Live";
import formatCurrency from "../utils/formatCurrency";
import { useInView } from "react-intersection-observer";
import { fetchLive } from "./api/live";
import useSWR from "swr";

type Props = BetterplaceData & {
  liveVideo: Await<ReturnType<typeof fetchLive>>;
};

export default function Home(props: Props) {
  const { ref, inView } = useInView({
    initialInView: true,
  });

  const { data: liveVideo } = useSWR<Await<ReturnType<typeof fetchLive>>>(
    "/api/live",
    {
      refreshInterval: 10000,
      initialData: props.liveVideo ?? undefined,
    }
  );
  const hasVideo = Boolean(liveVideo?.data);

  return (
    <Page dark={hasVideo && inView}>
      {hasVideo && liveVideo?.data && (
        <Live liveVideo={liveVideo?.data} ref={ref} />
      )}
      <div className="container">
        <h1>
          Kultur in der Krise <strong>unterstützen</strong>
        </h1>
        <p className="lead">
          gauting.live ist eine Live-Online-Veranstaltungsreihe, die die
          Lockdown-Folgen für auftretende Künstler*innen mildern und das
          kulturelle Leben in Gauting in Zeiten geschlossener
          Kultureinrichtungen lebendig halten will.
        </p>

        <div className="headCols">
          <div>
            <img src="/saving-piggy-coins-alternate.svg" width="40" />
            <br />
            Spendenfinanziert möchten wir eine Reihe an Videostreams mit
            Live-Musik, Lesungen, Talks mit bekannten und neuen Gästen anbieten.
          </div>

          <div>
            <img src="/video-game-logo-stream.svg" width="40" />
            <br />
            Die Veranstaltungen sollen per Livestream aus dem bosco übertragen
            werden und anschließend als Aufzeichnung angeboten werden.
          </div>

          <div>
            <img src="/love-heart-hands-hold-3.svg" width="40" />
            <br />
            Die Spenden werden ausschließlich dazu verwendet die beteiligten
            Künstler&shy;*innen und Techniker&shy;*innen zu unterstützen.
          </div>
        </div>
      </div>

      <Bar
        totalAmount={props.totalAmount}
        goals={props.goals}
        donationsCount={props.donationsCount}
      />
      <main>
        <div className="container goals">
          <div className="goal">
            <h3>Vielen Dank!</h3>
            {/* <div className="achieved">
              <img src="/check-badge.svg" />
              Ziel erreicht
            </div> */}
            <p>
              Mit den bisherigen Spenden, die alle Erwartungen übertroffen
              haben, können wir sogar sechs statt der geplanten fünf
              Veranstaltungen auf die Beine stellen. Vor allem können wir aber
              auch dem 10-köpfigen Event-Produktionsteam, das wie auch die
              Künstler*innen von der Pandemie betroffen ist, etwas mehr als eine
              symbolische Aufwands&shy;entschädigung für Equipment und
              Arbeitszeit zahlen.
            </p>
          </div>

          <div className="goal">
            <h3>Es geht noch weiter&hellip;</h3>
            <p>
              Aber bitte auch jetzt noch nicht mit dem Spenden aufhören! Wenn
              wir die {formatCurrency(props.goals[0], false)}-Marke knacken,
              gibt neben den schon bestätigten sechs Veranstaltungen noch ein
              zusätzliches Online-Kultur-Highlight aus dem Bosco.
            </p>
            <p>
              Und dann ist hoffentlich der Frühling da und wir können wieder
              echte Live-Konzerte erleben.
            </p>
          </div>
        </div>
      </main>
      <div className="container">
        <DonateNow />
      </div>
      {!hasVideo && (
        <>
          <main className="live">
            <div className="container">
              <div className="inner">
                <h2>Livestream</h2>
                <Reminder isDark />
              </div>
            </div>
          </main>
          <Schedule />
        </>
      )}
      <main>
        <div className="container">
          <h2>Spenden</h2>
          <p>
            Die Spenden für das Projekt werden über die Plattform
            betterplace.org abgewickelt. Für alle Spenden über betterplace wird
            automatisch eine Spendenquittung erstellt. Alternativ kann auch per
            Überweisung gespendet werden (
            <Link href="/ueberweisung">mehr Informationen</Link>
            ).
          </p>

          <DonationList initialOpinions={props.opinions} />
        </div>

        <section className="section">
          <div className="container">
            <h2>Hinter den Kulissen</h2>
            <p>
              gauting.live ist initiert von Christina Tewes-Gradl, Stefan
              Berchtold und Dirk Lösch und wird unterstützt von
            </p>
            <div className="row">
              <a target="_blank" href="https://www.gauting.de">
                <img src="/gauting.svg" alt="Gemeinde Gauting" />
              </a>
              <a target="_blank" href="https://gruene-gauting.de">
                <img src="/gruene.svg" alt="Grüne Gauting" />
              </a>
              <a target="_blank" href="https://www.menschenfuergauting.de">
                <img src="/mfg.svg" alt="Menschen für Gauting" />
              </a>
              <a target="_blank" href="https://kulturspektakel.de">
                <img src="/kulturspektakel.svg" alt="Kulturspektakel Gauting" />
              </a>
            </div>
            <div className="row">
              <a target="_blank" href="https://sigma-event.de">
                <img src="/sigma.svg" alt="Sigma Veranstaltungstechnik" />
              </a>
              <a target="_blank" href="https://camposviola.photography">
                <img src="/campos-viola.svg" alt="Campos Viola Photography" />
              </a>
              <a target="_blank" href="http://theaterforum.de">
                <img src="/theaterforum.svg" alt="Theaterforum Gauting" />
              </a>
              <a target="_blank" href="http://mcfadden.de">
                <img src="/mcfadden.svg" alt="McFadden Veranstaltungstechnik" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </Page>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const [betterplaceData, liveVideo] = await Promise.all([
    fetchBetterplaceData(),
    fetchLive(),
  ]);
  return {
    props: {
      ...betterplaceData,
      liveVideo,
    },
  };
};
