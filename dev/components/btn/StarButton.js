import React from 'react';
import s from '../../styles/componentStyles/btn/StarButton.css';

let StarButton = (props) => {
	return (
		<div className={s["starBtn-container"]}>
			<button
				data-trigger={props['data-trigger']}
				className={s.starBtn}
				onClick={props.onClick}
				onKeyDown={props.onKeyDown}
				onBlur={props.onBlur}
				onFocus={props.onFocus}>
				{props.children}
			</button>
		</div>
	)
};

export default StarButton;