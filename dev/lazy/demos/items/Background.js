import React from 'react';
import '../../../../plugins/lazy/kit.lazy.js'
import s from '../../../styles/common.css';
import i from './images.css';
import Note from '../../../components/Note';

import "../../../images/lazy-demo/mountains.jpg";
import "../../../images/lazy-demo/mountains-placeholder.jpg";
import "../../../images/lazy-demo/highway.jpg";
import "../../../images/lazy-demo/highway-placeholder.jpg";

class Background extends React.Component {
	constructor(props){
		super(props);
	}

	componentDidMount() {
		kit.createLazy({
			delay: 2000,
			success: i.loaded,
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
							<h2 className={s.h2}>Background images</h2>
							<Note>
								In this demo-load was delayed for a 2 seconds so you can see the result, loader has no delay by default, but you can set it with options.
							</Note>
							<Note>
								You can add transition css property, to make image replace looks more smoothly.
							</Note>
							<div className={[i.image, 'kit-lazy', i.image_mountains].join(' ')}/>
							<div className={[i.image, 'kit-lazy', i.image_highway].join(' ')}/>
						</div>
					</div>
				</section>
			</div>
		)
	}
}

export default Background;
