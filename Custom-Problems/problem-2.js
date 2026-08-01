// Problem 2: Sum of a Range of Numbers (1 to N)

function sumOfRange(n){
    let sum = 0;

    for(let i=1; i <=n; i++){
        sum = sum + i;
    }
    return sum;
}

console.log(sumOfRange(5));
