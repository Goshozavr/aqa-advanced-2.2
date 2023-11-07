import Book from "./Book.js"

class EBook extends Book{
    constructor(title, author, year, format){
        super(title, author, year)
        this._format = format
    }
    get format(){
        if(this._format !== 'number')
        return this._format
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
    printInfo() {
        console.log(this._title, this._author, this._year, this._format)
    }
}

/*const newBook = new EBook("Flowers for Algernon", "Daniel Keyes", 1966, "fb2")
newBook.printInfo()*/

export default EBook