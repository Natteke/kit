let config = {
	// [2] true -> download (y/n)
	headerLinks: [
		{
			name: 'Home',
			href: '/',
			download: false
		},
		{
			name: 'About',
			href: '/modal',
			download: false
		},
		{
			name: 'Demos',
			href: '/modal/demos',
			download: false
		},
		{
			name: 'Docs',
			href: '/modal/docs',
			download: false
		},
		{
			name: 'Download',
			href: '/modal/download',
			download: true
		},
	],
	section: {
		about: {
			heading: 'About',
		},
		demos: {
			heading: 'Demos',
		},
		docs: {
			heading: 'Docs',
		},
	},
	version : 'Kit Modal v1.1.0'
};

export default config;