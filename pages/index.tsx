import DonationList from "../components/DonationList";
import React from "react";
import Link from "next/link";
import Page from "../components/Page";
import Schedule from "../components/Schedule";
import formatCurrency from "../utils/formatCurrency";

export default function Home() {
  return (
    <Page>
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
            Spendenfinanziert bieten wir eine Reihe Videostreams mit Live-Musik,
            Lesungen, Talks mit bekannten und neuen Gästen an.
          </div>

          <div>
            <img src="/video-game-logo-stream.svg" width="40" />
            <br />
            Die Veranstaltungen werden per Livestream aus dem bosco übertragen
            und anschließend als Aufzeichnung angeboten.
          </div>

          <div>
            <img src="/love-heart-hands-hold-3.svg" width="40" />
            <br />
            Die Spenden werden ausschließlich dazu verwendet die beteiligten
            Künstler&shy;*innen und Techniker&shy;*innen zu unterstützen.
          </div>
        </div>
      </div>
      <main className="current bgcolor">
        <div className="container">
          <h2>
            <strong>{formatCurrency(3323700)}</strong> von
            744&nbsp;Spender*innen
          </h2>
        </div>
      </main>
      <main>
        <div className="container goals">
          <div className="goal">
            <h3>Vielen Dank!</h3>

            <p>
              Insgesamt sind {formatCurrency(2620400)} in der ersten Staffel und{" "}
              {formatCurrency(703300)} in der zweiten Staffel für das Projekt
              gespendet worden. Damit konnten wir unsere zehn
              Ver&shy;anstal&shy;tungen mit insgesamt 18&nbsp; Live-Acts auf die
              Beine stellen.
            </p>
            <p>
              Dank eurer Spenden konnten wir unsere Künstler*innen und
              Techniker*innen in Zeiten der Pandemie unterstützen. Mehr
              Informationen zur Verwendung der Spendengelder könnt ihr auf
              unserer <Link href="/spenden">Übersichts&shy;seite</Link> finden.
            </p>
          </div>
          <div className="goal">
            <h3>Über 15.000 Zuschauer*innen</h3>
            <p>
              Unsere Livestreams und Aufzeichnungen auf Facebook, YouTube und
              Instagram haben insgesamt mehr als 15.000&nbsp;Personen erreicht.
              Mehr als wir je gedacht hätten.
            </p>
            <p>
              Die Umsetzung des Projekts wurde von unserer 30-köpfigen Crew aus
              Kameraleuten, Veran&shy;staltungs&shy;techniker*innen und vielen
              weiteren gestemmt.
            </p>
          </div>
        </div>
      </main>
      <main className="live">
        <div className="container">
          <div className="inner">
            <h2>2&nbsp;Staffeln, 10&nbsp;Episoden</h2>
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
