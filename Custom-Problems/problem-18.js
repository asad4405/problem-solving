// Problem — AI Token Cost Calculator
//  Function Name Must be: calculateAiCost
// PromptPal, একটি AI writing assistant app, প্রতিদিন প্রতিটি ইউজারকে ৫০০ free token দেয়। এর বেশি ব্যবহার করলে অতিরিক্ত ব্যবহারের জন্য চার্জ করা হয় — এবং app টি চায় এমন একটি function যা স্বয়ংক্রিয়ভাবে বিল হিসাব করবে।

// Billing Rules
// প্রথম ৫০০ token ফ্রি। এরপর প্রতি অতিরিক্ত ১০০ token এর জন্য ৫ টাকা চার্জ হবে।

// Input
// একটি সংখ্যা, tokensUsed — সেদিন মোট কতগুলো token ব্যবহার হয়েছে।

// Output
// মোট খরচ, টাকায়, একটি সংখ্যা হিসেবে।

// Challenge
// tokensUsed সংখ্যা না হলে, অথবা negative হলে, "Invalid" রিটার্ন করবে।

// টিপস: প্রথমে ফ্রি ৫০০ token বাদ দাও, তারপর বাকি token কে ১০০ দিয়ে ভাগ করে Math.floor() দিয়ে পূর্ণ সংখ্যা বের করো, তারপর rate দিয়ে গুণ করো।

// Starter Code:
// function calculateAiCost(tokensUsed) {
//  // Write your code here.
// }


// Sample Test Cases
//  Input
//  Output
// 300
// 0
// 500
// 0
// 650
// 5
// 1000
// 25
// -10
// Invalid
// "500"
// Invalid




// Problem 18 — AI Token Cost Calculator
function calculateAiCost(tokensUsed) {
    // check number and positive number
    if (typeof tokensUsed !== 'number' || tokensUsed < 0) {
        return "Invalid";
    }

    // free limit 500
    if (tokensUsed <= 500) {
        return 0;
    }

    // free limit minus extra tokens and total calculate 
    let extraTokens = tokensUsed - 500;
    let totalCost = Math.floor(extraTokens / 100) * 5;

    return totalCost;
}

console.log(calculateAiCost(1000));
