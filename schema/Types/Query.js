'use strict';

const Author = require('./Author');
const Book = require('./Book');
const Sort = require('../Input/Sort');

const Query = `
    type Query {
        author(id: Int!): Author
        authors(sort: Sort): [Author]
        books: [Book]
    }
`;

module.exports = [Query, ...Author, ...Sort, ...Book];
