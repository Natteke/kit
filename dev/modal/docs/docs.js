import React from 'react';
import ReactDOM from 'react-dom';
import config from '../section.config.js'
import Header from '../../components/Header.js';
import setHash from '../../components/setHash.js';
import Heading from '../../components/Heading.js';
import Aside from '../../components/Aside.js';
import AsyncComponent from '../../components/AsyncComponent.js'
import s from '../../styles/common.css';
import b from '../../styles/bootstrap-grid.css';

let items = {
	Welcome: {
		name: 'Welcome',
		path: './items/Welcome.js',
	},
	Installation: {
		name: 'Installation',
		path: './items/Installation.js',
	},
	Activation: {
		name: 'Activation',
		path: './items/Activation.js',
	},
	Options: {
		name: 'Options',
		path: './items/Options.js',
	},

	Functions: {
		name: 'Functions',
		path: './items/Functions.js',
	}
};

Object.keys(items).forEach((e) => {
	items[e].component = React.createElement(AsyncComponent(() =>  import(''+items[e].path)),{bootstrap: b},null);
});

class Docs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			output: items.Welcome.component,
			asideActive: items.Welcome
		}
	}

	componentWillMount() {
		if(location.hash && items[location.hash.substr(1)]) {
			let hashComponentName = items[location.hash.substr(1)];
			this.setState({
				output: hashComponentName.component,
				asideActive: hashComponentName
			})
		} else if(localStorage && localStorage.getItem(location.pathname)) {
			let lastComponentName = localStorage.getItem(location.pathname);
			this.setState({
				output: items[lastComponentName].component,
				asideActive: items[lastComponentName]
			});
			setHash(lastComponentName);
		}
	}

	componentDidUpdate() {
		let activeName = this.state.asideActive.name;
		setHash(activeName);
		localStorage.setItem(location.pathname,activeName);
	}

	asideClick = (element) => {
		this.setState({
			output: element.component,
			asideActive: element
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
							<div className={[b["col-sm-4"],b["col-gutters"]].join(' ')}>
								<Aside
									onClick={this.asideClick}
									active={this.state.asideActive}
									list={items}
								/>
							</div>
							<div className={[b["col-sm-8"],b["col-gutters"]].join(' ')}>
								{this.state.output}
							</div>
						</div>
					</div>
				</section>
				{/*<Footer/>*/}
			</div>

		)
	}
}


ReactDOM.render(<Docs/>, document.body.children.output);