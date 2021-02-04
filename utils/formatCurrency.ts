export default function formatCurrency(
  amount: number,
  showFraction: boolean = true
): string | null {
  if (typeof amount !== "number") {
    return null;
  }
  var formatter = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: showFraction ? 2 : 0,
    minimumFractionDigits: showFraction ? 2 : 0,
  });

  return formatter.format(amount / 100);
}
