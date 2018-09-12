import Big from "big.js";

import operate from "./operate";
import isNumber from "./isNumber";


export default function calculate(obj, buttonName) {
  if (buttonName === "AC") {
    return {
      total: null,
      next: null,
      operation: null
    };
  }

  if (isNumber(buttonName)) {
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

  if (buttonName === ".") {
    if (obj.next) {
      if (obj.next.includes(".")) {
        return {};
      }
      return { next: obj.next + "." };
    }
    return { next: "0." };
  }

  if (buttonName === "=") {
    if (obj.next && obj.operation) {
      return {
        total: operate(obj.total, obj.next, obj.operation),
        next: null,
        operation: null,
      };
    } else {
      return {};
    }
  }

  if (obj.operation) {
    return {
      total: operate(obj.total, obj.next, obj.operation),
      next: null,
      operation: buttonName,
    };
  }


  if (!obj.next) {
    return { operation: buttonName };
  }

  return {
    total: obj.next,
    next: null,
    operation: buttonName,
  };
}