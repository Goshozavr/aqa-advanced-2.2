import Book from "./Book.js"
import EBook from "./EBook.js"

console.log("Task 1")
const firstBook = new Book("Alice in Wonderland", "Luise Carroll", 1865)
const secondBook = new Book("The Red and the Black", "Stendhal", 1830)
const thirdBook = new Book("White Fang", "Jack London", 1906)

firstBook.printInfo()
secondBook.printInfo()
thirdBook.printInfo()

console.log('----')

console.log("Task 2")
const newBook = new EBook("Flowers for Algernon", "Daniel Keyes", 1966, "fb2")
newBook.printInfo()
console.log('----')

console.log("Task 3")
console.log(firstBook.title, firstBook.author, firstBook.year)
firstBook.title = "pupupupupupuuppupupupupuupupup"
console.log(firstBook.title, firstBook.author, firstBook.year)
console.log('-----')

console.log(secondBook.title, secondBook.author, secondBook.year)
secondBook.author = "Bob"
console.log(secondBook.title, secondBook.author, secondBook.year)
console.log('-----')

console.log(thirdBook.title, thirdBook.author, thirdBook.year)
thirdBook.year = 2030
console.log(thirdBook.title, thirdBook.author, thirdBook.year)
console.log('-----')

console.log(newBook.title, newBook.author, newBook.year, newBook.format)
newBook.year = 3040
newBook.format = "png"
console.log(newBook.title, newBook.author, newBook.year, newBook.format)
console.log('----')

console.log("Task 4")
const oldestBook = Book.findOldestBook([firstBook, secondBook, thirdBook, newBook])
console.log("The oldest book is:", oldestBook)
console.log('----')

console.log("Task 5")
const ebook = EBook.fromBook(firstBook, "epub")
console.log(ebook)
