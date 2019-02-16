(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {
        firstName: 'Travis',
        lastName: 'Vela'
    };

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function() {
        return 'Hello from ' + person.firstName;
    };
    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    var discount;
    var reducedAmount;

    shoppers.forEach(function(shopper) {
        if (shopper.amount > 200) {
            discount = (shopper.amount * .12);
        } else {
            discount = 0;
        }
        reducedAmount = shopper.amount.toFixed(2) - discount;
        console.log('Customer: ' + shopper.name +  '\n'
            + 'Amount purchased: $' + shopper.amount.toFixed(2) + '\n'
            + 'Discount: $' + discount.toFixed(2) + '\n'
            + 'Final total: $' + reducedAmount.toFixed(2));
    });


    console.log('\n');
    console.log('=======');
    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    var books = [
        {title: 'Watership Down',
            author: {firstName: 'Richard', lastName: 'Adams'}
        },
        {title: 'Ishmael',
            author: {firstName: 'Daniel', lastName: 'Quinn'}
        },
        {title: 'Old Man and the Sea',
            author: {firstName: 'Ernest', lastName: 'Hemingway'}
        },
        {title: 'A Brave New World',
            author: {firstName: 'Aldous', lastName: 'Huxley'}
        },
        {title: 'HP and the Deathly Hallows',
            author: {firstName: 'J.K.', lastName: 'Rowling'}
        }
    ];
    console.log(books[0].author);
    console.log(books[1].title);
    console.log(books[0].author.lastName);


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    console.log('\n');
    console.log('=======');


    books.forEach(function (book, index) {
        console.log('Book # ' + (index + 1) + '\n'
            + 'Title: ' + book.title + '\n'
            + 'Author: ' + book.author.firstName + ' ' + book.author.lastName + '\n'
            + '---')

    });



    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.

     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    console.log('\n');
    console.log('bonus');
    console.log('=======');
    console.log('\n');

    var books = [];
    function createBook(title, authorFirstName, authorLastName) {
        return books.push({
            title: title,
            author: {
                firstName: authorFirstName,
                lastName: authorLastName
            }
        });
    }

    createBook('Watership Down', 'Richard', 'Adams');
    createBook('A Brave New World', 'Aldous', 'Huxley');
    createBook('Harry Potter and the Prisoner of Azkaban', 'J.K.', 'Rowling');
    createBook('A Brief History ofTime', 'Stephen', 'Hawking');
    createBook('The Old Man and the Sea', 'Ernest', 'Hemingway');
    createBook('Harry Potter and the Sorcerer\'s Stone', 'J.K.', 'Rowling');
    createBook('The Magic Strings of Frankie Presto', 'Mitch', 'Albom');
    createBook('Atlas Shrugged', 'Ayn', 'Rand');
    createBook('Stranger in a Strange Land', 'Robert', 'Heinlein');
    console.log(books);

    function showBookInfo(input) {
        for (var i = 0; i < books.length; i++) {
            if (input === books[i].title) {
                return 'Found a match!' + '\n'
                + '========' + '\n'
                + 'Book # ' + (books.indexOf(books[i]) + 1) + '\n'
                + 'Title: ' + books[i].title + '\n'
                + 'Author: ' + books[i].author.firstName + ' ' + books[i].author.lastName
                + '\n' + '\n';
            }
        }
    }

    console.log(showBookInfo('Watership Down'));
    console.log(showBookInfo('A Brave New World'));
    console.log(showBookInfo('Stranger in a Strange Land'));
})();

