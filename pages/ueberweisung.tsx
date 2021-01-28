import Head from "next/head";
import React from "react";
import Page from "../components/Page";

export default function Impressum(props: {}) {
  return (
    <Page>
      <Head>
        <title>Spenden per &Uuml;berweisung - gauting.live</title>
      </Head>
      <div className="container">
        <h2>
          Spenden per <strong>Überweisung</strong>
        </h2>

        <p className="lead">
          Am einfachsten ist die Spende über betterplace.org, alternativ kann
          auch per Überweisung gespendet werden.
        </p>

        <p>
          <strong>Kontoinhaber:</strong>
          <br />
          Förderverein Kulturspektakel Gauting e.V.
          <br />
        </p>
        <p>
          <strong>IBAN:</strong>
          <br />
          DE32 7025 0150 0022 7836 09
        </p>
        <p>
          Wenn eine Spendenquittung benötigt wird, bitte eine E-Mail an
          info@gauting.live senden.
        </p>
      </div>
    </Page>
  );
}
