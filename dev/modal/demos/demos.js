import React from 'react';
import ReactDOM from 'react-dom';
import config from '../section.config.js'
import Header from '../../components/Header.js';
import Heading from '../../components/Heading.js';
import Aside from '../../components/Aside.js';
import AsyncComponent from '../../components/AsyncComponent.js'
import s from '../../styles/docs.css'



let Basic = AsyncComponent(() =>  import('./items/basic.js'));

let items = {
	Basic: <Basic/>
};

let list = [
	{
		items: ['Basic','Pre-loader','Form', 'Insider','Auto-hide']

	}
];


class Docs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			output: <Basic/>,
			asideActive: 'Basic'
		}
	}

	handleClick = (e) => {
		let i = e.currentTarget.innerHTML;
		this.setState({
			output: items[i],
			asideActive: i
		});
	};

	render() {
		return (
			<div>
				<Header links={config.headerLinks} git={config.git}/>
				<Heading
					heading={'Demos'}
					version={config.version}/>
				<section className={s.docs}>
					<div className={s.wrapper}>
						<div className={s.docsContainer}>
							<div className={s.docsAside}>
								<Aside active={this.state.asideActive}
									   onItemClick={this.handleClick}
									   list={list}/>
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