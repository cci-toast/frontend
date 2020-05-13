import {
  calcMonthlyValue,
  calcSalaryAfterDebt,
  numWithCommas,
} from "./plan-utils";

// calcMonthlyValue

test("calcMonthlyValue - divides by twelve", () => {
  expect(calcMonthlyValue(12)).toBe(1);
});

// calcSalaryAfterDebt

test("calcSalaryAfterDebt - salary minus debt", () => {
  expect(calcSalaryAfterDebt(500, 5000)).toBe(4500);
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
