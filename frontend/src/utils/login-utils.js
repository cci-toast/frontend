export const users = [
  {
    email: "jsmith100@client.com",
    password: "client",
    user: "client",
  },
  {
    email: "jbrown200@client.com",
    password: "client",
    user: "client",
  },
  {
    email: "mevans300@advisor.com",
    password: "advisor",
    user: "advisor",
  },
  {
    email: "mkelly400@advisor.com",
    password: "advisor",
    user: "advisor",
  },
  {
    email: "wick@wicks.com",
    password: "client",
    user: "client",
  },
  {
    email: "dexplorer@gmail.com",
    password: "client",
    user: "client",
  },
  {
    email: "toastyavocado@gmail.com",
    password: "client",
    user: "client",
  },
];

export function lookupUser(email, password) {
  let currentUser = users.filter(
    (user) => user.email === email && user.password === password
  );

  return !!currentUser.length ? currentUser[0].user : null;
}
