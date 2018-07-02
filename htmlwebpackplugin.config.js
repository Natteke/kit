

module.exports = (options) => {
	let output = options.mode === 'development' ? options.dist : options.production;
	let dev = options.dev;
	let	HtmlWebpackPlugin = require('html-webpack-plugin');

	let defaults = {
		category: 'category',
		keywords: 'keywords',
		description: 'description',
		author: 'author'
	};

	let pages = [
		{
			title: 'Home',
			filename: output + 'index.html',
			canonical: 'https://natteke.github.io/kit/',
			template: dev + 'templates/home.template.html',
			chunks: ['home']
		},
		{
			title: 'About | Modal',
			filename: output + 'modal/index.html',
			canonical: 'https://natteke.github.io/kit/modal/',
			template: dev + 'templates/about.template.html',
			chunks: ['modal/modal']
		},
		{
			title: 'Docs | Modal',
			filename: output + 'modal/docs/index.html',
			canonical: 'https://natteke.github.io/kit/modal/docs/',
			template: dev + 'templates/docs.template.html',
			chunks: ['modal/docs/docs']

		},
		{
			title: 'Demos | Modal',
			filename: output + 'modal/demos/index.html',
			canonical: 'https://natteke.github.io/kit/modal/demos/',
			template: dev + 'templates/demos.template.html',
			chunks: ['modal/demos/demos']

		},
	];

	return pages.map((e) => new HtmlWebpackPlugin(Object.assign(e,defaults)));

};