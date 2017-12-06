'use strict';

const Book = require('./Book');

const Mutation = `
    type Mutation {
        createBook(name: String!, authorId: Int!): Book!
    }
`;

module.exports = [
    Mutation,

    ...Book
];
