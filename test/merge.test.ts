import {merge}  from "../src/merge";

describe("merge function test", () => {
    test("should merge and sort all arrays", () => {
        const result = merge(
            [1, 2, 3, 4],
            [5, 7, 8, 9],
            [9, 6, 5, 1]
        );
        expect(result).toEqual([1, 1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 9]);
    });

    test("empty 1 arrays", () => {
        const result = merge(
            [],
            [1, 2],
            [9, 6, 5, 1]
        );
        expect(result).toEqual([1, 1, 2, 5, 6, 9]);
    })

    test("empty 2 arrays", () => {
        const result = merge(
            [],
            [],
            [9, 6, 5, 1]
        );
        expect(result).toEqual([1,5,6,9]);
    })

    test("empty 3 arrays", () => {
        const result = merge(
            [],
            [],
            []
        );
        expect(result).toEqual([]);
    })

    test("test sorted correct", () => {
        const result = merge(
            [-1, 0, 2, 10],
            [5, 9, 20],
            [11]
        );
        expect(result).toEqual([-1, 0, 2, 5, 9, 10, 11, 20]);
    })
});
