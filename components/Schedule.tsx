import React from "react";
import Video from "./Video";

export default function Schedule() {
  return (
    <div className="container goals">
      <div className="goal schedule">
        <ul>
          <li>
            <time>Freitag, 12. Februar, 20:00 Uhr</time>

            <h4>Ludwig Seuss Band</h4>
            <p>
              Mit seiner Band vermischt Ludwig Seuss klassischen Piano-Boogie
              mit Jump-Blues und Louisiana-R&amp;R.
            </p>
            <h4>Erik Berthold</h4>
            <p>
              Erik Berthold spielt mit akustischer Gitarre Westcoast Music auf
              seine eigene, sympathische Art interpretiert.{" "}
            </p>
            <a
              className="learnMore"
              href="https://bosco-gauting.de/veranstaltungen/gautinglive-ludwig-seuss-band-erik-berthold"
              target="_blank"
            >
              &#8594;&nbsp;Mehr zu dieser Veranstaltung
            </a>
            <Video url="https://www.facebook.com/plugins/video.php?autoplay=false&href=https%3A%2F%2Fwww.facebook.com%2F102218295219502%2Fvideos%2F169705801373499%2F" />
          </li>

          <li>
            <time>Samstag, 13. Februar, 16:00 Uhr</time>
            <h4>Greulmüllersche HörspielManufaktur</h4>
            <p>
              &bdquo;Pünktchen und Anton&rdquo; von Erich Kästner als
              Live-Hörspiel-Abenteuer - für Kinder ab 6 und Erwachsene
            </p>
            <a
              className="learnMore"
              href="https://bosco-gauting.de/veranstaltungen/gautinglive-puenktchen-und-anton"
              target="_blank"
            >
              &#8594;&nbsp;Mehr zu dieser Veranstaltung
            </a>
            <Video url="https://www.facebook.com/plugins/video.php?autoplay=false&href=https%3A%2F%2Fwww.facebook.com%2F102218295219502%2Fvideos%2F741202266785462%2F" />
          </li>

          <li>
            <time>Freitag, 26. Februar, 20:00 Uhr</time>
            <h4>Faltsch Wagoni</h4>
            <p>
              In ihren Programmen verbinden Der&amp;Die Prosperi satirische
              Wortkunst und inszenierte Poetry-Songs zu außergewöhnlichen Shows.
            </p>
            <h4>BusStop Rokkers</h4>
            <p>
              Das ist Blues Rockabilly &amp; Seemannsgarn. Ein Road-Trip von
              Tennessee bis an die peitschende Ostsee.
            </p>
            <a
              className="learnMore"
              href="https://bosco-gauting.de/veranstaltungen/gautinglive-faltsch-wagoni-busstop-rokkers"
              target="_blank"
            >
              &#8594;&nbsp;Mehr zu dieser Veranstaltung
            </a>
          </li>
          <li>
            <time>Freitag, 5. März, 20:00 Uhr</time>
            <h4>Lasst uns träumen&hellip;</h4>
            <p>
              Musik &amp; Texte interpretiert von Halina Bertram (Klavier),
              Gisela Auspurg (Violoncello) und Ernst Matthias Friedrich
              (Sprecher)
            </p>
            <h4>Ricardo Volkert &amp; Jost-H. Hecker</h4>
            <p>
              &bdquo;Cuentos Del Sur&rdquo; Mit rassiger Flamencogitarre,
              virtuosem Violoncello und spanischem Gesang begeben sich die
              beiden Musiker auf eine Tour, die vor allem durch den Süden
              Spaniens, durch Andalusien führt.
            </p>
            <a
              className="learnMore"
              href="https://bosco-gauting.de/veranstaltungen/gautinglive-auspurg-bertram-friedrich-cuentos-del-sur"
              target="_blank"
            >
              &#8594;&nbsp;Mehr zu dieser Veranstaltung
            </a>
          </li>

          <li>
            <time>Freitag, 12. März, 20:00 Uhr</time>
            <h4>Organ Explosion</h4>
            <p>
              Mit ihrem Sammelsurium analoger Instrumente aus den 60ern und
              70ern, mit Phaser, Flanger und Band-Echo kreieren sie einen Sound,
              an dem die Protagonisten sämtlicher Weltraumheldenserien ihre
              Freude hätten.
            </p>
            <h4>Black Patti</h4>
            <p>
              Mit ihrem abwechslungsreichen Roots-Musik-Repertoire zwischen
              tiefschwarzem Delta Blues, federndem Ragtime und beseelten
              Spirituals.
            </p>
            <a
              className="learnMore"
              href="https://bosco-gauting.de/veranstaltungen/gautinglive-organ-explosion-black-patti"
              target="_blank"
            >
              &#8594;&nbsp;Mehr zu dieser Veranstaltung
            </a>
          </li>
          <li>
            <time>Freitag, 26. März, 20:00 Uhr</time>
            <h4>Stray Colors</h4>
            <p>
              Ein kunterbuntes Leuchtfeuer aus Balkan, Folk und Indie. Dazu der
              zweistimme Gesang von Rüdiger Sinn und Zlatko Pasalic.
            </p>
            <a
              className="learnMore"
              href="https://bosco-gauting.de/veranstaltungen/gautinglive-stray-colors"
              target="_blank"
            >
              &#8594;&nbsp;Mehr zu dieser Veranstaltung
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
