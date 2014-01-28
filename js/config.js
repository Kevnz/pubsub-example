requirejs.config( {
	shim: {
		pubsub: {
			deps: ['jquery'],
			exports: 'jQuery'
		}
	},
	baseUrl: 'js/',
	waitSeconds: 30,
	paths: {
		jquery: 'lib/jquery',
		pubsub: 'lib/jquery.ba-tinypubsub',
	}
});
