'use strict';

function log(name, resolver) {
    return (obj, args, context, info) => {
        return Promise.resolve().then(resolver.bind(this, obj, args, context, info)).then(result => {
            console.log(`✅  ${name} succeeded with args ${JSON.stringify(args)}`);
            return result;
        }).catch(error => {
            console.error(`❌  ${name} failed with args ${JSON.stringify(args)}`);
            throw error;
        });
    };
}

module.exports = log;
