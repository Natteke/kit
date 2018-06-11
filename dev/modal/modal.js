import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/Header.js';
import config from './section.config';

class Modal extends React.Component {


	render() {
		return (
			<div>
				<Header links={config.headerLinks}/>
				<p>About Modal</p>
			</div>

		)
	}
}


let output = document.body.children.output;
ReactDOM.render(<Modal/>, output);