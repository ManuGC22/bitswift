import { int2USD } from "./FormatUtils";

describe("int2USD", () => {
  it("formats positive integer correctly", () => {
    expect(int2USD(1000)).toBe("$1,000.00");
  });

  it("formats negative integer correctly", () => {
    expect(int2USD(-500)).toBe("-$500.00");
  });

  it("formats float to 2 decimal places", () => {
    expect(int2USD(2500.555)).toBe("$2,500.56");
  });

  it("formats zero correctly", () => {
    expect(int2USD(0)).toBe("$0.00");
  });

  it("formats large number correctly", () => {
    expect(int2USD(1000000)).toBe("$1,000,000.00");
  });
});
