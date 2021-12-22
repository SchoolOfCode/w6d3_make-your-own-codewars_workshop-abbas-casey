/* 
👉 Write your kata here!
*/

//👉 Write the function your CodeWarriors will start with below here:

/*
    Input is an array of numbers and strings.
    Function should return an array with two nested two arrays: one of only the numbers, and one of only the strings.
    ['a', 1, 'b', 2] => [['a', 'b'], [1,2]]

    If there is any string that isn't a letter or a number then throw this error: "this aint it cheif"
*/

export function separateNumbersAndStrings(arr) {
    let stringArr = arr.filter((arr) => {
        let regex = /[a-zA-Z0-9]/g
        if (typeof arr === "string") {
            if (!arr.match(regex)) {
                throw new Error("this aint it cheif");
            }
        }
        return typeof arr === "string"
    });
    let numberArr = arr.filter((arr) => typeof arr === "number");
    let bothArr = [stringArr, numberArr];
    return bothArr;
}