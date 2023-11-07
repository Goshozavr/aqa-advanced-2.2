class Book {
    constructor(title, author, year){
        this._title = title
        this._author = author
        this._year = year
    }
    get title() {
        if(this._title !== 'number')
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
        if(this._author !== 'number')
        return this._author 
    }
    set author(author){
        if (author.length < 5){
            console.log("Author name is too short")
            return
        }
        this._author = author
    }
    get year(){
        if(this._year > 0)
        return this._year
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
    printInfo() {
        console.log(this._title, this._author, this._year)
    }
}


/*const firstBook = new Book("Alice in Wonderland", "Luise Carroll", 1865)
const secondBook = new Book("The Red and the Black", "Stendhal", 1830)
const thirdBook = new Book("White Fang", "Jack London", 1906)

firstBook.printInfo()
secondBook.printInfo()
thirdBook.printInfo()*/

export default Book