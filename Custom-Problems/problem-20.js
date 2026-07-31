// Problem —Debugging Challenge: API Response Time Monitor
//  Function Name Must be: averageResponseTime
// DevWatch একটি backend monitoring dashboard, যা একটি service-এর সাম্প্রতিক কয়েকটি API request-এর response time (মিলিসেকেন্ডে) একটি array-তে লগ করে। একজন Junior Developer average response time বের করার জন্য একটি function লিখেছে, যাতে টিম বুঝতে পারে API ধীর হয়ে যাচ্ছে কিনা — কিন্তু function-এ একাধিক bug আছে, তাই এটা ভুল ফলাফল দিচ্ছে।
// তোমার কাজ হলো সব bug খুঁজে বের করে ঠিক করা, যাতে সব sample test case এ সঠিক Output আসে। ফাংশনের নাম পরিবর্তন করা যাবে না।

// Input
// একটি Number array, যেখানে প্রতিটি সংখ্যা একটি request-এর response time (ms), 
// যেমনঃ [120, 200, 150, 130]

// Output
// একটি সংখ্যা — সব logged request-এর গড় (average) response time

// Challenge
// Bug ঠিক করার পরে function এটাও handle করবে —
// Input Array না হলে "Invalid" রিটার্ন করবে
// Array Empty হলে "Invalid" রিটার্ন করবে
// Array-এর মধ্যে Number ছাড়া অন্য কিছু থাকলে "Invalid" রিটার্ন করবে

// Buggy Code:
// /* এই ফাংশনের সব বাগ খুঁজে ঠিক করো — নাম পরিবর্তন করবে না */
// function averageResponseTime(times) {
//   if (Array.isArray(times) = false) {
//         return "Invalid";
//    }
   
//    if (times.length = 0) {
//         return "Invalid";
//     }
   
//  let total = 0;
//     for (let i = 1; i <= times.length; i++) {
//         total = total + time[i];
//     }
   
//   return total / times;
// }



// টিপস: এখানে ৬টি আলাদা bug আছে — খেয়াল করে দেখো: array চেক কীভাবে লেখা হয়েছে, empty-array চেক কীভাবে লেখা হয়েছে, loop কোথা থেকে শুরু হচ্ছে, loop কোথায় শেষ হচ্ছে, loop-এর ভেতরে ব্যবহৃত variable-এর নাম, এবং শেষে কী দিয়ে ভাগ করা হচ্ছে।

// Sample Test Cases
//  Input
//  Output
// [120, 200, 150, 130]
// 150
// [100, 100]
// 100
// []
// Invalid
// "logs"
// Invalid
// [120, "200", 150]
// Invalid




// Problem 20 —Debugging Challenge: API Response Time Monitor
function averageResponseTime(times) {
    if (!Array.isArray(times) || times.length === 0) {
        return "Invalid";
    }

    let total = 0;

    for (let i = 0; i < times.length; i++) {
        if (typeof times[i] !== 'number') {
        return "Invalid";
        }
        total = total + times[i];
    }

    return total / times.length;
}



