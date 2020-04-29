import { filterClients } from "./search-utils";

test("filterClients - first name", () => {
  expect(
    filterClients(
      [
        {
          id: 0,
          firstName: "John",
          middleName: "Jacob",
          lastName: "Schmidt",
        },
        {
          id: 1,
          firstName: "John",
          middleName: "Matthew",
          lastName: "Cena",
        },
        {
          id: 2,
          firstName: "Sarah",
          middleName: "Elizabeth",
          lastName: "Parker",
        },
        {
          id: 3,
          firstName: "Jane",
          middleName: "",
          lastName: "Doe",
        },
      ],
      "sar"
    )
  ).toEqual([
    {
      id: 2,
      firstName: "Sarah",
      middleName: "Elizabeth",
      lastName: "Parker",
    },
  ]);
});

test("filterClients - middle name", () => {
  expect(
    filterClients(
      [
        {
          id: 0,
          firstName: "John",
          middleName: "Jacob",
          lastName: "Schmidt",
        },
        {
          id: 1,
          firstName: "John",
          middleName: "Matthew",
          lastName: "Cena",
        },
        {
          id: 2,
          firstName: "Sarah",
          middleName: "Elizabeth",
          lastName: "Parker",
        },
        {
          id: 3,
          firstName: "Jane",
          middleName: "",
          lastName: "Doe",
        },
      ],
      "eliz"
    )
  ).toEqual([
    {
      id: 2,
      firstName: "Sarah",
      middleName: "Elizabeth",
      lastName: "Parker",
    },
  ]);
});

test("filterClients - last name", () => {
  expect(
    filterClients(
      [
        {
          id: 0,
          firstName: "John",
          middleName: "Jacob",
          lastName: "Schmidt",
        },
        {
          id: 1,
          firstName: "John",
          middleName: "Matthew",
          lastName: "Cena",
        },
        {
          id: 2,
          firstName: "Sarah",
          middleName: "Elizabeth",
          lastName: "Parker",
        },
        {
          id: 3,
          firstName: "Jane",
          middleName: "",
          lastName: "Doe",
        },
      ],
      "park"
    )
  ).toEqual([
    {
      id: 2,
      firstName: "Sarah",
      middleName: "Elizabeth",
      lastName: "Parker",
    },
  ]);
});

test("filterClients - full name", () => {
  expect(
    filterClients(
      [
        {
          id: 0,
          firstName: "John",
          middleName: "Jacob",
          lastName: "Schmidt",
        },
        {
          id: 1,
          firstName: "John",
          middleName: "Matthew",
          lastName: "Cena",
        },
        {
          id: 2,
          firstName: "Sarah",
          middleName: "Elizabeth",
          lastName: "Parker",
        },
        {
          id: 3,
          firstName: "Jane",
          middleName: "",
          lastName: "Doe",
        },
      ],
      "john jac"
    )
  ).toEqual([
    {
      id: 0,
      firstName: "John",
      middleName: "Jacob",
      lastName: "Schmidt",
    },
  ]);
});

test("filterClients - first and last name", () => {
  expect(
    filterClients(
      [
        {
          id: 0,
          firstName: "John",
          middleName: "Jacob",
          lastName: "Schmidt",
        },
        {
          id: 1,
          firstName: "John",
          middleName: "Matthew",
          lastName: "Cena",
        },
        {
          id: 2,
          firstName: "Sarah",
          middleName: "Elizabeth",
          lastName: "Parker",
        },
        {
          id: 3,
          firstName: "Jane",
          middleName: "",
          lastName: "Doe",
        },
      ],
      "john schm"
    )
  ).toEqual([
    {
      id: 0,
      firstName: "John",
      middleName: "Jacob",
      lastName: "Schmidt",
    },
  ]);
});
