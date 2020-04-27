import { lookupUser } from "./login-utils";

// lookupUser

test("lookupUser - client", () => {
  expect(lookupUser("client@client.com", "client")).toBe("client");
});

test("lookupUser - advisor", () => {
  expect(lookupUser("advisor@advisor.com", "advisor")).toBe("advisor");
});
