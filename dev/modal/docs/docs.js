import React from 'react';
import ReactDOM from 'react-dom';
import config from '../section.config.js'
import Header from '../../components/Header.js';
import Heading from '../../components/Heading.js';
import Aside from '../../components/Aside.js';
import AsyncComponent from '../../components/AsyncComponent.js'
import s from '../../styles/common.css';
import b from '../../styles/bootstrap-grid.css';

let Welcome = AsyncComponent(() =>  import('./items/Welcome.js'));
let Installation = AsyncComponent(() =>  import('./items/Installation.js'));
let Activation = AsyncComponent(() =>  import('./items/Activation.js'));
let Options = AsyncComponent(() =>  import('./items/Options.js'));
let Methods = AsyncComponent(() =>  import('./items/Methods.js'));
let Templates = AsyncComponent(() =>  import('./items/Templates.js'));

let items = {};
items['Welcome'] = <Welcome bootstrap={b}/>;
items['Installation'] = <Installation bootstrap={b}/>;
items['Activation'] = <Activation bootstrap={b}/>;
items['Options'] = <Options bootstrap={b}/>;
items['Functions'] = <Methods bootstrap={b}/>;
items['Templates'] = <Templates bootstrap={b}/>;

let list = [
	{
		items: ['Welcome','Installation','Activation','Options','Functions','Templates']

	}
];


class Docs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			output: items['Welcome'],
			asideActive: 'Welcome'
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
					heading={'Docs'}
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
			</div>

		)
	}
}


let output = document.body.children.output;
ReactDOM.render(<Docs/>, output);