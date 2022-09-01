const solution = require('./evenDigitsOnly.js');

test('test 1', () => {
    expect(solution(248622)).toBe(true);
});

test('test 2', () => {
    expect(solution(642386)).toBe(false);
});

test('test 3', () => {
    expect(solution(248842)).toBe(true);
});

test('test 4', () => {
    expect(solution(1)).toBe(false);
});

test('test 5', () => {
    expect(solution(8)).toBe(true);
});

test('test 6', () => {
    expect(solution(2462487)).toBe(false);
});

test('test 7', () => {
    expect(solution(468402800)).toBe(true);
});

test('test 8', () => {
    expect(solution(2468428)).toBe(true);
});

test('test 9', () => {
    expect(solution(5468428)).toBe(false);
});

test('test 10', () => {
    expect(solution(7468428)).toBe(false);
});
