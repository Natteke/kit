import React from 'react';
import h from '../../styles/componentStyles/btn/Hamburger.css'

let Hamburger = (props) => {
	let active = props.active ?
		[props.active, h.hamburger].join(' ') : h.hamburger ;
	return (
		<div className={active}
			 onClick={props.onClick}
			 onBlur={props.onBlur}
			 onFocus={props.onFocus}
			 tabIndex={0}
		>

			<div className={h.hamburgerInner}>
				<div className={h.hamburgerLine}></div>
				<div className={h.hamburgerLine}></div>
				<div className={h.hamburgerLine}></div>
			</div>
		</div>
	)
};

export default Hamburger;