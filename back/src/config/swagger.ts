import swaggerJsdoc from "swagger-jsdoc";

const OPTIONS: swaggerJsdoc.Options = {
    definition: {
        openapi: "3.1.0",
        info: {
            title: `API of ${process.env.VPS_SITE_DOMAIN ?? ''}`,
            version: "1.0.0",
            description: "Auto-generated Swagger documentation",
        },
    },
    apis: ["./src/routes/*.ts"], 
};

const SWAGGER_SPEC = swaggerJsdoc(OPTIONS);

export default SWAGGER_SPEC;
