import React from 'react';
import s from '../../styles/componentStyles/btn/Button.css';

let Button = (props) => {
	return (
		<button
			data-trigger={props['data-trigger']}
			className={s.button}
			onClick={props.onClick}
			onKeyDown={props.onKeyDown}
			onBlur={props.onBlur}
			onFocus={props.onFocus}>
			{props.children}
		</button>
	)
};

export default Button;