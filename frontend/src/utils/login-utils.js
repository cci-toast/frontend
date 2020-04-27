export const users = [
  {
    email: "client@client.com",
    password: "client",
    user: "client",
  },
  {
    email: "advisor@advisor.com",
    password: "advisor",
    user: "advisor",
  },
  {
    email: "jbrown46@gmail.com",
    password: "apple",
    user: "client",
  },
  {
    email: "mkelly200@gmail.com",
    password: "milk",
    user: "advisor",
  },
];

export function lookupUser(email, password) {
  let currentUser = users.filter(
    (user) => user.email === email && user.password === password
  );

  return !!currentUser.length ? currentUser[0].user : null;
}
