import React, { Component } from 'react';
import EmptyBoard from './../EmptyBoard';

import './Boards.css';
import { connect } from 'react-redux';


class Boards extends Component {

  state = {
    boardNames: []
  }

  renderItems (arr) {
    console.log("ARR" , arr)
    return arr.map((item) => {
      return (
        <div className="board__wrapper" key={item.boardId}>
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
    
    const { boards } = this.props;

    const boardContext = this.renderItems(boards);
    
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

export default connect(mapStateToProps)(Boards);
