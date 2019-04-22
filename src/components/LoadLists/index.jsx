import React, { Component } from 'react';
import './LoadLists.css';
import List from '../List';
import { connect } from 'react-redux';
import { deleteTask, deleteList } from './../../store/actions';


class LoadLists extends Component {

	onDeleteTask = (taslId, listId) => {
		this.props.deleteTask(taslId, listId);
	}

	onDeletedList = (listId) => {
		this.props.deleteList(listId);
	}

	render () {
		const { lists, boardId } =this.props;

		const newLists = lists.filter((item) => { 			
			return item.boardId === boardId ;
		});		

		return (
			<React.Fragment>
				{
					newLists.map((list) => {
						return (
							<div className="list__wrapper" key={list.listId}>
								<div className="list__content">
									<List list={list}							
										onTaskDeleted={this.onDeleteTask}
										onListDeleted={this.onDeletedList}
										/>
								</div>
							</div>
						)
					})
				}
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => ({
	lists: state.lists,
});

const mapDispatchToProps = {
	deleteTask,
	deleteList
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadLists);