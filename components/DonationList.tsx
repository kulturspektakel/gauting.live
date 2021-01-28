import { useCallback, useState } from "react";
import { formatRelative } from "date-fns";
import { de } from "date-fns/locale";
import Masonry from "react-masonry-css";
import { Await, fetchOpinions, formatCurrency } from "../utils/betterplace";

export default function DonationList(props: {
  initialOpinions: Await<ReturnType<typeof fetchOpinions>>;
}) {
  const [donations, setDonations] = useState(props.initialOpinions.donations);
  const [nextPage, setNextPage] = useState<number | null>(
    props.initialOpinions.nextPage
  );
  const [loading, setLoading] = useState(false);

  const loadMore = useCallback(async () => {
    setLoading(true);
    const {
      donations: newDonations,
      nextPage: newNextPage,
    } = await fetchOpinions(nextPage);
    setNextPage(newNextPage);
    setDonations(donations.concat(newDonations));
    setLoading(false);
  }, [nextPage, setLoading]);

  return (
    <>
      <Masonry
        breakpointCols={{
          default: 3,
          700: 2,
          450: 1,
        }}
        className="donationsList"
        columnClassName="donationsListColumn"
      >
        {donations.map((donation, i) => (
          <li className="donation" key={i}>
            <div>
              <h3>
                {donation.amount ? (
                  <strong>{formatCurrency(donation.amount)}</strong>
                ) : (
                  ["💰", "💵", "💶", "💷", "💴", "🤑"][i % 5]
                )}
              </h3>
              <h4>{donation.name ?? "Anonyme Spende"}</h4>
              <h5>
                {formatRelative(new Date(donation.createdAt), new Date(), {
                  locale: de,
                })}
              </h5>
              {donation.message && <p>&bdquo;{donation.message}&rdquo;</p>}
            </div>
          </li>
        ))}
      </Masonry>
      {nextPage && !loading && (
        <button className="loadMore" onClick={loadMore}>
          mehr anzeigen
        </button>
      )}
    </>
  );
}
