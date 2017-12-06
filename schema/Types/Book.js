'use strict';

const Review = require('./Review');

const Book = `
    type Book {
        id: ID!
        name: String!
        reviews: [Review]
    }
`;

module.exports = [Book, ...Review];
