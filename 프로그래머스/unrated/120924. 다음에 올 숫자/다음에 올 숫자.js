function solution(common) {
    return common[1] - common[0] === common[2] - common[1] ?
    common[0] + (common[1] - common[0]) * common.length :
    common[0] * (common[1] / common[0]) ** common.length
}