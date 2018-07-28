import React from 'react';
import ReactDOM from 'react-dom';
import config from '../section.config.js'
import Header from '../../components/Header.js';
import Heading from '../../components/Heading.js';
// import Footer from '../../components/Footer.js';
import Aside from '../../components/Aside.js';
import AsyncComponent from '../../components/AsyncComponent.js'
import s from '../../styles/common.css';
import b from '../../styles/bootstrap-grid.css';


let Basic = AsyncComponent(() =>  import('./items/Basic.js'));

let items = {};
items['Basic'] = <Basic bootstrap={b}/>;

let list = [
	{
		items: ['Basic']

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
							<div className={[b["col-sm-4"],b["col-gutters"]].join(' ')}>
								<Aside active={this.state.asideActive}
									   onItemClick={this.handleClick}
									   list={list}/>
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