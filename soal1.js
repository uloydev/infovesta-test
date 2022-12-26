let x = [1,2,3,4,5,6,7,8,9,10]
let y = [23.4, 26.9, 32.5, 34.9, 40.3, 39.9, 42.9, 47.0, 50.1, 53.2]
let xy = arrMultiply(x,y)
let n = x.length
let xPow = arrPow(x)


let meanX = mean(x)
let meanY = mean(y)

let b = (sum(xy) - (sum(x) * sum(y) / n)) / (sum(xPow) - (sum(xPow) / n))
let a = meanY + (b * meanX)

for (let i = 0; i < x.length; i++) {
    let yCalc = a + (b * x[i])
    console.log("x = "+ x[i])
    console.log("a = "+ a)
    console.log("b = "+ b)
    console.log("y defined = "+ y[i])
    console.log("y calculate = "+ yCalc)
    console.log("========================")
}

function arrPow(x, n=2) {
    let temp = []
    for (let i = 0; i < x.length; i++) {
        temp[i] = Math.pow(x[i], n)
    }
    return temp
}

function arrMultiply(x, y) {
    let temp = []
    for (let i = 0; i < x.length; i++) {
        temp[i] = x[i] * y[i]
    }
    return temp
}

function sum(arr) {
    let temp = 0
    arr.forEach(element => {
        temp += element
    });
    return temp
}

function mean(arr) {
    return sum(arr) / arr.length
}