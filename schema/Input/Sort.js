'use strict';

const Sort = `
    enum SortOrder {
        ASC
        DESC
    }
    input Sort {
        by: String!
        order: SortOrder!
    }
`;

module.exports = [Sort];
