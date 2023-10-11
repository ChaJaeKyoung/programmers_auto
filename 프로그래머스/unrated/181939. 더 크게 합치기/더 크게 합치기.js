function solution(a, b) {
    const aStr = a.toString()
    const bStr = b.toString()
    return aStr + bStr >= bStr + aStr ? Number(aStr + bStr) : Number(bStr + aStr)
}