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
				<div className={s.inner}>
					{this.props.list.map((e) => {
						return (
							<div key={'AsideSection_'+e.name} className={s.section}>
								{e.name  && <h3>{e.name}</h3>}
								<ul className={s.list}>
									{e.items.map((z) => {
										active = z === this.props.active ? s["item-active"] : null;
										return <li onClick={this.props.onItemClick}
												   key={'Aside_'+z}
												   className={[s.item, active].join(' ')}>{z}</li>
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