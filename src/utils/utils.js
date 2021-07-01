export function randomColor() {
    return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6)
}

/**/
export function randomAbc(length) {
    let randomAry = []
    for (let i = 65; i < 91; i++) {
        randomAry.push(String.fromCharCode(i))
    }
    return Array.from({length}, () => randomAry[Math.floor(Math.random() * (91 - 65))])
}

export function randomAry(ary = []) {
    ary.forEach((item, index) => {
        const randomIndex = Math.floor(Math.random() * ary.length);
        [ary[index], ary[randomIndex]] = [ary[randomIndex], ary[index]]
    })
    return ary
}
