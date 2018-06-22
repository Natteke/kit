import React from 'react';

let Hamburger = (props) => {
	let s = props.styles,
		active = props.active ?
		[props.active, s.hamburger].join(' ') : s.hamburger;
	return (
		<div className={active}
			 onClick={props.onClick}
			 onBlur={props.onBlur}
			 onFocus={props.onFocus}
			 tabIndex={0}
		>
			<div className={s.hamburgerInner}>
				<div className={s.hamburgerLine}/>
				<div className={s.hamburgerLine}/>
				<div className={s.hamburgerLine}/>
			</div>
		</div>
	)
};

export default Hamburger;