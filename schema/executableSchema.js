'use strict';

const { makeExecutableSchema } = require('graphql-tools');

const resolvers = require('../resolvers');

const Query = require('./Types/Query');
const Mutation = require('./Types/Mutation');

const schema = makeExecutableSchema({
    typeDefs: [
        ...Query,
        ...Mutation
    ],
    resolvers,
});

module.exports = schema;
