import React from 'react';
import '../../../../plugins/modal/kit.modal.js';
import '../../../../plugins/modal/kit.modal.css';
import '../../../../plugins/modal/kit.modal.basic.css';
import Note from '../../../components/Note.js';
import s from '../../../styles/common.css';

class Basic extends React.Component {
	constructor(props) {
		super(props);
	}

	handleClickModal = (e) => {
		e.target.modal.hide()
	};

	componentDidMount() {
		document.kit.modal.createModal('Basic');
	}

	render() {
		return(
			<section className={s.mainOuter}>
				<div className={s.wrapper}>
					<div className={s.mainInner}>
						<h2 className={s.commonH2}>Basic Modal</h2>
						<div className={s.logicPart}>
							<div className={s.textContainer}>
								<p>Try by pressing this common empty button.</p>
							</div>
							<button className={s.commonButton} data-trigger="Basic">Nothing uncommon, right?</button>
						</div>

						<div className={s.logicPart}>
							<h3 className={s.commonH3}>Simple as a snow</h3>
							<div className={s.textContainer}>
								<p>This is (as you may thought) most common usage of Kit Modal Window. All settings are default.</p>
								<Note author={'Me'}>
									<p>You can put anything you want within kit_modal element.</p>
								</Note>
								<p>Here's how it works:</p>
							</div>
						</div>

						{/*Сделать модалки - компоненты*/}
						<div data-modal="Basic" className="kit_modal kit_none modal_basic">
							<div className="modal_stage modal_basic-stage">
								<p className="modal_basic-heading">This is a basic layout.</p>
								<p className="modal_basic-text">But it&nbsp;can be&nbsp;easily modified to&nbsp;your requirements.</p>
								<button onClick={this.handleClickModal} className="modal_basic-button" type="button">CLOSE</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Basic;
