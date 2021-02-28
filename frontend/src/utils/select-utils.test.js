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
  expect(getBirthYearOptions()[0]).toBe(new Date().getFullYear());
  expect(getBirthYearOptions()[120]).toBe(1900);
});

test("getBirthYearOptions - custom maxOffset", () => {
  expect(getBirthYearOptions(50)[0]).toBe(new Date().getFullYear());
  expect(getBirthYearOptions(50)[50]).toBe(1970);
});
