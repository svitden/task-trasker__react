import React, { Component } from 'react';

import './BoardsDeletePage.css';
import { connect } from 'react-redux';
import { setBoards, removeBoard } from './../../store/actions';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faTimes);



class BoardsDeletePage extends Component {

	componentDidMount() {
		let boardsFromLocalStorage = JSON.parse(localStorage.getItem("boards"));
		boardsFromLocalStorage ? this.props.setBoards(boardsFromLocalStorage) : this.props.setBoards(this.props.boards);
	};

	
	renderItems(arr) {

		const { removeBoard } = this.props;

		return arr.map((item) => {
			return (
				<div className="board-delete__wrapper"
					key={item.boardId}
				>
					<div className="board-delete__content">
						<div className="board-delete__detail">
							<h3 className="board-delete__detail-title">
								{item.boardName}
							</h3>
							<div
								className="icon board-delete-icon__close"
								onClick={() => { removeBoard(item.boardId)}}
							>
								<FontAwesomeIcon icon="times" />
							</div>
						</div>
					</div>
				</div>
			)
		});
	}

	render() {

		const { boards } = this.props;
		const boardContext = this.renderItems(boards);

		return (
			<section className="boards">
				{boardContext}				
			</section>
		);
	}
};

const mapStateToProps = state => ({
	boards: state.boards,
	loading: state.loading
});

const mapDispatchToProps = {	
	setBoards,
	removeBoard
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardsDeletePage);