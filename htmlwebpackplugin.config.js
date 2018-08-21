

module.exports = (options) => {
	let output = options.mode === 'development' ? options.dist : options.production;
	let dev = options.dev;
	let	HtmlWebpackPlugin = require('html-webpack-plugin');

	let defaults = {
		category: 'Information/AboutUs',
		keywords: 'UI, select, modal, plugin, custom, web, site, solution, css, js, form, input, dropdown, list, own, create, options, callback, javascript, event',
		description: 'Custom vanilla javascript plugin which allows you to create your awesome interface with custom options input, callbacks, events and more',
		author: 'Andrey Ponomarenko'
	};

	let pages = [
		// {
		// 	title: 'Home',
		// 	filename: output + 'index.html',
		// 	canonical: 'https://natteke.github.io/kit/',
		// 	template: dev + 'templates/home.template.html',
		// 	chunks: ['home']
		// },
		// {
		// 	title: 'About | Modal',
		// 	filename: output + 'modal/index.html',
		// 	canonical: 'https://natteke.github.io/kit/modal/',
		// 	template: dev + 'templates/about.template.html',
		// 	chunks: ['modal/modal']
		// },
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
		{
			title: 'Docs | Locker',
			filename: output + 'locker/docs/index.html',
			canonical: 'https://natteke.github.io/kit/locker/docs/',
			template: dev + 'templates/docs.template.html',
			chunks: ['locker/docs/docs']

		},
		{
			title: 'Demos | Locker',
			filename: output + 'locker/demos/index.html',
			canonical: 'https://natteke.github.io/kit/locker/demos/',
			template: dev + 'templates/demos.template.html',
			chunks: ['locker/demos/demos']

		},
		{
			title: 'Docs | Lazy',
			filename: output + 'lazy/docs/index.html',
			canonical: 'https://natteke.github.io/kit/lazy/docs/',
			template: dev + 'templates/docs.template.html',
			chunks: ['lazy/docs/docs']

		},
		{
			title: 'Demos | Lazy',
			filename: output + 'lazy/demos/index.html',
			canonical: 'https://natteke.github.io/kit/lazy/demos/',
			template: dev + 'templates/demos.template.html',
			chunks: ['lazy/demos/demos']

		},
	];

	return pages.map((e) => new HtmlWebpackPlugin(Object.assign(e,defaults)));

};