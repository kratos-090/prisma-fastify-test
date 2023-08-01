const fastify = require("fastify")({
    logger: {
      transport: {
        target: "pino-pretty",
        options: {
          translateTime: "HH:MM:ss Z",
          ignore: "pid,hostname",
        },
      },
    },
});

const port = process.env.PORT || 3000;

require('dotenv').config()

const routes = require('./routes/route');
require('./middleware/prismaMiddelware');


routes.forEach((route, index) => {
    fastify.route(route);
}
);



const app = async () => {

    try {
         fastify.listen({
          port: port,
        });
        fastify.log.info(`server is listening on ${port}`);
      } catch (error) {
        console.log(error);
        fastify.log.error(`Error running fastify ${port}`);
      }
}



module.exports = app;