class LibraryCollection{
    constructor(capacity){
        this.capacity = capacity;
        this.books = [];
        this.addedBooks = 0;
    }

    addBook(bookName, bookAuthor){
        if(this.capacity === this.books.length){
            throw new Error('Not enough space in the collection.');

        }
        else{
            this.books.push({bookName, bookAuthor, payed: false});
           
            this.addedBooks++;
            return `The ${bookName}, with an author ${bookAuthor}, collect.`;
        }


    }
    payBook(bookName){
        let currBook = this.books.find(b => b.bookName === bookName);

        if(!currBook){
            throw new Error(`${bookName} is not in the collection.`);

        }
        else if(currBook.payed){
            throw new Error(`${bookName} has already bee paid.`);
        }
        currBook.payed = true;
        return `${bookName} has been successfully paid.`;
    }
    removeBook(bookName){
        let currBook = this.books.find(b => b.bookName == bookName);

        
        if(!currBook){
            throw new Error("The book, you're looking for, is not found.");
        }
        else if(!currBook.payed){
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }
        this.books.filter(b => b.bookName !== bookName);
        
        return `${bookName} remove from the collection.`;

    }
    getStatistics(bookAuthor){
        let buff = '';
        if(!bookAuthor){
            buff += `The book collection has ${this.capacity - this.addedBooks} empty spots left.\n`;
            this.books.sort((a,b) => a.bookName.localeCompare(b.bookName));
            for (const book of this.books) {
                buff += `${book.bookName} == ${book.bookAuthor} - ${book.payed ? 'Has Paid' : 'Not Paid'}.\n`;
                
            }

        }else{
            let count = 0;
            for(const book of this.books){
                if(book.bookAuthor == bookAuthor){
                    count++;
                    buff += `${book.bookName} == ${book.bookAuthor} - ${book.payed ? 'Has Paid' : 'Not Paid'}.\n`

                }
            }
            if(count === 0){
                throw new Error(`${bookAuthor} is not in the collection.`)
            }

            
        }
        return buff.trimEnd();
    }




}

try{
    const library = new LibraryCollection(2)
    console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
    console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
    console.log(library.addBook('Ulysses', 'James Joyce'));
    




}catch(ex){
    console.log(ex.message)
}