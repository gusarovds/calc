import Big from "big.js";

export default function setValue(obj, buttonName) {

  if (buttonName === ".") {
    if (obj.next) {
      if (obj.next.includes(".")) {
        return {};
      }
      return { next: obj.next + "." };
    }
    return { next: "0." };
  }

  if (buttonName === "0" && obj.next === "0") {
    return {};
  }
  if (obj.operation) {
    if (obj.next) {
      return { next: obj.next + buttonName };
    }
    return { next: buttonName };
  }
  if (obj.next) {
    return {
      next: obj.next + buttonName,
      total: null,
    };
  }
  return {
    next: buttonName,
    total: null,
  };

}