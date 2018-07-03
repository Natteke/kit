import React from 'react';
import Note from '../../../components/Note.js';
import Button from '../../../components/btn/Button.js';
import StarButton from '../../../components/btn/StarButton.js';
import '../../../../plugins/modal/kit.modal.js';
import '../../../../plugins/modal/kit.modal.css';
import '../../../../plugins/modal/templates/basic/kit.modal.basic.css';
import s from '../../../styles/common.css';
import CodeHighlight from 'code-highlight';
import "highlight.js/styles/arduino-ligh-custom.css";


class Templates extends React.Component {
	constructor(props) {
		super(props);
	}

	// handleClick = (e) => {
	// 	e.persist();
	// 	setTimeout(() => e.target.modal.hide(), 3000);
	// };

	componentDidMount() {
		// document.kit.modal.createModal('square');
	}

	render() {
		let b = this.props.bootstrap;
		return (
			<section className={s.commonSection}>
				<div className={b.row}>
					<div className={b.col}>
						<h1>Templates</h1>
					</div>
				</div>
			</section>
		)
	}
}
export default Templates;
