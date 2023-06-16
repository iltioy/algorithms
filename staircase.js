const climbingStirecase = (n) => {
    const noOfWays = [1, 2];

    for (let i = 2; i <= n; i++) {
        noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
    }

    return noOfWays[n - 1];
};

console.log(climbingStirecase(1));
console.log(climbingStirecase(2));
console.log(climbingStirecase(3));
console.log(climbingStirecase(4));
console.log(climbingStirecase(5));
