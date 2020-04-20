import { getBirthYearOptions } from "./select-utils";

// getBirthYearOptions

test("getBirthYearOptions - default maxOffset", () => {
  expect(getBirthYearOptions()[0]).toBe(2020);
  expect(getBirthYearOptions()[120]).toBe(1900);
});

test("getBirthYearOptions - custom maxOffset", () => {
  expect(getBirthYearOptions()[0]).toBe(2020);
  expect(getBirthYearOptions()[50]).toBe(1970);
});
