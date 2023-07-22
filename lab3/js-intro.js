function myFunctionTest(expected, found) {
    let predicate;
    if (Array.isArray(found)) predicate = arraysAreEqual(expected, found);
    else predicate = expected === found;
    return predicate ? "TEST SUCCEEDED" : "TEST FAILED. Expected " + expected + " found " + found;
}

const arraysAreEqual = (a, b) =>
    a.length === b.length && a.every((v, i) => v === b[i]);


function max(a, b) {
    return a > b ? a : b;
}

console.log("Expected output of max(20,10) is 20 -> " + myFunctionTest(20, max(20, 10)));

function maxOfThree(a, b, c) {
    return max(max(a, b), c);
}

console.log("Expected output of maxOfThree(55,4,44) is 55 -> " + myFunctionTest(55, maxOfThree(55, 4, 44)));

function isVowel(char) {
    return ["a", "e", "i", "o", "u"].includes(char.toLowerCase());
}

console.log("Expected output of isVowel('a') is true -> " + myFunctionTest(true, isVowel("a")));


function sum(arr) {
    return arr.reduce((acc, item) => acc + item, 0);
}

console.log("Expected output of sum([1,2,3,4]) is 10 -> " + myFunctionTest(10, sum([1, 2, 3, 4])));

function multiply(arr) {
    return arr.reduce((a, b) => a * b, 1);
}

console.log("Expected output of multiply([1,2,3,4]) is 10 -> " + myFunctionTest(24, multiply([1, 2, 3, 4])));

function reverse(str) {
    // return str.split("").reverse().join(""); // <- also works
    return [...str].reverse().join("");
}

console.log("Expected output of reverse('xylem') is melyx -> " + myFunctionTest("melyx", reverse("xylem")));

function findLongestWord(words) {
    return words.reduce((longestLength, word) => {
        return longestLength > word.length ? longestLength : word.length;
    }, 0);
}

console.log("Expected output of findLongestWord(['One','Three','Configure','xylem']) is 9 => " +
    myFunctionTest(9, findLongestWord(['One', 'Three', 'Configure', 'xylem'])));


function filterLongWords(words, i) {
    return words.filter(word => word.length > i);
}

console.log("Expected output of filterLongWords(['One','Threes','Configure','xylem'], 5) is ['Threes','Configure'] => " +
    myFunctionTest(["Threes", "Configure"], filterLongWords(["One", "Threes", "Configure", "xylem"], 5)));


const a = [1, 3, 5, 3, 3];
console.log(`Initial Array a: ${a}`);

const multiplyBy10 = a.map(element => element * 10);
console.log(`All elements multiplied by 10 => ${multiplyBy10} ${myFunctionTest([10, 30, 50, 30, 30], multiplyBy10)}`);

const threeArray = a.map(() => 3);
console.log(`Array with all elements equal to 3 => ${threeArray} ${myFunctionTest([3, 3, 3, 3, 3], threeArray)}`);

console.log(`Product of all elements => ${multiply(a)} ${myFunctionTest(135, multiply(a))}`);