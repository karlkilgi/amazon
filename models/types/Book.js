'use strict';

const _ = require('lodash');

const books = [
    {
        id: 1,
        name: 'How to internet',
        author_id: 1
    },
    {
        id: 2,
        name: 'How to computer',
        author_id: 1
    },
    {
        id: 3,
        name: 'Head first into GraphQL',
        author_id: 2
    }
]

module.exports = {
    getBooksByAuthor(author) {
        return _.filter(books, {author_id: author.id});
    },
    createBook(args) {
        const { name } = args;
        return {
            id: 1,
            name: name
        };
    },
    getAll() {
        return books;
    }
};
