import React from 'react';
import '../../../../plugins/modal/kit.modal.js';
import '../../../../plugins/modal/kit.modal.css';
import '../../../../plugins/modal/templates/loader/kit.modal.loader-circle.css';
import s from '../../../styles/common.css';
import CodeHighlight from 'code-highlight';
import "highlight.js/styles/arduino-ligh-custom.css";

class Loader extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		document.kit.modal.createModal('Loader');
	}

	render() {
		return(
			<section className={s.mainOuter}>
				<div className={s.wrapper}>
					<div className={s.mainInner}>
						<h1 className={s.commonH1}>Modal Loader</h1>
						<p className={s.commonP}>This time, we will run code, which takes 5 seconds, and during this time, you will view on so called pre-loader.</p>
						<button className={s.commonButton} data-trigger="Loader">Nothing uncommon, right?</button>
						<h2 className={s.commonH2}>Why this is so important?</h2>
					</div>
				</div>
				{/*Сделать модалки - компоненты*/}
				<div data-modal="Loader" className="kit_modal kit_none modal_loader_circle">
					<div className="modal_stage modal_loader_circle-stage">
					</div>
				</div>

			</section>
		)
	}

}

export default Loader;
