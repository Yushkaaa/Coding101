const  bookData1 = {
    id = 1,
    title = "Война и мир",
    init () {}
}
const  bookData2 = {
    id = 2,
    title = "Триумфальная арка",
    init () {}
}

class Book {
    constructor({id,title}) {
        this.id = id;
        this.title = title;
    }
}

const book1 = new Book(bookData1.id,bookData1.title)
const book1 = new Book(bookData2.id,bookData2.title)

