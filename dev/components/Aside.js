import React from 'react';
import s from '../styles/componentStyles/aside.css';


class Aside extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			list: this.props.list.map((e) =>  this.generateSection(e))
		}
	}

	generateSection = (obj) => {
		return (
			<div key={'AsideSection_'+obj.name} className={s.asideSection}>
				<h3>{obj.name}</h3>
				<ul>
					{obj.items.map((e) => <li onClick={this.props.onItemClick} key={'Aside_'+e} className={s.asideListItem}>{e}</li>)}
				</ul>
			</div>
		)
	};

	render() {
		return(
			<aside className={s.aside}>
				<div className={s.asideInner}>
					{this.state.list}
				</div>
			</aside>
		)
	}
}

export default Aside;