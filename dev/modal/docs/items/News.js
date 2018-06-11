import React from 'react';
console.dir('NEWS');

let News = () => {
	return (
			<section id="Welcome" className="info_section">
			<h2>Welcome</h2>
			<div className="section_disclamer">
				<p>&laquo;Let's make something awesome for developers&raquo;</p>
				<p className="author">&mdash;&nbsp;Some guy.</p>
			</div>
			<h3>New Features</h3>
			<ul className="margin_v list">
				<li><p>Additional options</p></li>
				<li><p>Callback Events</p></li>
				<li><p>Button options</p></li>
				<li><p>External links locker</p></li>
				<li><p>Scroll detection</p></li>
			</ul>
			<h3>Compatibility</h3>
			<p>UI Kit Modal has been tested in:</p>
			<ul className="margin_v list">
				<li><p>Chrome</p></li>
				<li><p>Firefox</p></li>
				<li><p>Safari</p></li>
				<li><p>IE10/11/Edge</p></li>
				<li><p>Iphone 5s</p></li>
				<li><p>Samsung Galaxy s4...s7</p></li>
			</ul>
			<h3>Options will be added soon</h3>
			<ul className="margin_v list">
				<li><p>AJAX HTML loader</p></li>
				<li><p>Additional default styles</p></li>
			</ul>
		</section>
	)
};

export default News;
