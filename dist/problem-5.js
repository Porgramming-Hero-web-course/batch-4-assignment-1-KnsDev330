"use strict";
const getProperty = (obj, property) => {
    return obj[property];
};
const person = { name: "Alice", age: 30 };
const result = getProperty(person, "name");
console.log(result);
