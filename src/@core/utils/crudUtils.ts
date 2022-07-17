export function removeMany<T extends { _id: string }>(
  items: T[] = [],
  itemIds: string[],
) {
  return items.filter((item) => !itemIds.includes(item._id));
}

export function removeOne<T extends { _id: string }>(
  items: T[] = [],
  itemId: T,
) {
  let data = items.filter((item) => item._id !== itemId._id);

  return data;
}

export function updateOne<T extends { _id: string }>(
  items: T[] = [],
  updatedItem: T,
) {
  return items.map((item) =>
    item._id === updatedItem._id ? updatedItem : item,
  );
}

export function addOne<T>(items: T[] = [], newItem: T) {
  // console.log(newItem);
  return [...items, newItem];
}
