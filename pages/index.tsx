import DonationList from "../components/DonationList";
import React, { Suspense } from "react";
import Link from "next/link";
import Page from "../components/Page";
import Schedule from "../components/Schedule";
import formatCurrency from "../utils/formatCurrency";
import Live from "../components/Live";
import Bar from "../components/Bar";

export default function Home() {
  return (
    <Page dark>
      <Live />
      <div className="container">
        <h1>
          Geflüchtete aus der <strong>Ukraine</strong> unterstützen
        </h1>
        <p className="lead">
          Die Gautinger Kulturinitiative gauting.live und das Theaterforum
          Gauting e.V. veranstalten am Freitag, 08.04.2022 um 20:00 Uhr eine
          Sonderedition von gauting.live zu Gunsten der Menschen in der Ukraine
          und der aus der Ukraine Geflüchteten.
        </p>

        <div className="headCols">
          <div>
            <img src="/saving-piggy-coins-alternate.svg" width="40" />
            <br />
            Die Spenden werden an den{" "}
            <a href="https://asylgauting.de" target="_blank">
              Förderkreis Asyl Gauting e.V.
            </a>{" "}
            und{" "}
            <a href="https://www.directaidukraine.org" target="_blank">
              Direct Aid Ukraine
            </a>{" "}
            weitergereicht, um Menschen in der Ukraine und Geflüchtete zu
            unterstützen.
          </div>

          <div>
            <img src="/video-game-logo-stream.svg" width="40" />
            <br />
            In der Tradition von gauting.live wird live im Internet gestreamt,
            zugleich ist der Saal im bosco aber auch für Publikum vor Ort
            geöffnet.
          </div>

          <div>
            <img src="/love-heart-hands-hold-3.svg" width="40" />
            <br />
            Zwischen musikalischen Beiträgen von Gautinger und regionalen
            Künstler*innen wird es Gesprächs&shy;beiträge geben, unter anderem
            wird der Helferkreis Asyl zu Wort kommen.
          </div>
        </div>
      </div>
      <Suspense fallback={null}>
        <Bar goals={[300000]} />
      </Suspense>
      <main className="live">
        <div className="container">
          <div className="inner">
            <h2>Zur Corona-Pandemie</h2>
            <p>
              Nach zehn Episoden ist gauting.live jetzt zu Ende und hoffentlich
              kann es bald mit Live-Konzerten weitergehen.
            </p>
            <p>
              Aber falls ihr ein Konzert verpasst habt oder nochmal anschauen
              wollt, stehen hier die Aufzeichnungen für euch bereit.
            </p>
          </div>
        </div>
      </main>
      <Schedule />
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

          <DonationList />
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
              <a target="_blank" href="http://theaterforum.de">
                <img src="/theaterforum.svg" alt="Theaterforum Gauting" />
              </a>
              <a target="_blank" href="http://mcfadden.de">
                <img src="/mcfadden.svg" alt="McFadden Veranstaltungstechnik" />
              </a>
              <a target="_blank" href="https://acoustic-service.de/">
                <img src="/acousticservice.svg" alt="Acoustic Service" />
              </a>
              <a target="_blank" href="https://www.gmd-soundtrax.de">
                <img src="/gmd-soundtrax.svg" alt="GMD Soundtrax" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </Page>
  );
}
