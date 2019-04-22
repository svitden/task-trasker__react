import React, { Component } from 'react';
import EmptyBoard from './../EmptyBoard';

import './Boards.css';
import { connect } from 'react-redux';
import { getBoardsFromStorage, setLoading } from './../../store/actions';
import { withRouter } from 'react-router-dom';
import Spinner from '../Spinner';


class Boards extends Component {

  componentDidMount() { 
    this.props.setLoading('true');
    this.props.getBoardsFromStorage();
  }

  renderItems(arr, history) {

    return arr.map((item) => {
      return (
        <div className="board__wrapper" 
          key={item.boardId}
          onClick={() => {            
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

    const { boards, history, loading } = this.props;

    if (loading) {
      console.log('СПИННЕР БЫЛ')
      return (
        < Spinner />
      );
    }
    
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
  getBoardsFromStorage,
  setLoading
}

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(Boards) );
