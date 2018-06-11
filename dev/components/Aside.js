import React from 'react';
import s from '../styles/componentStyles/aside.css';


class Aside extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	generateList = (obj) => {
		return (
			<div className={s.asideSection}>
				<h3>{obj}</h3>
			</div>
		)
	};



	render() {
		return(
			<aside className={s.aside}>
				<div className={s.asideInner}>
					<div className={s.asideSection}>
						<h3>Getting Started</h3>
						<ul className={s.asideList}>
							<li className={s.asideListItem}><a>News</a></li>
							<li className={s.asideListItem}><a>Installation</a></li>
						</ul>
					</div>
				</div>
			</aside>
		)
	}
}

export default Aside;