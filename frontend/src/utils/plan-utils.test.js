import {
  calcMonthlyValue,
  calcProtectionMultiplier,
  calcProtection,
  calcSavingsLowerBound,
  calcSavingsUpperBound,
  calcRetirementMultiplier,
  calcRetirement,
  calcDebtMonthly,
  calcSalaryAfterDebt,
  calcSavings,
  calcFixedExpenses,
  calcSpending,
  calcRetirementMonthly,
  numWithCommas,
} from "./plan-utils";

// calcMonthlyValue

test("calcMonthlyValue - divides by twelve", () => {
  expect(calcMonthlyValue(12)).toBe(1);
});

// calcProtectionMultiplier

test("calcProtectionMultiplier - less than 39, multiplier is 20", () => {
  expect(calcProtectionMultiplier(30)).toBe(20);
});

test("calcProtectionMultiplier - equal to 39, multiplier is 20", () => {
  expect(calcProtectionMultiplier(39)).toBe(20);
});

test("calcProtectionMultiplier - equal to 40, multiplier is 12", () => {
  expect(calcProtectionMultiplier(40)).toBe(12);
});

test("calcProtectionMultiplier - greater than 40 & less than 49, multiplier is 12", () => {
  expect(calcProtectionMultiplier(45)).toBe(12);
});

test("calcProtectionMultiplier - equal to 49, multiplier is 12", () => {
  expect(calcProtectionMultiplier(49)).toBe(12);
});

test("calcProtectionMultiplier - equal to 50, multiplier is 12", () => {
  expect(calcProtectionMultiplier(50)).toBe(6);
});

test("calcProtectionMultiplier - greater than 50 & less than 59, multiplier is 12", () => {
  expect(calcProtectionMultiplier(55)).toBe(6);
});

test("calcProtectionMultiplier - equal to 59, multiplier is 12", () => {
  expect(calcProtectionMultiplier(59)).toBe(6);
});

test("calcProtectionMultiplier - otherwise, multiplier is 6", () => {
  expect(calcProtectionMultiplier(100)).toBe(6);
});

// calcProtection

test("calcProtection - multiply the salary and multiplier", () => {
  expect(calcProtection(8, 3)).toBe(24);
});

// calcSavingsLowerBound

test("calcSavingsLowerBound - multiply the salary by 3", () => {
  expect(calcSavingsLowerBound(3)).toBe(9);
});

// calcSavingsUpperBound

test("calcSavingsUpperBound - multiply the salary by 6", () => {
  expect(calcSavingsUpperBound(3)).toBe(18);
});

// calcRetirementMultiplier

test("calcRetirementMultiplier - less than 39, multiplier is 1", () => {
  expect(calcRetirementMultiplier(30)).toBe(1);
});

test("calcRetirementMultiplier - equal to 40, multiplier is 3", () => {
  expect(calcRetirementMultiplier(40)).toBe(3);
});

test("calcRetirementMultiplier - greater than 40 and less than 49, multiplier is 3", () => {
  expect(calcRetirementMultiplier(45)).toBe(3);
});

test("calcRetirementMultiplier - equal to 49, multiplier is 3", () => {
  expect(calcRetirementMultiplier(49)).toBe(3);
});

test("calcRetirementMultiplier - equal to 50, multiplier is 6", () => {
  expect(calcRetirementMultiplier(50)).toBe(6);
});

test("calcRetirementMultiplier - greater than 50 and less than 59, multiplier is 6", () => {
  expect(calcRetirementMultiplier(55)).toBe(6);
});

test("calcRetirementMultiplier - equal to 59, multiplier is 6", () => {
  expect(calcRetirementMultiplier(59)).toBe(6);
});

test("calcRetirementMultiplier - equal to 60, multiplier is 8", () => {
  expect(calcRetirementMultiplier(60)).toBe(8);
});

test("calcRetirementMultiplier - greater than 60, multiplier is 8", () => {
  expect(calcRetirementMultiplier(65)).toBe(8);
});

test("calcRetirementMultiplier - equal to 66, multiplier is 8", () => {
  expect(calcRetirementMultiplier(66)).toBe(8);
});

test("calcRetirementMultiplier - equal to 67, multiplier is 10", () => {
  expect(calcRetirementMultiplier(67)).toBe(10);
});

test("calcRetirementMultiplier - greater than 67, multiplier is 10", () => {
  expect(calcRetirementMultiplier(70)).toBe(10);
});

// calcRetirement

test("calcRetirement - multiply salary by mulitiplier", () => {
  expect(calcRetirement(500, 2)).toBe(1000);
});

// calcDebtMonthly

test("calcDebtMonthly - multiply salary by 0.36 & divide by 12", () => {
  expect(calcDebtMonthly(500)).toBe(15);
});

// calcSalaryAfterDebt

test("calcSalaryAfterDebt - salary minus debt", () => {
  expect(calcSalaryAfterDebt(500, 5000)).toBe(4500);
});

// calcSavings

test("calcSavings - multiply salary by 0.2 & divide by 12", () => {
  expect(calcSavings(3000)).toBe(50);
});

// calcFixedExpenses

test("calcFixedExpenses - multiply salary by 0.5 & divide by 12", () => {
  expect(calcFixedExpenses(9000)).toBe(375);
});

// calcSpending

test("calcSpending - multiply salary by 0.3 & divide by 12", () => {
  expect(calcSpending(5000)).toBe(125);
});

// calcRetirementMonthly

test("calcRetirementMonthly - divide monthly salary by years", () => {
  expect(calcRetirementMonthly(5000, 2)).toBe(2500);
});

// numWithCommas

test("numWithCommas - add commas to number hundred", () => {
  expect(numWithCommas(100)).toBe("100");
});

test("numWithCommas - add commas to number thousand", () => {
  expect(numWithCommas(1000)).toBe("1,000");
});

test("numWithCommas - add commas to number ten thousand", () => {
  expect(numWithCommas(10000)).toBe("10,000");
});

test("numWithCommas - add commas to number hundred thousand", () => {
  expect(numWithCommas(100000)).toBe("100,000");
});

test("numWithCommas - add commas to number million", () => {
  expect(numWithCommas(1000000)).toBe("1,000,000");
});
