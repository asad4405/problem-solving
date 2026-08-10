

// Problem — Bonus Score Calculator
//  Function Name Must be: bonusScore
// In a programming contest, each participant's score is provided as an array of numbers.

// After the contest ends, 10 bonus marks will be added to each participant's score. The function must then return the total sum of all updated scores.

// Input
// An array of numbers, for example: 
// [80, 65, 90, 75]

// Output
// 350

// Explanation
// Updated Scores: (10 added to each)
// [90, 75, 100, 85]
// Total: 
// 90 + 75 + 100 + 85 = 350


// Challenge
// Return "Invalid" If:
// The input is not an array
// The array is empty
// The array contains any data type other than numbers

// Tips: You can use map() and reduce() to solve this problem.

// Starter Code:
// function bonusScore(scores) {
//     // Write your code here
// }


// Sample Test Cases
// Input
// Output
// [80, 65, 90, 75]
// 350
// [100]
// 110
// [0, 10]
// 30
// []
// Invalid
// "scores"
// Invalid
// [80, "90", 70]
// Invalid





// Problem 24 — Bonus Score Calculator

function bonusScore(scores) {
    if (!Array.isArray(scores) || scores.length === 0) {
        return "Invalid";
    }

    for (const score of scores) {
        if (typeof score !== "number") {
            return "Invalid";
        }
    }

    let newScores = scores.map(score => score + 10);
    let totalScores = newScores.reduce((accumulator, score) => accumulator + score, 0);
    return totalScores;
}

let numbers = [80, 65, 90, 75];
console.log(bonusScore(numbers));
