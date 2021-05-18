import React from "react";
import Video from "./Video";
import SeasonBadge from "./SeasonBadge";
import Masonry from "react-masonry-css";

export default function Schedule() {
  return (
    <Masonry
      breakpointCols={{
        default: 4,
        1349: 3,
        960: 2,
        600: 1,
      }}
      className="schedule"
    >
      <Card
        thumbnail="/s2e4.jpg"
        season={2}
        episode={4}
        time="Freitag, 14. Mai, 20:00 Uhr"
        youtube="QDfOBIYqW5Q"
      >
        <h4>Embryo</h4>
        <p>
          Seit 52 Jahren lässt sich Embryo nicht von Genregrenzen aufhalten,
          mischt Jazz, Weltmusik, Rock, Psychedelisches und vieles mehr. 2015
          übernahm die Marja Burchard, Tochter des Mitbegründers Christian
          Burchard, die Leitung der Band und führte sie auf neues Terrain.
        </p>
        <h4>Joel Frederiksen &amp; Domen Marinčič</h4>
        <p>
          Joel Frederiksen (Bass, Laute, Erzlaute) und Domen Marinčič (Viola da
          Gamba) spielen in ihrem Programm "Orpheus, I am" Werke aus Renaissance
          und Frühbarock, aktuelle Eigenkompositionen von Joel Frederiksen und
          neue Arrangements von Leonard-Cohen-Songs.
        </p>
        <p>
          <a
            className="learnMore"
            target="_blank"
            href="https://bosco-gauting.de/veranstaltungen/gautinglive-embryo-joel-frederiksen"
          >
            &rarr; mehr zur Veranstaltung
          </a>
        </p>
      </Card>
      <Card
        thumbnail="/s2e3.jpg"
        season={2}
        episode={3}
        time="Freitag, 30. April, 20:00 Uhr"
        youtube="TSCn3xTCxJg"
      >
        <h4>The Ukelites</h4>
        <p>
          Was als kleines Duo für Wohnzimmerkonzerte angefangen hatte – mit
          Miriam Hein als Sängerin an der Ukulele sowie Steffen Günter, der mit
          seinem kleinen Ukulelen-Bass, hat sich in der Live-Besetzung Quartett
          mit Hawaiian Steel Guitar und Schlagzeug ausgeweitet.
        </p>
        <h4>Kilian Kemmer Trio</h4>
        <p>
          Nietzsches Idee der „ewigen Wiederkunft“ inspirierte den Pianisten
          Kilian Kemmer. Mit Benjamin Schäfer (Bass) und Matthias Gmelin (Drums)
          spielt das Trio Jazz zum Runterkommen und Genießen.
        </p>
        <p>
          <a
            className="learnMore"
            target="_blank"
            href="https://bosco-gauting.de/veranstaltungen/gautinglive-the-ukelites-kilian-kemmer-trio"
          >
            &rarr; mehr zur Veranstaltung
          </a>
        </p>
      </Card>
      <Card
        thumbnail="/s2e2.jpg"
        season={2}
        episode={2}
        time="Samstag, 24. April, 19:00 Uhr"
        youtube="Bo6_omEbr8M"
      >
        <h4>SpielLust #3: Aufführung des 3. Theaterjugendclubs Gauting</h4>
        <p>
          Unter Leitung von Sebastian Hofmüller, Yvonne Kalles und Tobias Weber
          bringen die Teil&shy;nehmer*innen des 3.&nbsp;Gautinger
          Theaterjugendclubs ihre eigene Theaterproduktion zur Aufführung.
        </p>
        <p>
          Aufgeführt wird &bdquo;Weltuntergang&rdquo; &mdash; oder &bdquo;Die
          Jugend muss mal wieder als Hoffnungsträger für die verkorkste
          Menschheit herhalten&rdquo;, ein Distanz-Theaterstück von Jura Soyfer.
        </p>
        <p>
          <a
            className="learnMore"
            target="_blank"
            href="https://bosco-gauting.de/veranstaltungen/spiellust-3-auffüuhrung-des-3.-Theaterjugendclubs%20Gauting"
          >
            &rarr; mehr zur Veranstaltung
          </a>
        </p>
      </Card>
      <Card
        thumbnail="/s2e1.jpg"
        season={2}
        episode={1}
        time="Freitag, 16. April, 20:00 Uhr"
        youtube="pnpbbj0vQPU"
      >
        <h4>Dr. Will &amp; The Wizards</h4>
        <p>
          Der stimmgewaltige Dr. Will im roten Anzug samt Zylinder ist einer der
          großartigsten Blueser und Entertainer. Wuchtiger Kontra&shy;bass,
          schwirrendes Banjo-Picking, magische Gitarren und Dr. Will selbst am
          stampfenden Stand&shy;schlagzeug.
        </p>
        <h4>Synergy</h4>
        <p>
          Saxofonist Michael Hornstein und der Pianist Oliver Hahn jenseits
          aller Genregrenze ein erprobtes Team. Für ihr neues Programm haben die
          Jazz-Musiker neue Spielmodelle entwickelt, die erst im Moment der
          Aufführung konkrete Form annehmen und trotz intuitiver
          Herangehensweise einer klaren Dramaturgie folgen.
        </p>
        <p>
          <a
            className="learnMore"
            target="_blank"
            href="https://bosco-gauting.de/veranstaltungen/gautinglive-dr-will-and-the-wizards"
          >
            &rarr; mehr zur Veranstaltung
          </a>
        </p>
      </Card>
      <Card
        thumbnail="/s1e6.jpg"
        season={1}
        episode={6}
        youtube="qXDjDaNriXQ"
        time="Freitag, 26. März, 20:00 Uhr"
      >
        <h4>Stray Colors</h4>
        <p>
          Ein kunterbuntes Leuchtfeuer aus Balkan, Folk und Indie. Dazu der
          zweistimme Gesang von Rüdiger Sinn und Zlatko Pasalic.
        </p>
        <h4>Orientacion</h4>
        <p>
          Die Musik der drei Welt-Musiker Ehab Abou Fakher (Viola), Roman Bunka
          (Oud) und Luis Borda (Gitarre) ist geprägt durch argentinischen Tango
          und arabischen Taqsims, den Klang-Konstruktionen Neuer Musik und der
          Liebe zu Rhythmus und Improvisation.
        </p>
      </Card>
      <Card
        thumbnail="/s1e5.jpg"
        season={1}
        episode={5}
        youtube="txE-kQQ7QJY"
        time="Freitag, 12. März, 20:00 Uhr"
      >
        <h4>Organ Explosion</h4>
        <p>
          Mit ihrem Sammelsurium analoger Instrumente aus den 60ern und 70ern,
          mit Phaser, Flanger und Band-Echo kreieren sie einen Sound, an dem die
          Protagonisten sämtlicher Weltraumheldenserien ihre Freude hätten.
        </p>
        <h4>Black Patti</h4>
        <p>
          Mit ihrem abwechslungsreichen Roots-Musik-Repertoire zwischen
          tiefschwarzem Delta Blues, federndem Ragtime und beseelten Spirituals.
        </p>
      </Card>
      <Card
        thumbnail="/s1e4.jpg"
        season={1}
        episode={4}
        youtube="XkHTiG9GeDs"
        time="Freitag, 5. März, 20:00 Uhr"
      >
        <h4>Lasst uns träumen (Klassik)</h4>
        <p>
          Musik &amp; Texte interpretiert von Halina Bertram (Klavier), Gisela
          Auspurg (Violoncello) und Ernst Matthias Friedrich (Sprecher)
        </p>
        <h4>Cuentos Del Sur (Flamenco)</h4>
        <p>
          Mit rassiger Flamencogitarre, virtuosem Violoncello und spanischem
          Gesang begeben sich Ricardo Volkert und Jost-H. Hecker auf eine Tour,
          die vor allem durch den Süden Spaniens, durch Andalusien führt.
        </p>
      </Card>
      <Card
        thumbnail="/s1e3.jpg"
        season={1}
        episode={3}
        youtube="fnpg7DILlDo"
        time="Freitag, 26. Februar, 20:00 Uhr"
      >
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
      </Card>
      <Card
        thumbnail="/s1e2.jpg"
        season={1}
        episode={2}
        time="Samstag, 13. Februar, 16:00 Uhr"
      >
        <h4>Greulmüllersche HörspielManufaktur</h4>
        <p>
          &bdquo;Pünktchen und Anton&rdquo; von Erich Kästner als
          Live-Hörspiel-Abenteuer - für Kinder ab 6 und Erwachsene
        </p>
      </Card>
      <Card
        thumbnail="/s1e1.jpg"
        season={1}
        episode={1}
        youtube="xoU6oxA1f-Q"
        time="Freitag, 12. Februar, 20:00 Uhr"
      >
        <h4>Ludwig Seuss Band</h4>
        <p>
          Mit seiner Band vermischt Ludwig Seuss klassischen Piano-Boogie mit
          Jump-Blues und Louisiana-R&amp;R.
        </p>
        <h4>Erik Berthold</h4>
        <p>
          Erik Berthold spielt mit akustischer Gitarre Westcoast Music auf seine
          eigene, sympathische Art interpretiert.{" "}
        </p>
      </Card>
    </Masonry>
  );
}

function Card(props: {
  season: number;
  episode: number;
  youtube?: string;
  thumbnail: string;
  time: string;
  children: any;
}) {
  return (
    <div className="card">
      <Video id={props.youtube} service="youtube" thumbnail={props.thumbnail} />
      <div className="cardContent">
        <time>{props.time}</time>
        <div>
          <SeasonBadge season={props.season} />
          <span className="episodeLabel">Episode {props.episode}</span>
        </div>
        {props.children}
      </div>
    </div>
  );
}
