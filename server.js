'use strict';

const config = require('config');
const Koa = require('koa');
const KoaRouter = require('koa-router');
const koaBody = require('koa-bodyparser');
const { graphqlKoa, graphiqlKoa } = require('apollo-server-koa');

const schema = require('./schema/executableSchema');

const app = new Koa();
const router = new KoaRouter({
    prefix: config.router.prefix
});

app.use(koaBody());

router.get('/graphiql', graphiqlKoa({
    endpointURL: `${config.router.prefix}/graphql`
}));

const graphqlHandler = graphqlKoa(request => ({
    schema: schema,
    context: request
}));


router.get('/graphql', graphqlHandler);
router.post('/graphql', graphqlHandler);

app.use(router.routes());
app.use(router.allowedMethods());

const PORT = config.port;
app.listen(PORT);
console.log(`Listening on port ${PORT}`);
