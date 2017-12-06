'use strict';

const Book = require('./Book');

const Author = `
    type Author {
        id: ID!
        name: String!,
        books: [Book]
    }
`;

module.exports = [Author, ...Book];
