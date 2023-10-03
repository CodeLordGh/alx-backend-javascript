export const weakMap = new WeakMap();

export const queryAPI = (endoint) => {
  if (weakMap.has(endoint)) {
    const endpointData = weakMap.get(endoint);
    if (endpointData >= 4) {
      throw new Error("Endpoint load is high");
    }
    weakMap.set(endoint, endpointData + 1);
  } else {
    weakMap.set(endoint, 1);
  }
};
