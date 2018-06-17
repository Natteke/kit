import React from 'react';
import s from '../styles/componentStyles/aside.css';


class Aside extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	render() {
		let active;
		return(
			<aside className={s.aside}>
				<div className={s.asideInner}>
					{this.props.list.map((e) => {
						return (
							<div key={'AsideSection_'+e.name} className={s.asideSection}>
								{e.name  && <h3>{e.name}</h3>}
								<ul className={s.asideList}>
									{e.items.map((z) => {
										active = z === this.props.active ? s.asideListItemActive : null;
										return <li onClick={this.props.onItemClick}
												   key={'Aside_'+z}
												   className={[s.asideListItem, active].join(' ')}>{z}</li>
									})}
								</ul>
							</div>
						)
					})}
				</div>
			</aside>
		)
	}
}

export default Aside;