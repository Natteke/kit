import React from 'react';
import Note from '../../../components/Note.js';
import s from '../../../styles/common.css';
import CodeHighlight from 'code-highlight';
import "highlight.js/styles/arduino-ligh-custom.css";

class Installation extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let b = this.props.bootstrap;
		return (
			<section className={s.commonSection}>
				<div className={b.row}>
					<div className={b.col}>
						<h1 className={s.h1}>Installation</h1>
						<p>Quick guide how you can easily setup your first kit.modal window</p>
						<h2 className={s.h2}>Styles</h2>
						<h3 className={s.h3}>Important</h3>
						<p>
							First things first. Styles in head, or inline.
						</p>
						<div className={s.codeContainer}>
							<CodeHighlight language="html">
								<span className={s.codeLine}>&lt;link rel=&quot;stylesheet&quot; href=&quot;/styles/kit.modal.css&quot;&gt;</span>
							</CodeHighlight>
						</div>
						<h3 className={s.h3}>Optional</h3>
						<p>
							It is optional, but if you want to use some of default styles, just connect them, or copy and paste styles from assets file into your stylesheet
						</p>
						<div className={s.codeContainer}>
							<CodeHighlight language="html">
								<span className={s.codeLine}>&lt;link rel=&quot;stylesheet&quot; href=&quot;/styles/kit.modal.basic.css&quot;&gt;</span>
							</CodeHighlight>
						</div>
						<h2 className={s.h2}>Markup</h2>
						<h3 className={s.h3}>Important</h3>
						<p>
							Put modal HTML into a body tag.
						</p>
						<div className={s.codeContainer}>
							<CodeHighlight language="html">
								<span className={s.codeLine}>&lt;div data-modal="Basic" class="kit_modal basic"&gt;</span>
								<div className={s.code_levels}>
									<span className={s.codeLine}>&lt;div class="modal_stage basic-stage"&gt;</span>
										<div className={s.code_levels}>
											&lt;!-- YOUR HTML CODE GOES HERE...	--&gt;
										</div>
									<span className={s.codeLine}>&lt;/div&gt;</span>
								</div>
								<span className={s.codeLine}>&lt;/div&gt;</span>
							</CodeHighlight>
						</div>
						<h3 className={s.h3}>Optional</h3>
						<p>
							It is optional to set an activator to your modal, it could be anything: button, link, image...
							<br/>Triggers are using to summon modal window after user's action, but you can show and hide modal window using show/hide methods</p>
						<div className={s.codeContainer}>
							<CodeHighlight language="html">
								&lt;button data-trigger='Basic'&gt;Front of us&lt;/button&gt;
							</CodeHighlight>
						</div>
						<h3 className={s.h3}>Note</h3>
						<p>You can play with markup as you want, but there always 2 conditions should be met</p>
						<ul className={s.list}>
							<li>Outer container should has <span className={s.highlight}>data-modal="NAME"</span> attribute and <span className={s.highlight}>"kit_modal"</span> class name.</li>
							<li>Inner container should has <span className={s.highlight}>"modal_stage"</span> class name.</li>
						</ul>
						<h2 className={s.h2}>Javascript</h2>
						<p>Connect source javascript.</p>
						<div className={s.codeContainer}>
							<CodeHighlight language="html">
								<span className={s.codeLine}>&lt;script src=&quot;/js/kit.modal.js&quot;&gt;&lt;/script&gt;</span>
							</CodeHighlight>
						</div>
						<p>Call the plugin with, or without parameters.
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
						<h3 className={s.h3}>Use kit as a shortcut</h3>
						<Note>
							Kit object with all your KIT plugins lay in the document, and you can get it with: <span className={s.highlight}>document.kit</span>.
							<p>But in last patch we created a shortcut: <span className={s.highlight}>kit</span>, so now you can create modal window with the following: <span className={s.highlight}>kit.modal.createModal("Name")</span>, instead of <span className={s.highlight}>document.kit.modal.createModal("Name")</span></p>
							<p>Not so short as $ in JQuery, but it's better than nothing, if to keep in mind that Kit plugins working without jquery at all.</p>
						</Note>

					</div>
				</div>
			</section>
		)
	}
}
export default Installation;
