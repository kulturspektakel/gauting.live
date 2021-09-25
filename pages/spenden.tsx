import Head from "next/head";
import React from "react";
import Page from "../components/Page";

export default function Spenden() {
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
          Spenden verwendet haben.
        </p>

        <table className="donations">
          <tr>
            <td>
              <h4>Einnahmen aus Spenden</h4>
              Über unsere Webseite, betterplace und Direktspenden auf unser
              Konto.
            </td>
            <td>33.237,00&nbsp;&euro;</td>
          </tr>
          <tr>
            <td>
              <h4>Gagen für Künstler*innen</h4>
              Unsere Künstler*innen sind alle weit unter ihren üblichen Gagen
              aufgetreten, trotzdem war es Ziel des Projekts die Künster*innen
              während der Pandemie zu unterstützen.
            </td>
            <td className="negative">-16.934,40&nbsp;&euro;</td>
          </tr>
          <tr>
            <td>
              <h4>Gebühren</h4>
              Für Spenden über betterplace werden 2,5% des Spendenbetrags für
              die Zahlungsabwicklung{" "}
              <a
                href="https://www.betterplace.org/c/hilfe/wann-fallen-transaktionskosten-an"
                target="_blank"
              >
                einbehalten
              </a>
              . Zusätzlich wurden Beiträge an die Künstlersozialkasse gezahlt.
            </td>
            <td className="negative">-1434,84&nbsp;&euro;</td>
          </tr>
          <tr>
            <td>
              <h4>Aufwandsentschädigungen</h4>
              Unseren Kameraleuten, Toningenieur*innen und Techniker*innen habe
              wir eine kleine Entschädigung gezahlt, die jedoch fernab üblicher
              Tagessätze ist.
            </td>
            <td className="negative">-7.958,50&nbsp;&euro;</td>
          </tr>
          <tr>
            <td>
              <h4>Mietkosten für Equipment</h4>
              Kameras, Videoschnitttechnik, Mischpulte, Beleuchtung und mehr das
              wir zu einem Freundschaftspreis leihen konnten.
            </td>
            <td className="negative">-4.277,52&nbsp;&euro;</td>
          </tr>
          <tr>
            <td>
              <h4>Catering</h4>
              Verpflegung für Crew und Künstler*innen.
            </td>
            <td className="negative">-1.599,61&nbsp;&euro;</td>
          </tr>
          <tr>
            <td>
              <h4>COVID-19 Schnelltests</h4>
              Für die sicher Durchführung der Veranstaltung wurden alle
              Beteiligten regelmäßig getestet.
            </td>
            <td className="negative">-368,77&nbsp;&euro;</td>
          </tr>
        </table>
        <p>
          Damit verbleibt aktuell ein Restbetrag von{" "}
          <strong>663,36&nbsp;&euro;</strong> beim Förderverein Kulturspektakel,
          den wir entweder für ein Team-Event oder eine zukünftige Veranstaltung
          verwenden werden.
        </p>
      </div>
    </Page>
  );
}
