import React, { Component } from 'react';
import './LoadLists.css';
import List from '../List';
import { connect } from 'react-redux';
import { deleteTask } from './../../store/actions';
//import Spinner from '../Spinner';


class LoadLists extends Component {

	onDeleteTask = (taslId, listId) => {
		console.log('click on id: ', taslId, listId);
		this.props.deleteTask(taslId, listId);
	}

	render () {
		const { lists } =this.props;

		// if (lists) return <Spinner />;
		return (
			<React.Fragment>
				{
					lists.map((list) => {
						console.log('List id', list.listId)
						return (
							<div className="list__wrapper" key={list.listId}>
								<div className="list__content">
									<List list={list}
										onTaskDeleted={this.onDeleteTask}
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
	deleteTask
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadLists);