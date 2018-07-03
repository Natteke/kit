import React from 'react';
// import Note from '../../../components/Note.js';
// import Button from '../../../components/btn/Button.js'
// import StarButton from '../../../components/btn/StarButton.js'
import '../../../../plugins/modal/kit.modal.js';
import '../../../../plugins/modal/kit.modal.css';
import s from '../../../styles/common.css';
// import CodeHighlight from 'code-highlight';
// import "highlight.js/styles/arduino-ligh-custom.css";


class Form extends React.Component {
	constructor(props) {
		super(props);
	}


	render() {
		let b = this.props.bootstrap;
		return(
			<section className={s.commonSection}>
				<div className={b.row}>
					<div className={b.col}>
						<h1 className={s.h1}>Modal Insider</h1>
						<p className={s.comment}>// under construction</p>
					</div>
				</div>
			</section>
		)
	}

}

export default Form;
