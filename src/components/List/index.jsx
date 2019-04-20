import React, { Component } from 'react';
import './List.css';
import ListItem from '../ListItem';
import AddTask from '../AddTask';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faTimes);


class List extends Component {

	render() {
		const { list, onTaskDeleted, onListDeleted } = this.props;
		
		return (
			<React.Fragment>
				{
					list.listName &&
					<div className="list__name-wrapper">
						<h2 className="list__name">{list.listName}</h2>
						<div
							className="icon"
							onClick={() => onListDeleted(list.listId)}
						>
							<FontAwesomeIcon icon="times" />
						</div>
					</div>
				}
				<ul className="task_list">
					{
						list.tasks.map((task) => {
							const {taskId , ...taskItems} = task;
							return (
								<li className="task__item" key={task.taskId}>
									<ListItem 
										{...taskItems}										
										onTaskDeleted={() => onTaskDeleted(taskId, list.listId)}
									/>
								</li>
							)
						})
					}
				</ul>
				<AddTask listId={list.listId}/>
			</React.Fragment>
		);
	}
}

export default  List;