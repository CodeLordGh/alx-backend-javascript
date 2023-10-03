const cleanSet = (set, startString) => {
  if (startString === "" || typeof startString !== "string") return "";

  const strings = [];

  set.forEach((element) => {
    if (typeof element === "string" && element.startsWith(startString)) {
      strings.push(element.slice(startString.length));
    }
  });
  return strings.join("-");
};

export default cleanSet;
