import React from 'react';
import ReactDOM from 'react-dom';
import config from '../section.config'
import Header from '../../components/Header.js';
import Heading from '../../components/Heading.js';
import Aside from '../../components/Aside.js';
import AsyncComponent from '../../components/AsyncComponent.js'
import s from '../../styles/docs.css'


const News = AsyncComponent(() =>  import('./items/News.js'));
const Installation = AsyncComponent(() =>  import('./items/Installation.js'));

let list = [
	{
		name: 'Getting Started',
		items: ['News','Installation']

	},
	{
		name: 'Getting Started',
		items: ['News','Installation']

	}
];


let asideLinks = [
	['News','news'],
	['Installation','installation']
];


class Docs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			output: <News/>
		}
	}

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
								<Aside list={list}/>
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