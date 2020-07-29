// Soal No 1
console.log("Soal No 1")

const circle = (radius) => {
    let luas = 3.14 * radius * radius
    let keliling = 2 * 3.14 * radius
    return console.log(`Hasil Luas = ${luas} \nHasil Keliling = ${keliling}`)
}
circle(12)

console.log("\n")

// Soal No 2
console.log("Soal No 2")

let kalimat1 = "Saya"
let kalimat2 = "Adalah"
let kalimat3 = "Seorang"
let kalimat4 = "Front End"
let kalimat5 = "Developer"
const kalimat = (parameter1, parameter2, parameter3, parameter4, parameter5) => {
    return console.log(`${parameter1} ${parameter2} ${parameter3} ${parameter4} ${parameter5}`)
}
kalimat(kalimat1, kalimat2, kalimat3, kalimat4, kalimat5)


// Soal No 3
console.log("\n")
console.log("Soal No 3")

class Book {
    constructor(name, totalPage, price) {
        this.name = name
        this.totalPage = totalPage
        this.price = price
    }
}
class Komik extends Book {
    constructor(name, totalPage, price, isColorful) {
        super(name, totalPage, price)
        this.isColorful = isColorful
    }
}
bukuSatu = new Book("I Want To Eat Your Pancreas", 200, 88000)
komikSatu = new Komik("Another", 150, 98000, false)
console.log(bukuSatu)
console.log(komikSatu)