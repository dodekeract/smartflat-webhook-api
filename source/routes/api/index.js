// import external

import koaRouter from 'koa-router';

// routes

const router = koaRouter();

router.get('*', function * () {
	this.body = 'yay';
});

// export

export default router;
