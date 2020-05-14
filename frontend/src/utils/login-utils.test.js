import { lookupUser } from "./login-utils";

// lookupUser

test("lookupUser - client", () => {
  expect(lookupUser("jsmith100@client.com", "client")).toBe("client");
});

test("lookupUser - client", () => {
  expect(lookupUser("jbrown200@client.com", "client")).toBe("client");
});

test("lookupUser - advisor", () => {
  expect(lookupUser("mevans300@advisor.com", "advisor")).toBe("advisor");
});

test("lookupUser - advisor", () => {
  expect(lookupUser("mkelly400@advisor.com", "advisor")).toBe("advisor");
});

test("lookupUser - not found", () => {
  expect(lookupUser("test@advisor.com", "advisor")).toBe(null);
});
