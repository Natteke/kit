import React from 'react';
import ReactDOM from 'react-dom';
import config from '../section.config'
import Header from '../../components/Header.js';
import Heading from '../../components/Heading.js';
import Aside from '../../components/Aside.js';
import AsyncComponent from '../../components/AsyncComponent.js'
import s from '../../styles/docs.css'


let News = AsyncComponent(() =>  import('./items/News.js'));
let Installation = AsyncComponent(() =>  import('./items/Installation.js'));

let items = {
	News: <News/>,
	Installation: <Installation/>
};

let list = [
	{
		name: 'Getting Started',
		items: ['News','Installation']

	},
	{
		name: 'Backing Backed',
		items: ['News','Installation']

	}
];


class Docs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			output: <News/>
		}
	}

	handleClick = (e) => {
		this.setState({
			output: items[e.currentTarget.innerHTML]
		})
	};

	render() {
		return (
			<div>
				<Header links={config.headerLinks}/>
				<Heading
					heading={config.section.docs.heading}
					version={config.version}/>
				<section className={s.docs}>
					<div className={s.wrapper}>
						<div className={s.docsContainer}>
							<div className={s.docsAside}>
								<Aside onItemClick={this.handleClick} list={list}/>
							</div>
							<div className={s.docsOutput}>
								{this.state.output}
							</div>
						</div>
					</div>
				</section>
			</div>

		)
	}
}


let output = document.body.children.output;
ReactDOM.render(<Docs/>, output);