// import external

import koaRouter from 'koa-router';

// import internal

import apiRouter from './api/v1.0/';

// routes

const router = koaRouter();

router.use('/api/v1.0/', apiRouter.routes(), apiRouter.allowedMethods());

// export

export default router;
