// Problem — Elevator Weight Safety Checker
//  Function Name Must be: isElevatorSafe
// একটি অ্যাপার্টমেন্ট বিল্ডিং এর স্মার্ট এলিভেটরের সর্বোচ্চ নিরাপদ ওজন সীমা ৪০০ কেজি। দরজা বন্ধ হওয়ার আগে, এলিভেটরের সেন্সর ভেতরে দাঁড়ানো প্রতিটি মানুষের ওজন একটি Array আকারে রিড করে, এবং একটি ফাংশনকে ঠিক করতে হবে এটা চলা নিরাপদ কিনা।

// Input
// একটি Number array, যেখানে প্রতিটি সংখ্যা একজন মানুষের ওজন (কেজি), যেমনঃ [60, 75, 50]

// Output
// একটি Boolean — true যদি মোট ওজন ৪০০ কেজি বা তার কম হয় (চলা নিরাপদ), false যদি ৪০০ কেজির বেশি হয় (ওভারলোড)।

// Challenge
// Input Array না হলে "Invalid" রিটার্ন করবে।

// টিপস: Array এর মধ্য দিয়ে loop চালিয়ে প্রতিটা weight যোগ করে মোট ওজন বের করো।

// Starter Code:
// function isElevatorSafe(weights) {
//   // Write your code here
// }


// Sample Test Cases
//  Input
//  Output
// [60, 75, 50]
// true
// [90, 100, 95, 120]
// false
// [400]
// true
// "60,75,50"
// Invalid



// Problem 17 — Elevator Weight Safety Checker
function isElevatorSafe(weights) {

    // check array value
    if (!Array.isArray(weights)) {
        return "Invalid";
    }

    let totalWeight = 0;

    for (let i = 0; i < weights.length; i++) {
        totalWeight += weights[i];
    }

    if (totalWeight <= 400) {
        return true;
    } else {
        return false;
    }
}


const inputValue = "60,75,50";

console.log(isElevatorSafe(inputValue))