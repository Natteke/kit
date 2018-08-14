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
						<p>Quick guide how to setup Kit.Locker</p>
						<Note>
							If you have any <b>fixed elements</b> on page, please add them 'kit-set-fixed' class, to prevent them from jumping on scroll lock.
							Im not searching for fixed elements automatically for performance reasons.
						</Note>
						<h2 className={s.h2}>Styles</h2>
						<p>
							First things first. Styles in head, or inline.
						</p>
						<div className={s.codeContainer}>
							<CodeHighlight language="html">
								<span className={s.codeLine}>&lt;link rel=&quot;stylesheet&quot; href=&quot;/styles/kit.locker.min.css&quot;&gt;</span>
							</CodeHighlight>
						</div>
						<h2 className={s.h2}>Javascript</h2>
						<p>Connect source javascript just before yours script.</p>
						<div className={s.codeContainer}>
							<CodeHighlight language="html">
								<span className={s.codeLine}>&lt;script src=&quot;/js/kit.locker.js&quot;&gt;&lt;/script&gt;</span>
							</CodeHighlight>
						</div>
						<p>Init a plugin</p>
						<div className={s.codeContainer}>
							<CodeHighlight language="html">
								<span className={s.codeLine}>kit.locker.createLocker();</span>
							</CodeHighlight>
						</div>
						<p>Or init and pass callbacks</p>
						<div className={s.codeContainer}>
							<CodeHighlight language="javascript">
									<span className={s.codeLine}>{'kit.locker.createLocker({\n' +
									'\tonLock: onScrollLock,\n' +
									'\tonRelease: onScrollRelease,\n' +
									'});'}</span>
							</CodeHighlight>
						</div>
						<Note>
							Note that if page have no scroll, plugin will not be activated (Hello Cap), so callbacks also will not be triggered.
							<br/> First, it allows you to do some logic only if window actually was locked, and also you don't need to check scroll existence manually.
						</Note>
						<p>Activate or deactivate plugin as desired</p>
						<div className={s.codeContainer}>
							<CodeHighlight language="javascript">
									<span className={s.codeLine}>{
									'\tkit.locker.lock();\n' +
									'\tkit.locker.unlock();\n'
									}</span>
							</CodeHighlight>
						</div>
					</div>
				</div>
			</section>
		)
	}
}
export default Installation;
