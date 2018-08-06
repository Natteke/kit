import React from 'react';
import s from '../../../styles/common.css';



class Welcome extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let b = this.props.bootstrap;
		return (
			<section className={s.commonSection}>
				<div className={b.row}>
					<div className={b.col}>
						<h1 className={s.h1}>Welcome</h1>
						<p>Kit Locker is a vanilla javascript plugin allowing you to stop browser window from scrolling.
						It automatically detects scroll, and do nothing, if it exist.</p>

						<h2 className={s.h2}>New Features</h2>
						<ul className={s.list}>
							<li>Auto scroll detect</li>
							<li>onLock and onRelease callbacks</li>
							<li>Working with touch events even on iphone</li>
						</ul>
						<h3 className={s.h3}>Compatibility</h3>
						<ul className={s.list}>
							<li>Chrome</li>
							<li>Safari</li>
							<li>Firefox</li>
							<li>IE 10+</li>
						</ul>
						<h3 className={s.h3}>Expect soon</h3>
						<ul className={s.list}>
							<li>React Component</li>
							<li>KIT NPM Package</li>
						</ul>
						<h2 className={s.h2}>How do i get more features?</h2>
						<p>You can:</p>
						<ul className={s.list}>
							<li>Request more features in a <a href="https://github.com/Natteke/kit.locker">repository</a>.</li>
							<li>Add some feature and merge it with original plugin.</li>
						</ul>
						<h2 className={s.h2}>Something went wrong?</h2>
						<p>You can:</p>
						<ul className={s.list}>
							<li>Create an <a href="https://github.com/Natteke/kit.locker/issues">issue</a>.</li>
							<li>Ask for a <a href="https://stackoverflow.com/">help</a>.</li>
							<li>Submit a <a href="https://github.com/Natteke/kit.locker/issues">solution</a>.</li>
						</ul>
					</div>
				</div>
			</section>
		)
	}
}
export default Welcome;
