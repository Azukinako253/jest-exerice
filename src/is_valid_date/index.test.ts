import {isValidDate} from "@/is_valid_date";

describe("isValidDate", () => {
  test("should return true for valid dates", () => {
    expect(isValidDate(2023, 1, 15)).toBe(true); // January 15, 2023
    expect(isValidDate(2020, 2, 29)).toBe(true); // February 29, 2020 (leap year)
    expect(isValidDate(2021, 12, 31)).toBe(true); // December 31, 2021
  });

  test("should return false for invalid dates", () => {
    expect(isValidDate(2023, 2, 30)).toBe(false); // February 30, 2023
    expect(isValidDate(2021, 4, 31)).toBe(false); // April 31, 2021
    expect(isValidDate(2019, 2, 29)).toBe(false); // February 29, 2019 (not a leap year)
    expect(isValidDate(2023, 13, 1)).toBe(false); // Invalid month (13)
    expect(isValidDate(2023, 0, 10)).toBe(false); // Invalid month (0)
    expect(isValidDate(2023, 5, 0)).toBe(false); // Invalid day (0)
    expect(isValidDate(2023, 5, 32)).toBe(false); // Invalid day (32)
    expect(isValidDate(0, 1, 1)).toBe(false); // Year 0 is not valid
  });
});
