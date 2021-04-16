import React, { useCallback, useEffect, useState } from "react";
import Video from "./Video";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import SeasonBadge from "./SeasonBadge";
import { useWindowWidth } from "@react-hook/window-size";

export default function Schedule() {
  const windowWidth = useWindowWidth();
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(300);

  useEffect(() => {
    setTimeout(() => updateSize(), 0);
  }, [windowWidth]);

  const updateSize = useCallback(() => {
    const cards = Array.from(document.querySelectorAll(".card")).map((c) =>
      c.getBoundingClientRect()
    );
    setHeight(cards.reduce((acc, card) => Math.max(acc, card.height), 0));
    setWidth(cards.reduce((acc, card) => Math.max(acc, card.width), 0));
  }, [setWidth, setHeight]);

  const minWidth = 370;
  const visibleSlides = Math.max(1, Math.floor(windowWidth / minWidth));

  if (windowWidth === 0) {
    return null;
  }

  return (
    <CarouselProvider
      naturalSlideWidth={width}
      naturalSlideHeight={height}
      totalSlides={8}
      visibleSlides={visibleSlides}
    >
      <Slider className="schedule">
        <Card
          thumbnail="/s2e2.jpg"
          index={6}
          season={2}
          episode={2}
          time="Samstag, 24. April, 19:00 Uhr"
        >
          <h4>SpielLust #3: Aufführung des 3. Theaterjugendclubs Gauting</h4>
          <p>
            Unter Leitung von Sebastian Hofmüller, Yvonne Kalles und Tobias
            Weber bringen die Teil&shy;nehmer*innen des 3.&nbsp;Gautinger
            Theaterjugendclubs ihre eigene Theaterproduktion zur Aufführung.
          </p>
          <p>
            Aufgeführt wird &bdquo;Weltuntergang&rdquo; &mdash; oder &bdquo;Die
            Jugend muss mal wieder als Hoffnungsträger für die verkorkste
            Menschheit herhalten&rdquo;, ein Distanz-Theaterstück von Jura
            Soyfer.
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
          index={6}
          season={2}
          episode={1}
          time="Freitag, 16. April, 20:00 Uhr"
          youtube="pnpbbj0vQPU"
        >
          <h4>Dr. Will &amp; The Wizards</h4>
          <p>
            Der stimmgewaltige Dr. Will im roten Anzug samt Zylinder ist einer
            der großartigsten Blueser und Entertainer. Wuchtiger
            Kontra&shy;bass, schwirrendes Banjo-Picking, magische Gitarren und
            Dr. Will selbst am stampfenden Stand&shy;schlagzeug.
          </p>
          <h4>Synergy</h4>
          <p>
            Saxofonist Michael Hornstein und der Pianist Oliver Hahn jenseits
            aller Genregrenze ein erprobtes Team. Für ihr neues Programm haben
            die Jazz-Musiker neue Spielmodelle entwickelt, die erst im Moment
            der Aufführung konkrete Form annehmen und trotz intuitiver
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
          index={5}
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
            Die Musik der drei Welt-Musiker Ehab Abou Fakher (Viola), Roman
            Bunka (Oud) und Luis Borda (Gitarre) ist geprägt durch
            argentinischen Tango und arabischen Taqsims, den
            Klang-Konstruktionen Neuer Musik und der Liebe zu Rhythmus und
            Improvisation.
          </p>
        </Card>
        <Card
          thumbnail="/s1e5.jpg"
          index={4}
          season={1}
          episode={5}
          youtube="txE-kQQ7QJY"
          time="Freitag, 12. März, 20:00 Uhr"
        >
          <h4>Organ Explosion</h4>
          <p>
            Mit ihrem Sammelsurium analoger Instrumente aus den 60ern und 70ern,
            mit Phaser, Flanger und Band-Echo kreieren sie einen Sound, an dem
            die Protagonisten sämtlicher Weltraumheldenserien ihre Freude
            hätten.
          </p>
          <h4>Black Patti</h4>
          <p>
            Mit ihrem abwechslungsreichen Roots-Musik-Repertoire zwischen
            tiefschwarzem Delta Blues, federndem Ragtime und beseelten
            Spirituals.
          </p>
        </Card>
        <Card
          thumbnail="/s1e4.jpg"
          index={3}
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
            Gesang begeben sich Ricardo Volkert und Jost-H. Hecker auf eine
            Tour, die vor allem durch den Süden Spaniens, durch Andalusien
            führt.
          </p>
        </Card>
        <Card
          thumbnail="/s1e3.jpg"
          index={2}
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
          index={1}
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
          index={0}
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
            Erik Berthold spielt mit akustischer Gitarre Westcoast Music auf
            seine eigene, sympathische Art interpretiert.{" "}
          </p>
        </Card>
      </Slider>
    </CarouselProvider>
  );
}

function Card(props: {
  index: number;
  season: number;
  episode: number;
  youtube?: string;
  thumbnail: string;
  time: string;
  children: any;
}) {
  return (
    <Slide index={props.index} classNameHidden="hiddenCard">
      <div className="card">
        <Video
          id={props.youtube}
          service="youtube"
          thumbnail={props.thumbnail}
        />
        <div className="cardContent">
          <time>{props.time}</time>
          <div>
            <SeasonBadge season={props.season} />
            <span className="episodeLabel">Episode {props.episode}</span>
          </div>
          {props.children}
        </div>
      </div>
    </Slide>
  );
}
