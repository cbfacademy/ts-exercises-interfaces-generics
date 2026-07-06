import { describe, expect, it } from 'vitest';

// Autograding for Session 3: Interfaces, type aliases, and generics.
// The conversion here is about type safety — making groupBy generic does not
// change its runtime behaviour, so these tests pin the grouping behaviour the
// student must preserve. Whether the nonsense calls fail to *compile* is a
// type-checker concern, verified by `npx tsc`, not by Vitest.
import { groupBy } from '../exercise/group-by';

describe('session 3: groupBy', () => {
    it('groups items by the key selector', () => {
        const words = ['apple', 'avocado', 'banana', 'blueberry', 'cherry'];
        const result = groupBy(words, (word: string) => word[0]);
        expect(result).toEqual({
            a: ['apple', 'avocado'],
            b: ['banana', 'blueberry'],
            c: ['cherry'],
        });
    });

    it('returns an empty object for an empty array', () => {
        expect(groupBy([], (x: unknown) => String(x))).toEqual({});
    });

    it('handles a single item', () => {
        const result = groupBy(['solo'], (word: string) => word[0]);
        expect(result).toEqual({ s: ['solo'] });
    });
});
