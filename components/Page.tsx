import React from "react";
import DonateNow from "./Donate";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children: any;
};

export default function Page(props: Props) {
  return (
    <div className="page">
      <header className="header">
        <Head>
          <title>gauting.live</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            property="og:description"
            content="Kultur in der Krise unterstützen."
          />
          <meta property="og:image" content="/share.jpg" />
        </Head>
        <div className="container">
          <Link href="/">
            <a>
              <img src="/logo.svg" height="50" />
            </a>
          </Link>

          <div>
            <DonateNow />
          </div>
        </div>
      </header>
      <main className="main">{props.children}</main>
      <footer className="footer">
        <div className="container">
          <Link href="/impressum">Impressum</Link>
        </div>
      </footer>
    </div>
  );
}
