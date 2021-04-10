import Head from "next/head";
import React from "react";
import Page from "../components/Page";

export default function Impressum(props: {}) {
  return (
    <Page>
      <Head>
        <title>Spendenübersicht</title>
      </Head>
      <div className="container">
        <h2>
          <strong>Spendenübersicht</strong>
        </h2>

        <p className="lead">
          Wir möchten euch transparent darlegen, wofür wir eure großzügigen
          Spenden der ersten Staffel verwendet haben.
        </p>

        <table className="donations">
          <tr>
            <td>
              <h4>Einnahmen aus Spenden</h4>
              Über unsere Webseite, betterplace und Direktspenden auf unser
              Konto.
            </td>
            <td>26.204,00&nbsp;&euro;</td>
          </tr>
          <tr>
            <td>
              <h4>Gagen für Künstler*innen</h4>
              Unsere Künstler*innen sind alle weit unter ihren üblichen Gagen
              aufgetreten, trotzdem war es Ziel des Projekts die Künsterinnen
              während der Pandemie zu unterstützen.
            </td>
            <td className="negative">-11.735,40&nbsp;&euro;</td>
          </tr>
          <tr>
            <td>
              <h4>Gebühren</h4>
              Für die Abwicklung der Spenden über betterplace werden 2.5% für
              die Zahlungsabwicklung{" "}
              <a
                href="https://www.betterplace.org/c/hilfe/wann-fallen-transaktionskosten-an"
                target="_blank"
              >
                einbehalten
              </a>
              . Zusätzlich wurden Beiträge an die Künstlersozialkasse gezahlt.
            </td>
            <td className="negative">-1.311,58&nbsp;&euro;</td>
          </tr>
          <tr>
            <td>
              <h4>Aufwandsentschädigungen</h4>
              Unseren Kameraleuten, Toningenieur*innen und Techniker*innen habe
              wir eine kleine Entschädigung gezahlt, die jedoch fernab üblicher
              Tagessätze ist.
            </td>
            <td className="negative">-5.602,50&nbsp;&euro;</td>
          </tr>
          <tr>
            <td>
              <h4>Mietkosten für Equipment</h4>
              Kameras, Videoschnitttechnik, Mischpulte, Beleuchtung und mehr für
              das wir zu einem Freundschaftspreis leihen konnten.
            </td>
            <td className="negative">-4.082,72&nbsp;&euro;</td>
          </tr>
          <tr>
            <td>
              <h4>Catering</h4>
              Verpflegung für Crew und Künstler*innen.
            </td>
            <td className="negative">-971,80&nbsp;&euro;</td>
          </tr>
        </table>
        <p>
          Damit bleibt uns aktuell ein Restbetrag von{" "}
          <strong>2,500&nbsp;&euro;</strong> den wir als Rücklage verwenden um
          die zweite Staffel zu produzieren.
        </p>
      </div>
    </Page>
  );
}
