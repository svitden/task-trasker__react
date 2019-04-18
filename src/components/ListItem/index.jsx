import React, {Component} from 'react';
import './ListItem.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faTimes);

class ListItem extends Component {
	render () {
		const { taskName, onTaskDeleted } = this.props;
		
		return (
			<React.Fragment>
				<h3 className="task_title">{taskName}</h3>
				<div
					className="task_close-btn icon"
					onClick={onTaskDeleted}
				>
					<FontAwesomeIcon icon="times" />
				</div>
			</React.Fragment>
		);
	}	
}

export default ListItem;