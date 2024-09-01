/**
 * Converts a number representing money into a currency formatted string.
 * Uses the Intl.NumberFormat API to format the number into USD currency format.
 * @param money - The number to be converted into currency format.
 * @returns A string representing the formatted currency in USD.
 */
export function int2USD(money: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(money);
}
