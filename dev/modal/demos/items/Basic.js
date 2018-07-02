import React from 'react';
import '../../../../plugins/modal/kit.modal.js';
import '../../../../plugins/modal/kit.modal.css';
import '../../../../plugins/modal/templates/basic/kit.modal.basic.css';
import StarButton from '../../../components/btn/StarButton.js'
import s from '../../../styles/common.css';
import CodeHighlight from 'code-highlight';
import "highlight.js/styles/arduino-ligh-custom.css";

class Basic extends React.Component {
	constructor(props) {
		super(props);
	}

	handleClickModal = (e) => {
		e.persist();
		e.target.modal.hide()
	};

	componentDidMount() {
		document.kit.modal.createModal('Basic', {
			fixed: 'header'
		});
	}

	render() {
		let b = this.props.bootstrap;
		return(
			<div>
				<section className={s.commonSection}>
					<div className={b.container}>
						<div className={b.row}>
							<div className={b.col}>
								<h1 className={s.h1}>Modal Basic</h1>
								<p>
									Imagine that user filled your online form and send it.
									<br/>So, how to notify him about it?
								</p>
								<p>Well, the answer is right in front of us.</p>
								<StarButton data-trigger={'Basic'}>Front of us</StarButton>
								<h2 className={s.h2}>Pretty simple right?</h2>
								<p>This (as you may thought) is the most common way to use Kit&nbsp;Modal. Everything is default. Only some styles for text and button inside.</p>
								<h2 className={s.h2}>So here's the setup</h2>
								<h3 className={s.h3}>CSS</h3>
								<div className={s.codeContainer}>
									<CodeHighlight language="html">
										<span className={s.codeLine}>&lt;link rel=&quot;stylesheet&quot; href=&quot;/styles/kit.modal.css&quot;&gt;</span>
										<span className={s.codeLine}>&lt;link rel=&quot;stylesheet&quot; href=&quot;/styles/kit.modal.basic.css&quot;&gt;</span>
									</CodeHighlight>
								</div>
								<h3 className={s.h3}>HTML</h3>
								<div className={s.codeContainer}>
									<CodeHighlight language="html">
										<span className={s.codeLine}>&lt;div data-modal="Basic" class="kit_modal kit_none basic"&gt;</span>
										<div className={s.code_levels}>
											<span className={s.codeLine}>&lt;div class="stage basic-stage"&gt;</span>
											<div className={s.code_levels}>
												<span className={s.codeLine}>&lt;p class="basic-heading"&gt;This is a basic layout.&lt;/p&gt;</span>
												<span className={s.codeLine}>&lt;p class="basic-text"&gt;But it can be easily modified to your requirements.&lt;/p&gt;</span>
												<span className={s.codeLine}>&lt;div className=&quot;basic-container&quot;&gt;</span>
												<div className={s.code_levels}>
													<span className={s.codeLine}>&lt;button onClick="this.modal.hide()" class="basic-button" type="button"&gt;CLOSE&lt;/button&gt;</span>
												</div>
												<span className={s.codeLine}>&lt;/div&gt;</span>
											</div>
											<span className={s.codeLine}>&lt;/div&gt;</span>
										</div>
										<span className={s.codeLine}>&lt;/div&gt;</span>
									</CodeHighlight>
								</div>
								<h3 className={s.h3}>JS</h3>
								<div className={s.codeContainer}>
									<CodeHighlight language="html">
										<span className={s.codeLine}>&lt;script src=&quot;/js/kit.modal.js&quot;&gt;&lt;/script&gt;</span>
									</CodeHighlight>
								</div>
								<h3 className={s.h3}>Calling the plugin</h3>
								<div className={s.codeContainer}>
									<CodeHighlight language="javascript">
										<span className={s.codeLine}>{'document.kit.modal.createModal(\'Basic\');'}</span>
									</CodeHighlight>
								</div>
							</div>
						</div>
					</div>
				</section>
				<div data-modal="Basic" className="kit_modal kit_none basic">
					<div className="modal_stage basic-stage">
						<p className="basic-heading">This is a basic layout.</p>
						<p className="basic-text">But it&nbsp;can be&nbsp;easily modified to&nbsp;your
							requirements.</p>
						<div className="basic-container">
							<button onClick={this.handleClickModal} className="basic-button" type="button">CLOSE</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Basic;
