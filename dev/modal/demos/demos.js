import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../components/Header.js';

class Demos extends React.Component {

	render() {
		return (
			<div>
				<Header/>
				<p>Demos</p>
			</div>

		)
	}
}


let output = document.body.children.output;
ReactDOM.render(<Demos/>, output);