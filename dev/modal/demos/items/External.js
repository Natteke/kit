import React from 'react';
import '../../../../plugins/modal/kit.modal.js';
import '../../../../plugins/modal/kit.modal.min.css';
import s from '../../../styles/common.css';
import CodeHighlight from 'code-highlight';
import "highlight.js/styles/arduino-ligh-custom.css";



class External extends React.Component {
	constructor(props) {
		super(props);

	}

	componentDidMount() {
		let link = document.querySelector('.exit-link');
		function triggerHandler(event) {
			link.href = event.target.href;
		}
		document.kit.modal.createModal('External', {
			preventDefault: true,
			required: true,
			fixed: 'header',
			onTrigger : triggerHandler
		});
	}

	modalClose = (e) => {
		e.persist();
		e.target.modal.hide()
	};

	render() {
		let b = this.props.bootstrap;
		return(
			<div>
				<section className={s.commonSection}>
					<div className={b.row}>
						<div className={b.col}>
							<h1 className={s.h1}>Modal External</h1>
							<p>Click to proceed to external site <a data-trigger="External" href="http://stackoverflow.com/">here</a>.</p>
							<h2 className={s.h2}>And here's the setup</h2>
							<div className={s.codeContainer}>
								<CodeHighlight language="html">
									<span className={s.codeLine}>&lt;link rel=&quot;stylesheet&quot; href=&quot;/styles/kit.modal.css&quot;&gt;</span>
									<span className={s.codeLine}>&lt;link rel=&quot;stylesheet&quot; href=&quot;/styles/kit.modal.basic.css&quot;&gt;</span>
								</CodeHighlight>
							</div>
							<h3 className={s.h3}>HTML</h3>
							<div className={s.codeContainer}>
								<CodeHighlight language="html">
									<span className={s.codeLine}>&lt;div data-modal="External" class="kit_modal modal_basic"&gt;</span>
									<div className={s.code_levels}>
										<span className={s.codeLine}>&lt;div class="modal_stage basic-stage"&gt;</span>
										<div className={s.code_levels}>
											<span className={s.codeLine}>&lt;p class="basic-heading"&gt;You are leaving our website.&lt;/p&gt;</span>
											<span className={s.codeLine}>&lt;p class="basic-text"&gt;Click «Continue» to proceed, or «Cancel» to stay on our site.&lt;/p&gt;</span>
											<span className={s.codeLine}>&lt;div class=&quot;basic-buttons-container&quot;&gt;</span>
											<div className={s.code_levels}>
												<span className={s.codeLine}>&lt;button onClick="this.modal.hide()" class=&quot;basic-button&quot; type=&quot;button&quot;&gt; Cansel &lt;/button&gt;</span>
												<span className={s.codeLine}>&lt;a class=&quot;basic-button exit-link&quot; href=&quot;#&quot; target=&quot;_blank&quot;&gt; Continue &lt;/a&gt;</span>
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
							<h3 className={s.h3}>Make a handler</h3>
							<div className={s.codeContainer}>
								<CodeHighlight language="javascript">
									<span className={s.codeLine}>{'let link = document.querySelector(\'.exit-link\');\n' +
									'function triggerHandler(event) {\n' +
									'\tlink.href = event.target.href;\n' +
									'}'}</span>
								</CodeHighlight>
							</div>
							<h3 className={s.h3}>Calling the plugin</h3>
							<div className={s.codeContainer}>
								<CodeHighlight language="javascript">
									<span className={s.codeLine}>{'document.kit.modal.createModal(\'External\', {\n' +
									'\tpreventDefault: true,\n' +
									'\trequired: true,\n' +
									'\tonTrigger : triggerHandler\n' +
									'});'}</span>
								</CodeHighlight>
							</div>

						</div>
					</div>
				</section>
				<div data-modal="External" className="kit_modal basic">
					<div className="modal_stage basic-stage">
						<p className="basic-heading">You are leaving our website.</p>
						<p className="basic-text">Click «Continue» to proceed, or «Cancel» to stay on our site.</p>
						<div className="basic-container">
							<button onClick={this.modalClose}
									className="basic-button"
									type="button">
								Cancel
							</button>
							<a target="_blank" className="basic-button exit-link" href='#'>
								Continue
							</a>
						</div>
					</div>
				</div>
			</div>
		)
	}

}

export default External;
