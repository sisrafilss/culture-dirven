export const config = {
  runtime: 'edge',
};

import worker from '../dist/server/index.js';

export default async function (request, context) {
  return await worker.fetch(request, process.env, context);
}
