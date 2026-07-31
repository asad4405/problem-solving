// Problem — Match Winner

// Function Name Must be: matchWinner  
// ২০২৬ FIFA World Cup-এর Group Stage চলছে। প্রতিটি ম্যাচ শেষে FIFA-এর Automated Result System দুই দলের গোল সংখ্যা গ্রহণ করে এবং ম্যাচের ফলাফল প্রকাশ করে।
// তোমার কাজ হলো এমন একটি Function তৈরি করা যা Team A এবং Team B-এর গোল সংখ্যা দেখে ম্যাচের ফলাফল নির্ধারণ করবে।

// Input
// Function দুটি Parameter গ্রহণ করবে—
// teamAGoals → Team A-এর Goal সংখ্যা
// teamBGoals → Team B-এর Goal সংখ্যা

// Rules
// Team A বেশি Goal করলে "Team A Won" Return করতে হবে।
// Team B বেশি Goal করলে "Team B Won" Return করতে হবে।
// Goal সমান হলে "Draw" Return করতে হবে।

// Challenge
// Return "Invalid" যদি কোনো Input Number না হয়।

// Starter Code:
// function matchWinner(teamAGoals, teamBGoals) {
//   // Write your code here…
// }


// Sample Test Cases
// Input
// Output
// 2, 1
// Team A Won
// 1, 3
// Team B Won
// 2, 2
// Draw
// "3", 2
// Invalid


// Problem 16 — Match Winner
function matchWinner(teamAGoals, teamBGoals) {

    // check numbers
    if(typeof teamAGoals !== 'number' || typeof teamBGoals !== 'number'){
        return "Invalid";
    }

    // winner condition
    if(teamAGoals > teamBGoals){
        return "Team A Won";
    }else if(teamBGoals > teamAGoals){
        return "Team B Won";
    }else{
        return "Draw";
    }
}

console.log(matchWinner(2,"3"))