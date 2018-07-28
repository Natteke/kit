import React from 'react';


import StarButton from '../../../components/btn/StarButton.js'
import HoverContainer from '../../../components/HoverContainer'
import s from '../../../styles/common.css';
import CodeHighlight from 'code-highlight';
import "highlight.js/styles/arduino-ligh-custom.css";

class Basic extends React.Component {
	render() {
		let b = this.props.bootstrap;
		return(
			<div>
				<section className={s.commonSection}>
					<div className={b.row}>
						<div className={b.col}>
							<h1 className={s.h1}>Locker Basic</h1>
							<p>Let's say you want to </p>
							<p>

							</p>
						</div>
					</div>
				</section>
				<HoverContainer>
					<StarButton>Lock Scroll</StarButton>
					<p>This is Kit Modal actually</p>
				</HoverContainer>
			</div>
		)
	}
}

export default Basic;
