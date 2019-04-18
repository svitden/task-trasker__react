import React, { Component } from 'react';
import './List.css';
import ListItem from '../ListItem';
import AddTask from '../AddTask';


class List extends Component {

	render() {
		const { list, onTaskDeleted } = this.props;

		console.log('List component props', list);
		
		return (
			<React.Fragment>
				{
					list.listName &&
					<h2 className="list__name">{list.listName}</h2>
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