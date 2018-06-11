import React from 'react';
console.dir('INSTA');

let News = () => {
	return (

		<section id="Installation" className="info_section">
			<h2>Installation</h2>
			<h3>Include CSS</h3>
			<p className="margin_v">First, include CSS file into your HTML head:</p>
			<div className="code_example">
				<p>
					<span className="code_tag">&lt;link </span><span className="code_attr">rel</span><span
					className="code_tag">=</span><span className="code_inner">"stylesheet"</span><span
					className="code_attr"> href</span><span className="code_tag">=</span><span
					className="code_inner">"ui/kit.modal.min.css"</span><span className="code_tag">&gt;</span>
				</p>
			</div>
			<div className="section_disclamer">
				<p><code>kit.modal.min.css</code> file is required and should be included before any *.js files.</p>
			</div>
			<h3>Include JS</h3>
			<p className="margin_v">Next, include js file just before closing <span
				className="code_tag">&lt;/body&gt;</span> tag</p>
			<div className="code_example">
				<p>
					<span><span className="code_tag">&lt;script</span> <span className="code_attr">src</span>=<span
						className="code_inner">"ui/kit.modal.min.js"</span><span
						className="code_tag">&gt;&lt;/script&gt;</span></span>
				</p>
			</div>
			<h4>Set HTML initiator</h4>
			<p>You can use any element as a initiator to summon the window.</p>
			<p>It also could be an external link <a href="/ui.kit/docs/kit_modal/Demos/external.htm">(see demo)</a>, and
				you can just show/hide it by yourself, see methods.</p>
			<div className="code_example">
				<ul>
					<li><span className="code_tag">&lt;button</span> <span className="code_attr">class=</span><span
						className="code_inner code_highlight">"show_modal"</span> <span
						className="code_attr">type=</span><span className="code_inner">"button"</span><span
						className="code_tag">&gt;</span>SEND MY FORM<span className="code_tag">&lt;/button&gt;</span>
					</li>
				</ul>
			</div>
			<h3>Set HTML modal</h3>
			<p>Your markup should contain certain css classes, to let javascript do it's work.</p>
			<p>For beginners, i prepeared a little markup library, however if you feel yourself confident enough in HTML
				and CSS, you can create your own markup, using examples from library as a template.</p>
			<p className="margin_v">Example:</p>
			<div className="code_example">
				<ul>
					<li>
						<span className="code_tag">&lt;div</span> <span className="code_attr">class=</span><span
						className="code_inner">"kit_modal <span
						className="code_highlight">basic_modal</span>"</span><span className="code_tag">&gt;</span>
						<ul>
							<li>
								<span className="code_tag">&lt;div</span> <span className="code_attr">class=</span><span
								className="code_inner">"modal_stage"</span><span className="code_tag">&gt;</span>
								<ul>
									<li>
										<span className="code_tag">&lt;div</span> <span
										className="code_attr">class=</span><span
										className="code_inner">"modal_header"</span><span
										className="code_tag">&gt;</span>
										<ul>
											<li>
												<span className="code_tag">&lt;p</span><span
												className="code_tag">&gt;</span>Your form was sent<span
												className="code_tag">&lt;/p&gt;</span>
											</li>
										</ul>
										<span className="code_tag">&lt;/div</span><span className="code_tag">&gt;</span>
									</li>
									<li>
										<span className="code_tag">&lt;div</span> <span
										className="code_attr">class=</span><span
										className="code_inner">"modal_body"</span><span className="code_tag">&gt;</span>
										<ul>
											<li>
												<span className="code_tag">&lt;p</span><span
												className="code_tag">&gt;</span>We will contact you as soon as possible.<span
												className="code_tag">&lt;/p&gt;</span>
											</li>
										</ul>
										<span className="code_tag">&lt;/div</span><span className="code_tag">&gt;</span>
									</li>
									<li>
										<span className="code_tag">&lt;div</span> <span
										className="code_attr">class=</span><span
										className="code_inner">"modal_buttons"</span><span
										className="code_tag">&gt;</span>
										<ul>
											<li>
												<span className="code_tag">&lt;button</span> <span
												className="code_attr">class=</span><span
												className="code_inner">"modal_button"</span> <span
												className="code_attr">type=</span><span
												className="code_inner">"button"</span><span
												className="code_tag">&gt;</span>CLOSE<span
												className="code_tag">&lt;/button&gt;</span>
											</li>
										</ul>

										<span className="code_tag">&lt;/div</span><span className="code_tag">&gt;</span>
									</li>
								</ul>
								<span className="code_tag">&lt;/div</span><span className="code_tag">&gt;</span>
							</li>
						</ul>

						<span className="code_tag">&lt;/div</span><span className="code_tag">&gt;</span>
					</li>
				</ul>
			</div>
			<h3>Call the plugin</h3>
			<p>Almost done! Now we just need to initialize our plugin.</p>

		</section>
	)
};

export default News;
