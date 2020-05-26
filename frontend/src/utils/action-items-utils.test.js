import { sortItemsBackwards } from "./action-items-utils";

// sortItemsBackwards

test("sortItemsBackwards", () => {
  expect(
    sortItemsBackwards([
      { id: "1" },
      { id: "4" },
      { id: "3" },
      { id: "5" },
      { id: "2" },
    ])
  ).toEqual([{ id: "5" }, { id: "4" }, { id: "3" }, { id: "2" }, { id: "1" }]);
});
