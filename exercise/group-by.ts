// Session 3 reference solution: Interfaces, type aliases, and generics.

export function groupBy<T>(
    items: T[],
    keySelector: (item: T) => string,
): Record<string, T[]> {
    const groups: Record<string, T[]> = {};
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

// Test block: group learners by the first letter of their name.
interface Learner {
    id: string;
    name: string;
}
const learners: Learner[] = [
    { id: 'L001', name: 'Amara' },
    { id: 'L002', name: 'Dev' },
    { id: 'L003', name: 'Amir' },
];
console.log(groupBy(learners, (learner) => learner.name[0]));

// Now generic, the compiler rejects both of these. Uncomment to confirm:
// console.log(groupBy('not an array', (word) => word[0]));
// console.log(groupBy(words, (word) => word.length));
