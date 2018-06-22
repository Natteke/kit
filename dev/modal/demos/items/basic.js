import React from 'react';
import '../../../../plugins/modal/kit.modal.js';
import '../../../../plugins/modal/kit.modal.css';
import '../../../../plugins/modal/kit.modal.basic.css';

console.dir('Basic');

class Basic extends React.Component {
	constructor(props) {
		super(props);
	}

	handleClickModal = (e) => {
		e.target.modal.hide()
	};

	componentDidMount() {
		document.kit.modal.createModal('Basic');
	}

	render() {
		return(
			<section>
				<h2>Basic Modal</h2>
				<button data-trigger="Basic">Activate</button>
				<div data-modal="Basic" className="kit_modal kit_none modal_basic">
					<div className="modal_stage modal_basic-stage">
						<p className="modal_basic-heading ">Your form was sent</p>
						<p className="modal_basic-text">We will contact you as soon as possible.</p>
						<button onClick={this.handleClickModal} className="modal_basic-button" type="button">CLOSE</button>
					</div>
				</div>
			</section>
		)
	}

}

export default Basic;
