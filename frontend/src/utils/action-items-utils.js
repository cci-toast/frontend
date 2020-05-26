export function compare(a, b) {
  const itemA = a.id.toUpperCase();
  const itemB = b.id.toUpperCase();

  let comparison = 0;
  if (itemA < itemB) {
    comparison = 1;
  } else if (itemA > itemB) {
    comparison = -1;
  }
  return comparison;
}

export function sortItemsBackwards(items) {
  return items.sort(compare);
}
