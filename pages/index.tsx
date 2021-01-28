import { GetServerSideProps } from "next";
import Bar from "../components/Bar";
import {
  fetchOpinions,
  fetchPageProps,
  formatCurrency,
  PageProps,
} from "../utils/betterplace";
import DonateNow from "../components/Donate";
import DonationList from "../components/DonationList";
import Countdown from "../components/Countdown";
import React from "react";
import Link from "next/link";
import Page from "../components/Page";
import Reminder from "../components/Reminder";

export default function Home(props: PageProps) {
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
            <h3>Unser Ziel: {formatCurrency(props.goals[0], false)}</h3>
            {props.totalAmount > props.goals[0] && (
              <div className="achieved">
                <img src="/check-badge.svg" />
                Ziel erreicht
              </div>
            )}
            <p>
              Mit {formatCurrency(props.goals[0], false)} können wir die
              geplanten fünf Veranstaltungen durchführen.
            </p>
            <p>
              Die Summe setzt sich zusammen aus Gagen für Künstler*innen und
              einem kleineren Teil für Fixkosten für technisches Equipment und
              Aufwandsentschädigungen für Techniker*innen und Kameraleute.
            </p>
          </div>

          <div className="goal">
            <h3>Darüber hinaus&hellip;</h3>
            <p>
              Auch wenn wir das {formatCurrency(props.goals[0], false)}-Ziel
              erreicht haben, bitten wir Euch weiter für unser Projekt zu
              spenden. Zusätzliche Spendeneinnahmen werden wir für eine
              Aufstockung der bisher knappen Gagen für Künstler*innen und
              Techniker*innen verwenden. Und wer weiß, vielleicht können wir
              sogar noch weitere Veranstaltungen realisieren.
            </p>
          </div>
        </div>
      </main>
      <div className="container">
        <DonateNow />
      </div>
      <main className="live">
        <div className="container">
          <div className="inner">
            <h2>Livestream</h2>
            <Reminder isDark />
          </div>
        </div>
      </main>
      <main>
        <div>
          <div className="container goals">
            <div className="goal schedule">
              <ul>
                <li>
                  <time>Freitag, 12. Februar, 20:00 Uhr</time>
                  <h4>Ludwig Seuss Band</h4>
                  <p>
                    Mit seiner Band vermischt Ludwig Seuss klassischen
                    Piano-Boogie mit Jump-Blues und Louisiana-R&amp;R.
                  </p>
                </li>

                <li>
                  <time>Samstag, 13. Februar, 16:00 Uhr</time>
                  <h4>Greulmüllersche HörspielManufaktur</h4>
                  <p>
                    &bdquo;Pünktchen und Anton&rdquo;, für Kinder ab 6 und
                    Erwachsene
                  </p>
                </li>

                <li>
                  <time>Freitag, 26. Februar, 20:00 Uhr</time>
                  <h4>Faltsch Wagoni</h4>
                  <p>
                    In ihren Programmen verbinden Der&amp;Die Prosperi
                    satirische Wortkunst und inszenierte Poetry-Songs zu
                    außergewöhnlichen Shows.
                    <h4>BusStopRokkers</h4>
                    <p>
                      Das ist Blues Rockabilly &amp; Seemannsgarn. Ein Road-Trip
                      von Tennessee bis an die peitschende Ostsee.
                    </p>
                  </p>
                </li>
                <li>
                  <time>Freitag, 12. März, 20:00 Uhr</time>
                  <h4>Organ Explosion</h4>
                  <p>
                    Mit ihrem Sammelsurium analoger Instrumente aus den 60ern
                    und 70ern, mit Phaser, Flanger und Band-Echo kreieren sie
                    einen Sound, an dem die Protagonisten sämtlicher
                    Weltraumheldenserien ihre Freude hätten.
                  </p>
                </li>
                <li>
                  <time>Freitag, 26. März, 20:00 Uhr</time>
                  <h4>Stray Colors</h4>
                  <p>
                    Ein kunterbuntes Leuchtfeuer aus Balkan, Folk und Indie.
                    Dazu der zweistimme Gesang von Rüdiger Sinn und Zlatko
                    Pasalic.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
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

export const getServerSideProps: GetServerSideProps<PageProps> = fetchPageProps;
