const Hapi = require('@hapi/hapi');
const routes = require('./routes');

async function init() {
  const server = Hapi.server({
    port: 9000,
    host: 'localhost',
  });

  await server.start();
  console.log(`Server sedang berjalan di ${server.info.uri}`);

  server.route(routes);
}
init();
