const a = async v => {

    const s =  await new Promise((res, rej) => res(1))
    console.log(s)
    console.log(2)
    return 3
}

const p = () => {
    return a(1)
}

console.log("p: ", p().then(r => console.log(r)))

// console.log("a: ", a(1))