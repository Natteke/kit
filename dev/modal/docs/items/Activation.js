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
						<h1 className={s.h1}>Activation</h1>
						<p>This a quick guide, how to initialize Kit Modal plugin</p>
						<h2 className={s.h2}>Javascript</h2>
						<p>In your script after connecting source kit.modal.js, put the following
							<br/>like this:</p>
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
							The second one allows you to pass additional parameters to the Kit Modal.
							Check out options tab, to learn more about adjusting Kit Modal up to your requirements.
						</p>
						<Note>
						Names should be the same for each unique modal window.
							<ul className={s.list}>
								<li>kit.modal.createModal(<span className={s.highlight}>'Name'</span>)</li>
								<li>&lt;div data-modal=<span className={s.highlight}>'Name'</span> class="kit_modal"&gt;</li>
								<li>&lt;button data-trigger=<span className={s.highlight}>'Name'</span>&gt;Front of us&lt;/button&gt;</li>
							</ul>
						</Note>
						<p>
							See example with 2 instances within one page in Demos.
						</p>
						<Note>
							You can make unlimited different modals within one page, just like in pre-loader demo, there you can see 5 different instances in one screen.
						</Note>
					</div>
				</div>
			</section>
		)
	}
}
export default Installation;
