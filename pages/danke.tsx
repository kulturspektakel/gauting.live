import Confetti from "react-confetti";
import React, { useLayoutEffect, useState } from "react";
import Page from "../components/Page";
import Bar from "../components/Bar";
import { GetServerSideProps } from "next";
import DonationList from "../components/DonationList";
import { fetchPageProps, PageProps } from "../utils/betterplace";
import Reminder from "../components/Reminder";
import qs from "qs";
import Head from "next/head";

export default function Danke(props: PageProps) {
  const [mounted, setMounted] = useState(false);
  useLayoutEffect(() => {
    setMounted(true);
    fetch("/api/donate", {
      method: "POST",
      body: JSON.stringify(
        qs.parse(location.search, { ignoreQueryPrefix: true })
      ),
    });
  }, []);

  return (
    <Page>
      <Head>
        <title>Danke - gauting.live</title>
      </Head>

      {mounted && <Confetti recycle={false} numberOfPieces={500} />}

      <div className="container">
        <h1>
          <strong>Danke</strong>
        </h1>

        <p className="lead">
          Eine Spendenbescheinigung wird automatisch von betterplace in der
          ersten Februarwoche des nachfolgenden Kalenderjahres verschickt. Mehr
          Informationen dazu bei{" "}
          <a
            target="_blank"
            href="https://www.betterplace.org/c/hilfe/meine-spendenbescheinigung"
          >
            betterplace.org
          </a>
          .
        </p>
      </div>
      <Bar
        goals={props.goals}
        totalAmount={props.totalAmount}
        donationsCount={props.donationsCount}
      />
      <main>
        <div className="container goals">
          <div className="goal">
            <h3>Nicht verpassen!</h3>
            <Reminder />
          </div>

          <div className="goal">
            <h3>Weiter erzählen!</h3>
            <p>
              Wir brauchen viele Unterstützer*innen damit dieses Projekt
              zustande kommen kann.
            </p>
            <div className="share">
              <a
                href={`https://wa.me/?text=${encodeURIComponent(
                  "Ich habe gerade https://gauting.live mit einer Spende unterstützt!"
                )}`}
              >
                <img src="/messaging-whatsapp.svg" />
                WhatsApp
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  "https://gauting.live"
                )}`}
              >
                <img src="/social-media-facebook-1.svg" />
                Facebook
              </a>
              <a href="mailto:?subject=gauting.live%20unterst%C3%BCtzen&body=Ich%20habe%20gerade%20die%20Spendenaktion%20von%20gauting.live%20unterst%C3%BCtzt.%20Das%20Projekt%20sucht%20noch%20viele%20weitere%20Unterst%C3%BCtzer*innen.%0D%0A%0D%0Agauting.live%20ist%20eine%20Live-Online-Veranstaltungsreihe%2C%20die%20die%20Lockdown-Folgen%20f%C3%BCr%20auftretende%20K%C3%BCnstler*innen%20mildern%20und%20das%20kulturelle%20Leben%20in%20Gauting%20in%20Zeiten%20geschlossener%20Kultureinrichtungen%20lebendig%20halten%20will.%0D%0A%0D%0AAlle%20Infos%20auf%20https%3A%2F%2Fgauting.live">
                <img src="/email-action-unread.svg" />
                E-Mail
              </a>
            </div>
            <p>
              Das Projekt mit Freunden und Bekannten zu teilen hilft uns sehr
              unser Spendenziel zu erreichen.
            </p>
          </div>
        </div>
        <div className="container">
          <h2>Spender*innen</h2>
          <DonationList initialOpinions={props.opinions} />
        </div>
      </main>
    </Page>
  );
}

export const getServerSideProps: GetServerSideProps<PageProps> = fetchPageProps;
