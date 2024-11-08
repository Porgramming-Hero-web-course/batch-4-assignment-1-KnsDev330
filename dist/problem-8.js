"use strict";
const validateKeys = (obj, keys) => {
    let r = true;
    keys.forEach(key => {
        if (!(key in obj)) {
            r = false;
        }
    });
    return r;
};
const person1 = { name: "Alice", age: 25, email: "alice@example.com" };
const r8 = validateKeys(person1, ["name", "age"]);
console.log(r8);
