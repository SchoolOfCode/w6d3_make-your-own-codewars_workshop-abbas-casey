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

    it("should return an array nested with an empty array and the array of numbers, for an input of array containing only numbers", () => {
        const input = [1, 2, 3, 4, 1131, 12313, 921987];
        const expected = [
            [],
            [1, 2, 3, 4, 1131, 12313, 921987]
        ];
        const actual = separateNumbersAndStrings(input);

        expect(actual).toStrictEqual(expected);
    });

    it("should return an array nested with an empty array and the array of strings, for an input of array containing only strings", () => {
        const input = ["a", "b", "c", "d"];
        const expected = [
            ["a", "b", "c", "d"],
            []
        ];
        const actual = separateNumbersAndStrings(input);

        expect(actual).toStrictEqual(expected);
    });

    it("should separate numbers and strings that look like numbers", () => {
        const input = [1, "1", 2, "2", 1235, 1312, "1235", "1312"];
        const expected = [
            ["1", "2", "1235", "1312"],
            [1, 2, 1235, 1312]
        ];
        const actual = separateNumbersAndStrings(input);

        expect(actual).toStrictEqual(expected);
    });

    it("should return two empty arrays nested in an array if the input array is empty", () => {
        const input = [];
        const expected = [[], []];
        const actual = separateNumbersAndStrings(input);

        expect(actual).toStrictEqual(expected);
    });

    it("should work for negative numbers", () => {
        const input = ["a", "cat", -1, 1, "is", "fat", -2347];
        const expected = [["a", "cat", "is", "fat"], [-1, 1, -2347]];
        const actual = separateNumbersAndStrings(input);

        expect(actual).toStrictEqual(expected);
    });

    it("should work for decimal numbers", () => {
        const input = ["much", "wow", 89.234, "amaze", .0001];
        const expected = [["much", "wow", "amaze"], [89.234, .0001]];
        const actual = separateNumbersAndStrings(input);

        expect(actual).toStrictEqual(expected);
    });

});

describe("is the things input right???", () => {
    it("should throw an error if the input isn't only letters and numbers", () => {
        const input = [".", 1, "-", 2];
        const actual = () => separateNumbersAndStrings(input);

        expect(actual).toThrow("this aint it chief");
    });

    it("should throw an error if the input isn't only letters and numbers", () => {
        const input = ["hello", "world", "!", 1000];
        const actual = () => separateNumbersAndStrings(input);

        expect(actual).toThrow("this aint it chief");
    });

    it("should throw an error if the input isn't only letters and numbers", () => {
        const input = [12315, 12312, "...", 12356];
        const actual = () => separateNumbersAndStrings(input);

        expect(actual).toThrow("this aint it chief");
    });

    it("should throw an error if there is whitespace in a string", () => {
        const input = ["hello world", "there is a space here"];
        const actual = () => separateNumbersAndStrings(input);

        expect(actual).toThrow("this aint it chief");
    });

});

const testTable = [
    [
        ["test1", 123], [["test1"], [123]]
    ],
    [
        ["test", 123], [["test"], [123]]
    ],
    [
        ["test", 123], [["test"], [123]]
    ],
    [
        ["test", 123], [["test"], [123]]
    ],
    [
        ["test", 123], [["test"], [123]]
    ],
    [
        ["test", 123], [["test"], [123]]
    ],
    [
        ["test", 123], [["test"], [123]]
    ],
    [
        ["test", 123], [["test"], [123]]
    ],
    [
        ["test", 123], [["test"], [123]]
    ],
    [
        ["test", 123], [["test"], [123]]
    ],
    [
        ["test", 123], [["test"], [123]]
    ]
];