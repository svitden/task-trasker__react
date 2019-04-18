import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
	render () {
		const { buttonName } = this.props;
		return (
			<input
				className="add-button button"
				type="submit"
				value={buttonName}
			/>
		);
	}
}

export default Button;