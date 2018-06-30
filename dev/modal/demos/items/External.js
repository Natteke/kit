import React from 'react';
// import Note from '../../../components/Note.js';
// import Button from '../../../components/btn/Button.js'
// import StarButton from '../../../components/btn/StarButton.js'
import '../../../../plugins/modal/kit.modal.js';
import '../../../../plugins/modal/kit.modal.css';
import b from '../../../styles/bootstrap-grid.min.css';
import s from '../../../styles/common.css';
import StarButton from "../../../components/btn/StarButton";
// import CodeHighlight from 'code-highlight';
// import "highlight.js/styles/arduino-ligh-custom.css";
function triggerHandler(modal, event) {
	let link = document.querySelector('.exit-link');
	link.href = event.target.href;
	console.dir(this);
	console.dir(modal);
	console.dir(this === modal);
}

class External extends React.Component {
	constructor(props) {
		super(props);

	}

	componentDidMount() {
		document.kit.modal.createModal('External', {
			preventDefault: true,
			required: true,
			onTrigger : triggerHandler
		});
	}



	modalClose = (e) => {
		e.persist();
		e.target.modal.hide()
	};

	modalProceed = (e) => {
		e.persist();
		e.target.modal.hide()
	};


	render() {
		return(
			<section className={s.commonSection}>
				<div className={b.container}>
					<div className={b.row}>
						<div className={b.col}>
							<h1 className={s.h1}>Modal External</h1>
							<p>
								This topic will be serious. No fancy space-buttons and jokes.
							</p>
							<h3 className={s.h3}>Thinking about user</h3>
							<p>
								We’ll assume that today you open your site, which contains discounts for all licensed programs on the planet, with links to the source of course.
								<br/> Daily  thousands of developers writing you about placement an ad on your site.
							</p>
							<p>
								At some point you are wondering, what if some of their sites could be malicious?
								<br/>You do not want to be responsible if the user suddenly loses all his data after going to a external site.
							</p>
							<p>
								At least you should notify them about it, right?
							</p>
							<h3 className={s.h3}>We have the solution</h3>
							<p>Let's ask how best to do on <a data-trigger="External" href="http://stackoverflow.com/">this</a> site.</p>
						</div>
					</div>
				</div>
				<div data-modal="External" className="kit_modal kit_none basic">
					<div className="modal_stage basic-stage">
						<p className="basic-heading">You Shall Not Pass</p>
						<p className="basic-text">Only the chosen one can pass to this marvelous site!</p>
						<button onClick={this.modalClose}
								className="basic-button"
								type="button">
							Step back
						</button>
						<a className="basic-button exit-link" href='#'>
							I AM THE CHOSEN ONE!
						</a>
					</div>
				</div>
			</section>
		)
	}

}

export default External;
