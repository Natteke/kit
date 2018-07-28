import React from 'react';
import '../styles/componentStyles/hoverContainer.css';
import '../../plugins/modal/kit.modal.min.js';
import '../../plugins/modal/kit.modal.min.css';



class HoverContainer extends React.Component {
	componentDidMount() {
		document.kit.modal.createModal('hoverContainer', {
			fixed: 'header'
		});
	}

	render() {
		return (
			<div data-modal="hoverContainer" className="kit_modal hoverContainer">
				<div className="modal_stage hoverContainer-inner">
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default HoverContainer;

