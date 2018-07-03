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


class Installation extends React.Component {
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
				<div className={b.container}>
					<div className={b.row}>
						<div className={b.col}>
							<h1>Installation</h1>
							<p>Quick guide how you can easily setup your first kit.modal window</p>
							<h3 className={s.h3}>Styles</h3>
							<p>
								First things first. Connect styles.
							</p>
							<div className={s.codeContainer}>
								<CodeHighlight language="html">
									<span className={s.codeLine}>&lt;link rel=&quot;stylesheet&quot; href=&quot;/styles/kit.modal.css&quot;&gt;</span>
								</CodeHighlight>
							</div>
							<p>
								It is optional, but if you want to use some of default styles, just connect them, or copy and paste styles from there into your stylesheet
								<br/>Just like this:
							</p>
							<div className={s.codeContainer}>
								<CodeHighlight language="html">
									<span className={s.codeLine}>&lt;link rel=&quot;stylesheet&quot; href=&quot;/styles/kit.modal.basic.css&quot;&gt;</span>
								</CodeHighlight>
							</div>
							<h3 className={s.h3}>Markup</h3>
							<p>
								Then you should put HTML into a body tag.
							</p>
							<div className={s.codeContainer}>
								<CodeHighlight language="html">
									<span className={s.codeLine}>&lt;div data-modal="Basic" class="kit_modal kit_none basic"&gt;</span>
									<div className={s.code_levels}>
										<span className={s.codeLine}>&lt;div class="modal_stage basic-stage"&gt;</span>
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
							<p>You can play with markup as you want, but there always should be two system things.</p>
							<ul className={s.list}>
								<li>Outer container with <span className={s.highlight}>data-modal="NAME"</span> attribute and <span className={s.highlight}>"kit_modal"</span> class name.</li>
								<li>Inner container with <span className={s.highlight}>"modal_stage"</span> class name.</li>
							</ul>
							<p>You can wrap them with any other tags, put anything inside, between them, doesn't matter. Just keep them.</p>
							<h3 className={s.h3}>Javascript</h3>
							<p>First, connect source javascript.</p>
							<div className={s.codeContainer}>
								<CodeHighlight language="html">
									<span className={s.codeLine}>&lt;script src=&quot;/js/kit.modal.js&quot;&gt;&lt;/script&gt;</span>
								</CodeHighlight>
							</div>
							<p>Next, call the plugin with, or without parameters.
								<br/>Like this:</p>
							<div className={s.codeContainer}>
								<CodeHighlight language="javascript">
									<span className={s.codeLine}>{'kit.modal.createModal(\'Name\');'}</span>
								</CodeHighlight>
							</div>
							<p>Or like this:</p>
							<div className={s.codeContainer}>
								<CodeHighlight language="javascript">
									<span className={s.codeLine}>{'kit.modal.createModal(\'Name\',{\n    option: \'value\',\n    option: \'value\',\n    option: \'value\'\n});'}</span>
								</CodeHighlight>
							</div>
							<p>
								Check out options tab, to learn how you can adjust kit.modal up to your requirements.
							</p>
							<Note>
								Kit object with all your KIT plugins lay in the document, and you can get them with: <span className={s.highlight}>document.kit</span>.
								<p>But in last patch we created a shortcut: <span className={s.highlight}>kit</span>, so now you can create modal window with the following: <span className={s.highlight}>kit.modal.createModal("Name")</span>, instead of <span className={s.highlight}>document.kit.modal.createModal("Name")</span></p>
							</Note>

						</div>
					</div>
				</div>
			</section>
		)
	}
}
export default Installation;
