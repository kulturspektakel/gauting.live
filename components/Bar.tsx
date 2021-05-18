export default function Bar(props: {
  totalAmount: number;
  goals: number[];
  donationsCount: number;
}) {
  return (
    <main className="current bgcolor">
      <div className="container">
        <h2>
          <strong>33.157,00&thinsp;&euro;</strong> von 742&nbsp;Spender*innen
        </h2>
      </div>
    </main>
  );
}
