# Session 3: Interfaces, type aliases, and generics

**What you are practising:** converting a working but unsafe utility into a generic function the compiler can reason about.

## Setup

Accept the assignment, clone **your** repository, then install the tooling once:

```bash
npm install
```

## The workflow

1. Open a terminal in the `exercise/` folder.
2. Rename the starter: `mv group-by.js group-by.ts`.
3. Work through what the compiler surfaces.
4. Compile with a bare `npx tsc`. Not `npx tsc group-by.ts`: a filename argument makes `tsc` skip `tsconfig.json`, so the strict settings would not apply.
5. Run the output: `node group-by.js`.

## Your task

The file contains `groupBy`, a utility that groups items in an array by a key. The JavaScript version works, but it has no type safety and will happily do nonsense if you pass it the wrong inputs.

1. Rename `group-by.js` to `group-by.ts`.
2. Convert the function to a generic that takes:
    - an array of items of type `T`
    - a key-selector function that returns a `string` given a `T`
3. Return a `Record<string, T[]>` (a lookup of group name to items).
4. Add a small test block that groups an array of learners by the first letter of their name.
5. Compile with `npx tsc` and run it with `node group-by.js`.

The starter ends with two commented-out nonsense calls. Once your conversion is done, uncomment them and check the compiler rejects both.

Keep the exported function name (`groupBy`) — the autograder imports it by name.

## Stretch goals

- Make the key selector generic too. What happens if you let it return any type, not just `string`? What type would the returned `Record` need to be?
- Add a second function, `partition`, which splits an array in two based on a predicate. Type it generically.
- Does your `groupBy` handle an empty array? What about an array with one item?

## Done when

`npx tsc` completes with no errors, the nonsense calls fail to compile when uncommented, `node group-by.js` prints your groupings (including the learners test block), and your work is committed and pushed.

## How your work is graded

Every push runs two GitHub Actions checks:

- **Type check** — runs `npx tsc` on your exercise under the strict settings, once you have renamed the starter to `.ts`.
- **Autograding** — runs an automated test suite (Vitest) against your functions and reports a functionality score, plus an automated code-quality review.
