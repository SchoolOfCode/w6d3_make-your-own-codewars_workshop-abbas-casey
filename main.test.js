//👉 Write your tests below here:

import { separateNumbersAndStrings } from "./main.js";

describe("separateNumbersAndStrings", () => {
    it("should return an array of strings and an array of numbers, nested into one array.", () => {
        //['a', 1, 'b', 2] => [['a', 'b'], [1,2]]
        const input = ["a", 1, "b", 2];
        const expected = [
            ["a", "b"],
            [1, 2],
        ];
        const actual = separateNumbersAndStrings(input);

        expect(actual).toStrictEqual(expected);
    });

    it("for an input of array containing only numbers, should return an array nested with an empty array and the array of numbers", () => {
        const input = [1, 2, 3, 4, 1131, 12313, 921987];
        const expected = [
            [],
            [1, 2, 3, 4, 1131, 12313, 921987]
        ];
        const actual = separateNumbersAndStrings(input);

        expect(actual).toStrictEqual(expected);
    });

    it("should return 2 strings even if only Strings are given", () => {
        const input = ["a", "b", "c", "d"];
        const expected = [
            ["a", "b", "c", "d"],
            []
        ];
        const actual = separateNumbersAndStrings(input);

        expect(actual).toStrictEqual(expected);
    });
});

describe("is the things input right???", () => {
    it("should only contain letters and numbers", () => {
        const input = [".", 1, "-", 2];
        const actual = () => separateNumbersAndStrings(input);

        expect(actual).toThrow("this aint it cheif");
    });
});