import React from 'react';
import '../../../../plugins/lazy/kit.lazy.js'
import Button from '../../../components/btn/Button';
import s from '../../../styles/common.css';
import i from './images.css';
import Note from '../../../components/Note';

import mountains from "../../../images/lazy-demo/mountains.jpg";
import mountainsPlaceholder from "../../../images/lazy-demo/mountains-placeholder.jpg";
import highway from "../../../images/lazy-demo/highway.jpg";
import highwayPlaceholder from "../../../images/lazy-demo/highway-placeholder.jpg";

class Async extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			tagImages: [],
			backgroundImages: []
		}
	}

	componentDidMount() {
		kit.createLazy({
			delay: 2000,
			success: i.loaded,
		});
	}

	componentDidUpdate() {
		kit.lazy.load();
	}

	backgroundClickHandler = () => {
		let image = [<img className={[i.image, 'kit-lazy'].join(' ')} src={highwayPlaceholder} data-src={highway} key={Date.now()}/>];
		this.setState((prevState) => {
			return {
				backgroundImages: prevState.backgroundImages.concat(image)
			}
		});
	};

	imageClickHandler = () => {
		let image = [<img className={[i.image, 'kit-lazy'].join(' ')} src={highwayPlaceholder} data-src={highway} key={Date.now()}/>];
		this.setState((prevState) => {
			return {
				tagImages: prevState.tagImages.concat(image)
			}
		});
	};


	render() {
		let b = this.props.bootstrap;
		return(
			<div>
				<section className={s.commonSection}>
					<div className={b.row}>
						<div className={b.col}>
							<h1 className={s.h1}>Asynchronous Lazy Loading</h1>
							<Note>
								In this demo-load was delayed for a 2 seconds so you can see the result, loader has no delay by default, but you can set it with options.
								<br/> Reload page to see demo again.
							</Note>
							<h2 className={s.h2}>IMG Tags</h2>
							<p>
								<Button onClick={this.imageClickHandler}>Generate new image</Button>
							</p>
							{this.state.tagImages}
							<h2 className={s.h2}>Background Images</h2>
							<p>
								<Button onClick={this.backgroundClickHandler}>Generate new background image</Button>
							</p>
							{this.state.backgroundImages}
						</div>
					</div>
				</section>
			</div>
		)
	}
}

export default Async;
