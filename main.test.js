//👉 Write your tests below here:

import { separateNumbersAndStrings } from "./main.js";

describe("separateNumbersAndStrings", () => {
    it("should return an array of numbers and an array of strings, nested into one array.", () => {
        //['a', 1, 'b', 2] => [['a', 'b'], [1,2]]
        const input = ["a", 1, "b", 2];
        const expected = [
            ["a", "b"],
            [1, 2],
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