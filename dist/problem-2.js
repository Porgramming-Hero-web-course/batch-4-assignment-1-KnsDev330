"use strict";
// Sample Input:
const removeDuplicates = (a) => {
    const r = [];
    const added = {};
    a.forEach(num => {
        if (!added[num])
            r.push(num);
        added[num] = true;
    });
    return r;
};
const r2 = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
console.log(r2);
