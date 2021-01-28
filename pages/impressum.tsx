import Head from "next/head";
import React from "react";
import Page from "../components/Page";

export default function Impressum(props: {}) {
  return (
    <Page>
      <Head>
        <title>Impressum - gauting.live</title>
      </Head>
      <div className="container">
        <h2>
          <strong>Impressum</strong>
        </h2>

        <p className="lead">
          Hinter der privaten Initiative stehen Kulturschaffende,
          Kulturinteressierte und Lokalpolitiker*innen aus den Reihen der Grünen
          und der Liste "Menschen für Gauting/Piraten", die gauting.live
          ehrenamtlich organisieren. Unterstützt werden sie vom Theaterforum
          Gauting e.V. sowie dem Förderverein Kulturspektakel e.V.. Die Gemeinde
          stellt gauting.live das bosco, Bürger- und Kulturhaus Gauting für die
          Shows kostenlos zur Verfügung.
        </p>

        <p>
          <strong>Verantwortlich im Sinne von § 5 TMG:</strong>
        </p>
        <p>
          Förderverein Kulturspektakel Gauting e.V.
          <br />
          c/o Jugendzentrum Gauting
          <br />
          Bahnhofstr. 6<br />
          82131 Gauting
        </p>
      </div>
    </Page>
  );
}
