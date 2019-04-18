import React, {Component} from 'react';
import './Input.css';

class Input extends Component {
	state = {
		value: ''
	};

	onChange = (evt) => {
		this.setState({
			value: evt.target.value
		});
		this.setState((state, props) => {					
			props.onInputChange(state.value);
		});
	};

	render () {
		const { placeholder } = this.props;
		return (
			<input
				className="tile-name-input input"
				type="text"
				placeholder={placeholder}
				onChange={this.onChange}
				value={this.state.value}
				autoFocus
			/>
		);
	}	
}

export default Input;