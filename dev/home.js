import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header.js';

let headerLinks = [
	{
		name: 'Home',
		href: '/kit',
		download: false
	},
	{
		name: 'Modal',
		href: '/kit/modal',
		download: false
	}
];

class Home extends React.Component {

	render() {
		return (
			<div>
				<Header links={headerLinks}/>
			</div>

		)
	}
}


let output = document.body.children.output;
ReactDOM.render(<Home/>, output);