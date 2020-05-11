import { lookupUser } from "./login-utils";

// lookupUser

test("lookupUser - client", () => {
  expect(lookupUser("jsmith100@client.com", "client")).toBe("client");
});

test("lookupUser - advisor", () => {
  expect(lookupUser("mevans300@advisor.com", "advisor")).toBe("advisor");
});
