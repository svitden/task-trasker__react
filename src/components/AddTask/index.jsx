import React, { Component } from 'react';
import AddBlock from '../AddBlock';
import Input from './../Input';
import Controls from './../Controls';

import './AddTask.css';
import { connect } from 'react-redux';
import { setTask } from './../../store/actions';


class AddTask extends Component {

	maxId = 300;

	state = {
		listClicked: false,
		name: '',
		taskName: ''
	};

	onListClick = () => {
		this.setState(() => {
			return {
				listClicked: true
			}
		});		
	}

	onIconClick = (evt) => {
		evt.stopPropagation();
		this.setState(() => {
			return {
				listClicked: false
			}
		});		
	}

	createTask = (taskName) => {
		return {
			taskId: new Date().getTime(),
			taskName
		}
	}

	onSubmit = (evt) => {
		evt.preventDefault();
		this.setState({
			taskName: this.state.name
		});

		this.setState((state, props) => {
			const newTask = this.createTask(state.taskName);
			props.setTask(newTask, this.props.listId);
			return {
				listClicked: false
			}
		});
	}

	getValue = (text) => {
		this.setState({
			name: text
		});
	}

	render() {
			
		return (
			<React.Fragment>
				{
					!this.state.listClicked &&
					<AddBlock
						name={'Add task'}
						onClick={this.onListClick}
						listClicked={this.state.listClicked}
					/>
				}
				{
					this.state.listClicked &&
					<form onSubmit={this.onSubmit}>
						<div className="tile-input">
							<Input
								placeholder={'Enter task...'}
								onInputChange={this.getValue}
							/>
							<Controls
								buttonName="Add Task"
								onIconClick={this.onIconClick}
							/>
						</div>
					</form>
				}
			</React.Fragment>
		);
	}
}

const mapDispatchToProps = {
	setTask
}

export default connect(null, mapDispatchToProps)(AddTask);
