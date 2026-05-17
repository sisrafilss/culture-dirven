export const config = {
  runtime: 'edge',
};

import server from '../dist/server/server.js';

export default async function (request, context) {
  return await server.fetch(request, process.env, context);
}
