import React from 'react';
import s from '../../../styles/common.css';
import CodeHighlight from 'code-highlight';
import "highlight.js/styles/arduino-ligh-custom.css";

class Functions extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let b = this.props.bootstrap;
		return (
			<section className={s.commonSection}>
				<div className={b.row}>
					<div className={b.col}>
						<h1 className={s.h1}>Functions</h1>
						<p>List of methods and callbacks for Kit Modal</p>
						<h2 className={s.h2}>Methods</h2>
						<h3 className={s["h3"]}>.lock()</h3>
						<p>
							Lock page scroll
							<br/>Example:
						</p>
						<div className={s.codeContainer}>
							<CodeHighlight language="javascript">
								{'kit.locker.lock();'}
							</CodeHighlight>
						</div>
						<h3 className={s["h3"]}>.unlock()</h3>
						<p>
							Release page scroll
							<br/>Example:
						</p>
						<div className={s.codeContainer}>
							<CodeHighlight language="javascript">
								{'kit.locker.unlock();'}
							</CodeHighlight>
						</div>


						<h2 className={s.h2}>Callbacks</h2>
						<p>List of callbacks, which allows you to pass a function, and activate it on locker event</p>
						<p>Pass callbacks as a option like this:</p>
						<div className={s.codeContainer}>
							<CodeHighlight language="javascript">
								<span className={s.codeLine}>{'function lockHandler(){\n console.log("Page locked!")\n});'}</span>
								<br/>
								<span className={s.codeLine}>{'kit.locker({\n onLock: lockHandler\n});'}</span>
							</CodeHighlight>
						</div>
						<h3 className={s["h3"]}>onLock()</h3>
						<p>Activates if scroll was locked.</p>

						<h3 className={s["h3"]}>onRelease()</h3>
						<p>Activates if scroll was unlocked.</p>
					</div>
				</div>
			</section>
		)
	}
}
export default Functions;
