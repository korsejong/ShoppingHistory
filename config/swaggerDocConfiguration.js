const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const options = {
    swaggerDefinition: {
        info: {
            title: 'API Docs',
            version: '1.0.0',
            description: 'ShoppingHistory api docs'
        },
    },
    apis: ['controllers/*.js']
};
const specs = swaggerJsdoc(options);
module.exports = app => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};