import React from 'react';
// import Note from '../../../components/Note.js';
// import Button from '../../../components/btn/Button.js'
// import StarButton from '../../../components/btn/StarButton.js'
import '../../../../plugins/modal/kit.modal.js';
import '../../../../plugins/modal/kit.modal.css';
import b from '../../../styles/bootstrap-grid.min.css';
import s from '../../../styles/common.css';
// import CodeHighlight from 'code-highlight';
// import "highlight.js/styles/arduino-ligh-custom.css";


class Form extends React.Component {
	constructor(props) {
		super(props);
	}


	render() {
		return(
			<section className={s.commonSection}>
				<div className={b.container}>
					<div className={b.row}>
						<div className={b.col}>
							<h1 className={s.h1}>Modal Insider</h1>
							<p className={s.comment}>// under construction</p>
						</div>
					</div>
				</div>
			</section>
		)
	}

}

export default Form;
