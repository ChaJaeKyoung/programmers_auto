function solution(a, b) {
    const calcPlus = ''+ a + b
    const calcMulti = 2 * a * b
    return +calcPlus >= calcMulti ? +calcPlus : calcMulti
}