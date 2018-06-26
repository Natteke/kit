import React from 'react';
import '../../../../plugins/modal/kit.modal.js';
import '../../../../plugins/modal/kit.modal.css';
import '../../../../plugins/modal/templates/basic/kit.modal.basic.css';
import Note from '../../../components/Note.js';
import s from '../../../styles/common.css';
import CodeHighlight from 'code-highlight';
import "highlight.js/styles/arduino-ligh-custom.css";

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
						<h1 className={s.commonH1}>Modal Basic</h1>
						<p className={s.commonP}>Try by pressing this common empty button.</p>
						<button className={s.commonButton} data-trigger="Basic">Nothing uncommon, right?</button>
						<h2 className={s.commonH2}>Simple as a snow</h2>
						<p className={s.commonP}>This is (as you may thought) most common usage of Kit Modal. All settings are default, no add-ons. Only some styles for text and button inside it.</p>
						<Note author={'Me'}>
							<span>All unnecessary styles are splits into a different files, so you can load only those of them, which you like to.</span>
						</Note>
						<h2 className={s.commonH2}>Here's how it works:</h2>
						<h3 className={s.commonH3}>HTML</h3>
						<div className={s.codeContainer}>
							<CodeHighlight language="html">
								<span className={s.codeLine}>&lt;div data-modal="Basic" class="kit_modal kit_none modal_basic"&gt;</span>
								<div className={s.code_levels}>
									<span className={s.codeLine}>&lt;div class="modal_stage modal_basic-stage"&gt;</span>
									<div className={s.code_levels}>
										<span className={s.codeLine}>&lt;p class="modal_basic-heading"&gt;This is a basic layout.&lt;/p&gt;</span>
										<span className={s.codeLine}>&lt;p class="modal_basic-text"&gt;But it can be easily modified to your requirements.&lt;/p&gt;</span>
										<span className={s.codeLine}>&lt;button onClick="this.modal.hide()" class="modal_basic-button" type="button"&gt;CLOSE&lt;/button&gt;</span>
									</div>
									<span className={s.codeLine}>&lt;/div&gt;</span>
								</div>
								<span className={s.codeLine}>&lt;/div&gt;</span>
							</CodeHighlight>
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
			</section>
		)
	}
}

export default Basic;
