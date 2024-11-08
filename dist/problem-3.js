"use strict";
const countWordOccurrences = (haystack, needle) => {
    needle = needle.toLocaleLowerCase();
    let count = 0;
    haystack.toLocaleLowerCase().split(" ").forEach(word => {
        if (word === needle)
            count++;
    });
    return count;
};
const r3 = countWordOccurrences("I love typescript typeScript typescript", "typescript");
console.log(r3);
