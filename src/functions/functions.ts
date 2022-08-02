export const persian = (number: string) => {
  const persian = number.replace(/\d/g, (d: any) => "۰۱۲۳۴۵۶۷۸۹"[d]);
  return persian;
};
export function separateNumber(number: number) {
  let newNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  newNumber = persian(newNumber);
  return newNumber;
}
