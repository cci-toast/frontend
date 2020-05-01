export function filterClients(clients, searchTerm) {
  return clients.filter((client) => {
    let fullName = `${client.firstName.toUpperCase()} ${client.middleName.toUpperCase()} ${client.lastName.toUpperCase()}`;
    let firstAndLast = `${client.firstName.toUpperCase()} ${client.lastName.toUpperCase()}`;

    return (
      client.firstName.toUpperCase().includes(searchTerm.toUpperCase()) ||
      client.middleName.toUpperCase().includes(searchTerm.toUpperCase()) ||
      client.lastName.toUpperCase().includes(searchTerm.toUpperCase()) ||
      fullName.includes(searchTerm.toUpperCase()) ||
      firstAndLast.includes(searchTerm.toUpperCase())
    );
  });
}
