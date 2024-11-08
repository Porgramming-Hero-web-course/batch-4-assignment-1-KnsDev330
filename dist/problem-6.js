"use strict";
const updateProfile = (obj, upd) => {
    return Object.assign(Object.assign({}, obj), upd);
};
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
const r6 = updateProfile(myProfile, { age: 26 });
console.log(r6);
