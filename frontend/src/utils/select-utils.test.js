import { getStateCode, getBirthYearOptions } from "./select-utils";

// getStateCode

test("getStateCode - found", () => {
  expect(getStateCode("Pennsylvania")).toBe("PA");
});

test("getStateCode - not found", () => {
  expect(getStateCode("Test")).toBe(null);
});

// getBirthYearOptions

test("getBirthYearOptions - default maxOffset", () => {
  expect(getBirthYearOptions()[0]).toBe(2020);
  expect(getBirthYearOptions()[120]).toBe(1900);
});

test("getBirthYearOptions - custom maxOffset", () => {
  expect(getBirthYearOptions(50)[0]).toBe(2020);
  expect(getBirthYearOptions(50)[50]).toBe(1970);
});
