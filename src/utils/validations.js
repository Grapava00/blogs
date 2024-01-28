export const wordsValidate = (value) => {
  if (value.split(" ").length >= 2) {
    return "correct-text";
  } else if (value.split(" ").length < 2 && value !== "") {
    return "error-text";
  } else {
    return "";
  }
};

export const wordsValidateForBorder = (value) => {
  if (value.split(" ").length >= 2) {
    return "correct-border";
  } else if (value.split(" ").length < 2 && value !== "") {
    return "error-border";
  } else {
    return "";
  }
};

export const authorSymbolsValidate = (value) => {
  if (value.length >= 4) {
    return "correct-text";
  } else if (value.length < 4 && value !== "") {
    return "error-text";
  } else {
    return "";
  }
};

export const titleSymbolsValidate = (value) => {
  if (value.length >= 4) {
    return "correct-text";
  } else if (value.length < 4 && value !== "") {
    return "error-text";
  } else {
    return "";
  }
};

export const titleSymbolsValidateForBorder = (value) => {
  if (value.length >= 4) {
    return "correct-border";
  } else if (value.length < 4 && value !== "") {
    return "error-border";
  } else {
    return "";
  }
};

export const textAreaSymbolsValidate = (value) => {
  if (value.length >= 2) {
    return "correct-text";
  } else if (value.length < 2 && value !== "") {
    return "error-text";
  } else {
    return "";
  }
};

export const textAreaSymbolsValidateForBorder = (value) => {
  if (value.length >= 2) {
    return "correct-border";
  } else if (value.length < 2 && value !== "") {
    return "error-border";
  } else {
    return "";
  }
};

export const patternValidate = (value) => {
  if (value === "") {
    return "";
  } else if (/^[ა-ჰ ]+$/.test(value)) {
    return "correct-text";
  } else {
    return "error-text";
  }
};

export const customWordCountValidation = (value) => {
  const words = value.split(" ").filter((word) => word.trim() !== "");
  return words.length >= 2;
};
