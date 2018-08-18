import React from 'react';
import s from '../styles/componentStyles/aside.css';


const Aside = (props) => {
	let l = props.list;
		return(
			<aside className={s.aside}>
				<div className={s.inner}>
					<div className={s.section}>
						<ul className={s.list}>
							{
								Object.keys(l).map((e) => {
									let className = props.active === l[e] ? [s.item, s["item-active"]].join(' ') : s.item;

									return <li
										key={l[e].name}
										className={className}
										onClick={() => props.onClick(l[e])}
									>{l[e].name}</li>
								})
							}
						</ul>
					</div>
				</div>
			</aside>
		)
};

export default Aside;


{/*<div key={'AsideSection_'+e.name} className={s.section}>*/}
	{/*{e.name  && <h3>{e.name}</h3>}*/}
	{/*<ul className={s.list}>*/}
		{/*{e.items.map((z) => {*/}
			{/*active = z === this.props.active ? s["item-active"] : null;*/}
			{/*return <li onClick={this.props.onItemClick}*/}
					   {/*key={'Aside_'+z}*/}
					   {/*className={[s.item, active].join(' ')}>{z}</li>*/}
		{/*})}*/}
	{/*</ul>*/}
{/*</div>*/}