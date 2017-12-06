'use strict';

const _ = require('lodash');

const authors = [
    {
        id: 1,
        name: 'Uncle Mob'
    },
    {
        id: 2,
        name: 'John Bob'
    }
]

module.exports = {
    get(args) {
        return _.find(authors, {id: args.id});
    },
    getAll(args) {
        const { sort } = args;
        if (sort) {
            return _.orderBy(authors, ['name'], [sort.order.toLowerCase()]);
        }

        return authors;
    }
};
