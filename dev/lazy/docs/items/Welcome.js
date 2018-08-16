import React from 'react';
import s from '../../../styles/common.css';



class Welcome extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let b = this.props.bootstrap;
		return (
			<section className={s.commonSection}>
				<div className={b.row}>
					<div className={b.col}>
						<h1 className={s.h1}>Welcome</h1>
						<p>Under construction</p>
					</div>
				</div>
			</section>
		)
	}
}
export default Welcome;
