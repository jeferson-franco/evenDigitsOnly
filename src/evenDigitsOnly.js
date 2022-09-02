function solution(n) {
    return n
        .toString()
        .split('')
        .every((x) => x % 2 === 0);
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test evenDigitsOnly

// alternative solution
// function solution(n) {
//     return !(n + '').match(/[13579]/);
// }

// alternative solution
// function solution(n) {
//     return (n + '').split('').every((x) => x % 2 === 0);
// }

// alternative solution
// function solution(n) {
//     while (n > 0) {
//         if ((n % 10) % 2 == 1) {
//             return false;
//         }
//         n = Math.floor(n / 10);
//     }
//     return true;
// }
