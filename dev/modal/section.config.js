import '../../plugins/modal/kit.modal.zip';
let config = {
	// [2] true -> download (y/n)
	headerLinks: [
		{
			name: 'Home',
			href: '/kit',
			download: false
		},
		{
			name: 'About',
			href: '/kit/modal',
			download: false
		},
		{
			name: 'Demos',
			href: '/kit/modal/demos',
			download: false
		},
		{
			name: 'Docs',
			href: '/kit/modal/docs',
			download: false
		},
		{
			name: 'Download',
			href: '/kit/downloads/kit.modal.zip',
			download: true
		},
	],
	version : 'Kit Modal v1.1.0',
	git: 'https://github.com/Natteke'
};

export default config;