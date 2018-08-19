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
						<Note>
							If you are not familiar with lazy load, see the <a href="#Guide">guide</a> tab, to find out the core idea of lazy loading, and how to prepare your images before upload.
						</Note>
						<h2 className={s.h2}>Javascript</h2>
						<p>Connect source javascript as usual.</p>
						<div className={s.codeContainer}>
							<CodeHighlight language="html">
								<span className={s.codeLine}>&lt;script src=&quot;/js/kit.lazy.js&quot;&gt;&lt;/script&gt;</span>
							</CodeHighlight>
						</div>
						<p>Call the plugin</p>
						<div className={s.codeContainer}>
							<CodeHighlight language="javascript">
									<span className={s.codeLine}>{'kit.createLazy();'}</span>
							</CodeHighlight>
						</div>
						<p>Or call and pass some params</p>
						<div className={s.codeContainer}>
							<CodeHighlight language="javascript">
									<span className={s.codeLine}>{'kit.createLazy({\n' +
									'\tsearchClass: newSearchClass,\n' +
									'\tonReplace: callbackFunction,\n' +
									'});'}</span>
							</CodeHighlight>
						</div>

					</div>
				</div>
			</section>
		)
	}
}
export default Installation;
