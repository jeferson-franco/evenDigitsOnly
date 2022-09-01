function solution(n) {
    return n.toString().split('').every((x) => x % 2 === 0);
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test evenDigitsOnly
