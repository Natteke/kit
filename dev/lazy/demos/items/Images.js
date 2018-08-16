import React from 'react';
import '../../../../plugins/lazy/kit.lazy.js'
import s from '../../../styles/common.css';
import i from './images.css';
import Note from '../../../components/Note';

import mountains from "../../../images/lazy-demo/mountains.jpg";
import mountainsPlaceholder from "../../../images/lazy-demo/mountains-placeholder.jpg";
import highway from "../../../images/lazy-demo/highway.jpg";
import highwayPlaceholder from "../../../images/lazy-demo/highway-placeholder.jpg";

class Basic extends React.Component {
	constructor(props){
		super(props);
	}

	componentDidMount() {
		kit.createLazy({
			delay: 2000
		});
	}

	render() {
		let b = this.props.bootstrap;
		return(
			<div>
				<section className={s.commonSection}>
					<div className={b.row}>
						<div className={b.col}>
							<h1 className={s.h1}>Lazy Load</h1>
							<h2 className={s.h2}>Tag images</h2>
							<Note>
								In this demo-load was delayed for a 2 seconds so you can see the result, loader has no delay by default, but you can set it with options.
							</Note>
							<img className={[i.image, 'kit-lazy'].join(' ')} src={mountainsPlaceholder} data-src={mountains} alt=""/>
							<img className={[i.image, 'kit-lazy'].join(' ')} src={highwayPlaceholder} data-src={highway} alt=""/>
						</div>
					</div>
				</section>
			</div>
		)
	}
}

export default Basic;
