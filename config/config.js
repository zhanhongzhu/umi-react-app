export default {
	singular: true,
	plugins: [
		['umi-plugin-react', {

		}],
	],
	routes: [{
			path: '/',
			component: '../layouts/index.js',
			routes: [{
					path: '/index',
					component: '../page/index.js',
				},
				{
					path: '/UI',
					component: '../page/UI.js',
				},
				{
					path: '/WorkPlace',
					component: '../page/WorkPlace.js',
				},
				{
					path: '/Table',
					component: '../page/Table.js',
				},
			],
		},
	],
};
