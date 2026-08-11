/*
Problem 05: Word Frequency Counter
Difficulty: Medium
Function Name: countWordFrequency

Description:
Write a function that takes a string sentence and returns an object containing 
the frequency count of each word. All words should be converted to lowercase 
before counting to ensure case insensitivity.

Input:
A string sentence (e.g., "JS is awesome and JS is powerful").

Output:
An object where keys are individual lowercase words and values are their occurrence counts
(e.g., { js: 2, is: 2, awesome: 1, and: 1, powerful: 1 }).

Validation Rules:
Return "Invalid" if:
1. Input is not of type string.
2. Input is an empty string or contains only whitespace characters.
*/

function countWordFrequency(sentence) {
    if (typeof sentence !== "string" || sentence.trim().length === 0) {
        return "Invalid";
    }

    const wordsArray = sentence.trim().toLowerCase().split(" ");
    const wordObj = {};

    for (const word of wordsArray) {
        if (wordObj[word]) {
            wordObj[word] += 1;
        } else {
            wordObj[word] = 1;
        }
    }

    return wordObj;
}

let sentence = "JS is awesome and JS is powerful";
console.log(countWordFrequency(sentence));
