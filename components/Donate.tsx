import { useCallback } from "react";

export default function DonateNow() {
  const onClick = useCallback(async () => {
    const { id } = await fetch(`/api/donate`).then((res) => res.json());
    window.location.href = `https://www.betterplace.org/de/donate/kulturspektakel-gauting/projects/${process.env.NEXT_PUBLIC_BETTERPLACE_PROJECT}?client_reference=${id}`;
  }, []);
  return (
    <a onClick={onClick} className="donateNow">
      Jetzt Spenden
    </a>
  );
}
