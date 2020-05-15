export const calcMonthlyValue = (value) => Math.ceil(value / 12);

export const calcSalaryAfterDebt = (debtMonthly, salaryMonthly) =>
  salaryMonthly - debtMonthly;

export function numWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
