export const calcMonthlyValue = (value) => value / 12;

export const calcProtectionMultiplier = (age) => {
  let multiplier;
  if (age <= 39) {
    multiplier = 20;
  } else if (age >= 40 && age <= 49) {
    multiplier = 12;
  } else if (age >= 50 && age <= 59) {
    multiplier = 6;
  } else {
    multiplier = 6;
  }
  return multiplier;
};

export const calcProtection = (salary, multiplier) => salary * multiplier;

export const calcSavingsLowerBound = (monthlySalary) => monthlySalary * 3;

export const calcSavingsUpperBound = (monthlySalary) => monthlySalary * 6;

export const calcRetirementMultiplier = (age) => {
  let multiplier;
  if (age < 39) {
    multiplier = 1;
  } else if (age >= 40 && age < 49) {
    multiplier = 3;
  } else if (age >= 50) {
    multiplier = 6;
  } else if (age >= 60) {
    multiplier = 8;
  } else if (age >= 67) {
    multiplier = 10;
  }
  return multiplier;
};

export const calcRetirement = (salary, partnerSalaries, multiplier) =>
  salary * multiplier + partnerSalaries * multiplier;

export const calcDebtMonthly = (salary) => calcMonthlyValue(salary * 0.36);

export const calcSalaryAfterDebt = (debtMonthly, salaryMonthly) =>
  salaryMonthly - debtMonthly;

export const calcSavings = (salary) => calcMonthlyValue(salary * 0.2);

export const calcFixedExpenses = (salary) => calcMonthlyValue(salary * 0.5);

export const calcSpending = (salary) => calcMonthlyValue(salary * 0.3);
