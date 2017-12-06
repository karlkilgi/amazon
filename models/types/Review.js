'use strict';

const _ = require('lodash');

const reviews = [
    {
        id: 1,
        review: 'Was good',
        book_id: 1,
        rating: 4
    },
    {
        id: 2,
        review: 'Best i have ever read',
        book_id: 1,
        rating: 4
    },
    {
        id: 3,
        review: 'Head first into success!!',
        book_id: 3,
        rating: 5
    }
]

module.exports = {
    getReviewsByBook(book) {
        return _.filter(reviews, {book_id: book.id});
    }
};
