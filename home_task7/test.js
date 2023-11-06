class Book {
    constructor(title) {
        this.title = title
    }
}

class EBooc extends Book {
    constructor(title, fileFormat) {
        super(title)
        this._fileFormat = fileFormat
    }
}

/*
4.
class Book {
    constructor(title) {
        this.title = title
    }
}

class EBooc extends Book {
    constructor(title, fileFormat) {
        super(title)
        this._fileFormat = fileFormat
    }
}
*/