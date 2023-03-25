import { formatDate } from "./date";

describe("formatDate", () => {
  it("should format date", () => {
    const date = new Date(2020, 0, 1);
    const formattedDate = formatDate(date);

    expect(formattedDate).toBe("2020-01-01");
  });
});
