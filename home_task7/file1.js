class Book {
    constructor(title, author, year){
        this._title = title
        this._author = author
        this._year = year
    }
    printInfo() {
        console.log(this._title, this._author, this._year)
    }
}

const firstBook = new Book("Alice in Wonderland", "Luise Carroll", 1865)
const secondBook = new Book("The Red and the Black", "Stendhal", 1830)
const thirdBook = new Book("White Fang", "Jack London", 1906)

firstBook.printInfo()
secondBook.printInfo()
thirdBook.printInfo()
