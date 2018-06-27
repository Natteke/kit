import React from 'react';
import '../../../../plugins/modal/kit.modal.js';
import '../../../../plugins/modal/kit.modal.css';
import '../../../../plugins/modal/templates/loader/kit.modal.loader-rhombus.css';
import '../../../../plugins/modal/templates/loader/kit.modal.loader-square.css';
import '../../../../plugins/modal/templates/loader/kit.modal.loader-stripes.css';
import '../../../../plugins/modal/templates/loader/kit.modal.loader-circles.css';
import '../../../../plugins/modal/templates/loader/kit.modal.loader-spinner.css';
import s from '../../../styles/common.css';
import CodeHighlight from 'code-highlight';
import "highlight.js/styles/arduino-ligh-custom.css";

class Loader extends React.Component {
	constructor(props) {
		super(props);
	}

	handleClick = (e) => {
		e.persist();
		setTimeout(() => e.target.modal.hide(), 3000);
	};

	componentDidMount() {
		document.kit.modal.createModal('square',{
			required: true
		});
		document.kit.modal.createModal('rhombus',{
			required: true
		});
		document.kit.modal.createModal('stripes',{
			required: true
		});
		document.kit.modal.createModal('circles',{
			required: true
		});
		document.kit.modal.createModal('spinner',{
			required: true
		});
	}

	render() {
		return(
			<section className={s.mainOuter}>
				<div className={s.wrapper}>
					<div className={s.mainInner}>
						<h1 className={s.commonH1}>Modal Loader</h1>
						<p className={s.commonP}>After pressing the button below, we will run some pseudo-code (3s timeout), and to inform you, that our application is fine, there is no errors and it's still up and running, we will show you a pre-loader.</p>
						<button onClick={this.handleClick} className={s.commonButton} data-trigger="square">To the stars!</button>
						<h2 className={s.commonH2}>Why this is so important?</h2>
						<p className={s.commonP}>Preloader is very important interface element that let visitors know that the website hasn’t crashed, it’s just processing data.</p>
						<button onClick={this.handleClick} className={s.commonButton} data-trigger="rhombus">Rhombus</button>
						<button onClick={this.handleClick} className={s.commonButton} data-trigger="stripes">Stripes</button>
						<button onClick={this.handleClick} className={s.commonButton} data-trigger="circles">Circles</button>
						<button onClick={this.handleClick} className={s.commonButton} data-trigger="spinner">Spinner</button>
					</div>
				</div>
				{/*Сделать модалки - компоненты*/}
				<div data-modal="square" className="kit_modal kit_none square">
					<div className="modal_stage square-stage">
						<div className="modal_stage square-inner"></div>
					</div>
				</div>

				<div data-modal="rhombus" className="kit_modal kit_none rhombus">
					<div className="modal_stage rhombus-stage">
						<div className="modal_stage rhombus-inner">
							<div className="sk-cube1 sk-cube"></div>
							<div className="sk-cube2 sk-cube"></div>
							<div className="sk-cube4 sk-cube"></div>
							<div className="sk-cube3 sk-cube"></div>
						</div>
					</div>
				</div>

				<div data-modal="stripes" className="kit_modal kit_none stripes">
					<div className="modal_stage stripes-stage">
						<div className="modal_stage stripes-inner">
							<div className="rect1"></div>
							<div className="rect2"></div>
							<div className="rect3"></div>
							<div className="rect4"></div>
							<div className="rect5"></div>
						</div>
					</div>
				</div>

				<div data-modal="circles" className="kit_modal kit_none circles">
					<div className="modal_stage circles-stage">
						<div className="sk-fading-circle">
							<div className="sk-circle1 sk-circle"></div>
							<div className="sk-circle2 sk-circle"></div>
							<div className="sk-circle3 sk-circle"></div>
							<div className="sk-circle4 sk-circle"></div>
							<div className="sk-circle5 sk-circle"></div>
							<div className="sk-circle6 sk-circle"></div>
							<div className="sk-circle7 sk-circle"></div>
							<div className="sk-circle8 sk-circle"></div>
							<div className="sk-circle9 sk-circle"></div>
							<div className="sk-circle10 sk-circle"></div>
							<div className="sk-circle11 sk-circle"></div>
							<div className="sk-circle12 sk-circle"></div>
						</div>
					</div>
				</div>

				<div data-modal="spinner" className="kit_modal kit_none stripes">
					<div className="modal_stage stripes-stage">
						<div className="spinner">
							<div className="cube1"></div>
							<div className="cube2"></div>
						</div>
					</div>
				</div>



			</section>
		)
	}

}

export default Loader;
