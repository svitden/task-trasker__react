import React, { Component } from 'react';
import Button from './../Button';

import './Controls.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faTimes);


class Controls extends Component {
	render () {
		
		const { onIconClick = null, buttonName } =this.props;
		return (			
			<div className="controls">
				<Button buttonName={buttonName} />
				<div
					className="icon"
					onClick={onIconClick}
				>
					<FontAwesomeIcon icon="times" />
				</div>
			</div>					
		);
	}
}

export default Controls;