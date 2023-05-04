const Hapi = require("@hapi/hapi");
const routes = require("./routes");

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: "localhost",
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();

// how to start
// npm run start
// curl -X GET http://localhost:5000
// curl -X GET http://localhost:5000/about
// curl -X GET http://localhost:5000/any
// curl -X POST http://localhost:5000
