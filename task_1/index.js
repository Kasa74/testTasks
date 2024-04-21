import { encoded, translations } from "./data.js";

import { encoded, translations } from "./data.js";

const EXCEPTIONS = ["groupId", "service", "formatSize", "ca"];
const uniqIds = [];

encoded.forEach((obj) => {
  Object.keys(obj).forEach((key) => {
    const id = Number(obj[key]);

    if (isNaN(id)) {
      return;
    }
    const hasId = translations.hasOwnProperty(id);

    if (hasId && !EXCEPTIONS.includes(obj[key])) {
      obj[key] = translations[id];
    }
    if (!hasId && !uniqIds.includes(id)) {
      uniqIds.push(id);
    }
  });
});

console.log(encoded);
console.log(uniqIds);

// console.log(decoded)
