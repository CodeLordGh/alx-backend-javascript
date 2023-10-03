const updateUniqueItems = (map) => {
  if (!(map instanceof Map)) throw new Error("Cannot process");

  for (const [element, quantity] of map.entries()) {
    if (quantity === 1) map.set(element, 100);
  }

  return map;
};

export default updateUniqueItems;
