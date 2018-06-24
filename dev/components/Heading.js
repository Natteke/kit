import React from 'react';
import s from '../styles/componentStyles/heading.css'

let Heading = (props) => {
	return (
		<div className={s.headingOuter}>
			<div className={s.wrapper}>
				<div className={s.headingContainer}>
					<h3 className={s.heading}>{props.heading}</h3>
					<p className={s.headingVersion}>{props.version}</p>
				</div>
			</div>
		</div>
	)
};

export default Heading;