import React, { Component } from 'react';
import EmptyBoard from './../EmptyBoard';

import './Boards.css';
import { connect } from 'react-redux';
import { setBoards } from './../../store/actions';
import { withRouter } from 'react-router-dom';


class Boards extends Component {

  componentDidMount() {
    let boardsFromLocalStorage = JSON.parse(localStorage.getItem("boards"));    
    boardsFromLocalStorage ? this.props.setBoards(boardsFromLocalStorage) : this.props.setBoards(this.props.boards);
  }
  
  renderItems(arr, history) {
    
    return arr.map((item) => {
      return (
        <div className="board__wrapper" 
          key={item.boardId}
          onClick={() => {
            console.log('Click on board', item.boardId);            
            history.push(`${item.boardId}`);
          }}
        >
          <div className="board__content">
            <div className="board__detail">
              <h3 className="board__detail-title">
                {item.boardName}
              </h3>
            </div>
          </div>
        </div>
      )
    });
  }

  render() {
    
    const { boards, history } = this.props;
    
    const boardContext = this.renderItems(boards, history);
    
    return (
      <section className="boards">
        {boardContext}
        <div className="board__wrapper">
          <div className="board__content">
            <EmptyBoard />
          </div>
        </div>        
      </section>
    );
  }
}

const mapStateToProps = state => ({
  boards: state.boards,
  loading: state.loading
});

const mapDispatchToProps = {
  setBoards
}

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(Boards) );
