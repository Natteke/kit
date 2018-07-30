import React from 'react';
import '../../../../plugins/locker/kit.locker.js'
import '../../../../plugins/locker/kit.locker.css'
import StarButton from '../../../components/btn/StarButton.js'
import s from '../../../styles/common.css';
import CodeHighlight from 'code-highlight';
import "highlight.js/styles/arduino-ligh-custom.css";

class Basic extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			buttonText: 'Lock Scroll'
		}
	}

	componentDidMount() {
		kit.locker.createLocker();
	}


	handleClick = () => {
		const k = kit.locker;
		if(k.instance.active) {
			k.unlock();
			this.setState({buttonText: 'Lock Scroll'})
		} else {
			this.setState({buttonText: 'Release Scroll'});
			k.lock();
		}
	};

	render() {
		let b = this.props.bootstrap;
		return(
			<div>
				<section className={s.commonSection}>
					<div className={b.row}>
						<div className={b.col}>
							<h1 className={s.h1}>Locker Basic</h1>
							<p>
								Let's prevent your window from scrolling.
								<br/> Click the button.
							</p>
							<StarButton onClick={this.handleClick}>{this.state.buttonText}</StarButton>
							<p>
								<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum laboriosam quia quibusdam ut. Amet aspernatur commodi consequatur deleniti enim esse, itaque magni maxime, possimus provident quam quos ratione unde velit.</span><span>At deserunt dignissimos enim illo in, iure odio tempore voluptatibus! Provident, sapiente, ullam? Ab aliquid aperiam architecto beatae enim fuga, ipsam iure porro provident quo recusandae vitae, voluptate voluptatem voluptatum.</span>
							</p>
							<StarButton onClick={this.handleClick}>{this.state.buttonText}</StarButton>
							<p>
								<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores cupiditate impedit in iusto non, perspiciatis quidem voluptatibus. Amet dolore, dolorum eligendi, eveniet nemo odit placeat quae reiciendis suscipit temporibus tenetur?</span><span>Accusamus aliquam consequatur, cum dolorum, ducimus esse fugiat incidunt ipsa laudantium maxime nesciunt officiis omnis optio quasi reprehenderit sunt voluptatibus? Asperiores aut, dolorum eveniet hic in minus modi necessitatibus quisquam!</span>
							</p>
							<StarButton onClick={this.handleClick}>{this.state.buttonText}</StarButton>
						</div>
					</div>
				</section>
			</div>
		)
	}
}

export default Basic;
