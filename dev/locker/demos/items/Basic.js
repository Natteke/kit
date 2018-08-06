import React from 'react';
import '../../../../plugins/locker/kit.locker.js'
import '../../../../plugins/locker/kit.locker.min.css'
import StarButton from '../../../components/btn/StarButton.js'
import s from '../../../styles/common.css';
// import CodeHighlight from 'code-highlight';
// import "highlight.js/styles/arduino-ligh-custom.css";

class Basic extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			buttonText: 'Lock Scroll'
		}
	}

	onScrollLock = () => {
		this.setState({buttonText: 'Release Scroll'});
	};

	onScrollRelease = () => {
		this.setState({buttonText: 'Lock Scroll'})
	};

	componentDidMount = () => {
		kit.locker.createLocker({
			onLock: this.onScrollLock,
			onRelease: this.onScrollRelease
		});
	};


	handleClick = () => {
		const k = kit.locker;
		if(k.instance.active) {
			k.unlock();
		} else {
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
								<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur iure iusto laudantium maiores natus nesciunt nostrum nulla placeat quae quam quasi, quidem quo reiciendis. Amet at nam officia praesentium sed!</span><span>At doloremque error explicabo incidunt minima ratione totam voluptas. Alias, aut culpa debitis ea explicabo, hic impedit iure magnam minus mollitia nesciunt quod reiciendis temporibus ullam vitae! Animi atque, dolor?</span><span>Asperiores consectetur culpa delectus deleniti dolor dolore dolorem, ea eius eligendi harum iusto laudantium magnam maiores pariatur possimus repellendus voluptates! Corporis eos, fuga iure laudantium molestiae placeat sit velit veniam?</span><span>A aut commodi debitis doloremque eaque impedit, ipsa ipsum libero nihil officia quasi reiciendis sapiente, sequi, similique soluta totam voluptatibus! Debitis dolorum, ea eos ipsa modi nihil temporibus unde voluptate.</span><span>Ad consequuntur dolorum, eligendi facilis fuga impedit in itaque molestias neque odit omnis quaerat sequi soluta. Expedita laborum unde vel veritatis voluptates. Distinctio doloribus laudantium quaerat similique totam vero voluptatibus.</span>
							</p>
							<StarButton onClick={this.handleClick}>{this.state.buttonText}</StarButton>
							<p>
								<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci architecto at consequatur corporis cupiditate debitis, distinctio dolorum excepturi explicabo, facere inventore molestiae mollitia nisi praesentium quam, quidem suscipit totam!</span><span>Accusantium aspernatur aut commodi corporis ex excepturi exercitationem illum laborum maiores molestias nesciunt nulla officiis porro possimus quam quis repellendus ut velit veritatis, voluptatem. Ad ea iusto obcaecati omnis similique.</span><span>Ab assumenda fuga id iusto laborum laudantium nam natus odio qui, quis quo reprehenderit soluta ut voluptate voluptatum! Adipisci alias aperiam autem deserunt dicta fugit inventore neque provident sit temporibus!</span><span>Aliquam animi cumque deserunt dicta dolor earum esse est ex, in itaque officiis, porro quod ratione rerum, sapiente vero voluptatibus? A eveniet hic in libero omnis repellendus reprehenderit vel vero!</span><span>Aliquam, animi at culpa delectus deserunt dicta distinctio doloremque earum, ex expedita explicabo facilis hic iste, iure minima minus nam necessitatibus officia placeat porro praesentium quas quidem reprehenderit sunt voluptatum!</span>
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
