import React from 'react';
import ReactDOM from 'react-dom';
import config from '../section.config.js'
import Header from '../../components/Header.js';
import Heading from '../../components/Heading.js';
import Footer from '../../components/Footer.js';
import Aside from '../../components/Aside.js';
import AsyncComponent from '../../components/AsyncComponent.js'
import s from '../../styles/common.css';
import b from '../../styles/bootstrap-grid.css';


let Basic = AsyncComponent(() =>  import('./items/Basic.js'));
let Loader = AsyncComponent(() =>  import('./items/Loader.js'));
let External = AsyncComponent(() =>  import('./items/External.js'));
let Form = AsyncComponent(() =>  import('./items/Form.js'));
let Insider = AsyncComponent(() =>  import('./items/Insider.js'));
let items = {};
items['Basic'] = <Basic bootstrap={b}/>;
items['Pre-Loader'] = <Loader bootstrap={b}/>;
items['External'] = <External bootstrap={b}/>;
items['Form'] = <Form bootstrap={b}/>;
items['Insider'] = <Insider bootstrap={b}/>;

let list = [
	{
		items: ['Basic','Pre-Loader','External','Form','Insider']

	}
];


class Docs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			output: items['Basic'],
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
				<section className={s["main-flow"]}>
					<div className={s.wrapper}>
						<div className={[b.row,b["no-gutters"]].join(' ')}>
							<div className={b["col-sm-4"]}>
								<Aside active={this.state.asideActive}
									   onItemClick={this.handleClick}
									   list={list}/>
							</div>
							<div className={b["col-sm-8"]}>
								{this.state.output}
							</div>
						</div>
					</div>
				</section>
				<Footer/>
			</div>

		)
	}
}

ReactDOM.render(<Docs/>, document.body.children.output);