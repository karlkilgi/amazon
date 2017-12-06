'use strict';

const log = require('./lib/log');

const Author = require('./models/types/Author');
const Book = require('./models/types/Book');
const Review = require('./models/types/Review');

const resolvers = {
    Query: {
        author: log('author', (_, args) => {
            return Author.get(args);
        }),
        authors: log('authors', (_, args) => {
            return Author.getAll(args);
        }),
        books: log('books', (_, args) => {
            return Book.getAll();
        })
    },
    Author: {
        books: log('author books', (author) => {
            return Book.getBooksByAuthor(author);
        })
    },
    Book: {
        reviews: log('book reviews', (book) => {
            return Review.getReviewsByBook(book);
        })
    },
    Mutation: {
        createBook: log('create book', (_, args) => {
            return Book.createBook(args);
        })
    }
};

module.exports = resolvers;
