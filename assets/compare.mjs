function cents(value) {
  const text = String(value).trim();
  if (!/^(?:\d{1,7}(?:\.\d{1,2})?|\.\d{1,2})$/.test(text)) throw Error('Enter nonnegative dollar amounts with up to two decimal places.');
  const [whole, fraction = ''] = text.split('.');
  return Number(whole) * 100 + Number(fraction.padEnd(2, '0'));
}
export function compareCosts(input) {
  const monthsText = String(input.months).trim();
  if (!/^\d{1,3}$/.test(monthsText) || +monthsText < 1 || +monthsText > 120) throw Error('Choose a whole number of months from 1 to 120.');
  const months = Number(monthsText);
  const a = (cents(input.aMonthly) + cents(input.aExtra)) * months + cents(input.aSetup);
  const b = (cents(input.bMonthly) + cents(input.bExtra)) * months + cents(input.bSetup);
  return {months, a, b, difference: b - a};
}
