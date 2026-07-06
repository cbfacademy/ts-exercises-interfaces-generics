// Session 3 independent exercise starter.
// Rename this file to group-by.ts, then follow the README.

// Groups the items in an array by a key. The keySelector is a function
// that takes an item and returns the name of the group it belongs to.
// Returns an object mapping each group name to the items in that group.
export function groupBy(items, keySelector) {
    const groups = {};
    for (const item of items) {
        const key = keySelector(item);
        if (!groups[key]) {
            groups[key] = [];
        }
        groups[key].push(item);
    }
    return groups;
}

// Try it: compile with `npx tsc`, then run `node group-by.js`.
const words = ['apple', 'avocado', 'banana', 'blueberry', 'cherry'];
console.log(groupBy(words, (word) => word[0]));

// The JavaScript version will happily do nonsense. Once the function is
// generic, the compiler should reject calls like these. Uncomment them
// after your conversion and check that they no longer compile:
// console.log(groupBy('not an array', (word) => word[0]));
// console.log(groupBy(words, (word) => word.length));
