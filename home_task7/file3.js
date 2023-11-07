class Book {
    constructor(title, author, year){
        this._title = title
        this._author = author
        this._year = year
    }
    get title() {
        return this._title
    }
    set title(title){
        if (title.length > 10){
            console.log("Title name is too long")
            return
        }
        this._title = title
    }
    get author(){
        return this._author = author
    }
    set author(author){
        if (author.length < 5){
            console.log("Author name is too short")
            return
        }
        this._author = author
    }
    get year(){
        return this._year = year
    }
    set year(year){
        if (year > 2023){
            console.log("You can not provide books from future")
            return
        }
        this._year = year
    }
    static findOldestBook(booksList){
        let oldestBook = booksList[0]
        for (const book of booksList) {
            if (book._year < oldestBook._year) {
                oldestBook = book
            }
        }
        return oldestBook
    }
}

const firstBook = new Book("Alice in Wonderland", "Luise Carroll", 1865)
const secondBook = new Book("The Red and the Black", "Stendhal", 1830)
const thirdBook = new Book("White Fang", "Jack London", 1906)

console.log(firstBook._title, firstBook._author, firstBook._year)
firstBook.title = "pupupupupupuuppupupupupuupupup"
console.log(firstBook._title, firstBook._author, firstBook._year)
console.log('-----')

console.log(secondBook._title, secondBook._author, secondBook._year)
secondBook.author = "Bob"
console.log(secondBook._title, secondBook._author, secondBook._year)
console.log('-----')

console.log(thirdBook._title, thirdBook._author, thirdBook._year)
thirdBook.year = 2030
console.log(thirdBook._title, thirdBook._author, thirdBook._year)
console.log('-----')

class EBook extends Book{
    constructor(title, author, year, format){
        super(title, author, year)
        this._format = format
    }
    get format(){
        return this._format = format
    }
    set format(format){
        if (format = "png"){
            console.log("It`s a picture format")
            return
        }
        this._format = format
    }
    static fromBook(book, fileFormat){
        return new EBook(book.title, book._author, book._year, fileFormat)
    }
}

const newBook = new EBook("Flowers for Algernon", "Daniel Keyes", 1966, "fb2")
console.log(newBook._title, newBook._author, newBook._year, newBook._format)
newBook.year = 3040
newBook.format = "png"
console.log(newBook._title, newBook._author, newBook._year, newBook._format)
console.log('----')

const oldestBook = Book.findOldestBook([firstBook, secondBook, thirdBook, newBook])
console.log("The oldest book is:", oldestBook)
console.log('----')

const ebook = EBook.fromBook(firstBook, "epub")
console.log(ebook)