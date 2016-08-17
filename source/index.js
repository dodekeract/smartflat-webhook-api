// import external

import koaRouter from 'koa-router';

// import internal

import routes from './routes';

// functions

export function info () {
	return {
		dependencies: ['http']
	};
}

export function initialize (options) {
	return new Promise((resolve, reject) => {
		resolve({
			dependencies: {
				http: routes
			}
		});
	});
}

// export

export default {
	info,
	initialize
};
