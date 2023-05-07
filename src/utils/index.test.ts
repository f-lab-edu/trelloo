import { convertValuesToString } from "./index";

describe("test convertValuesToString", () => {
  it("test stringify values", () => {
    convertValuesToString<Record<string, string>>({ key: "value" });
  });
});
