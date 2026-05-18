export const parseMoney = (amount: any = 0, currency: string = "NGN") => {
  const numAmount = parseFloat(amount);
  const localeMap: Record<string, string> = {
    NGN: "en-NG",
    USD: "en-US",
    EUR: "de-DE",
    GBP: "en-GB",
  };

  const locale = localeMap[currency] || "en-US";

  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    currencyDisplay: "symbol",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formatter.format(numAmount);
};