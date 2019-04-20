import React, { Component } from 'react';

import './EmptyBoard.css';

import Input from './../Input';
import Controls from './../Controls';
import { connect } from 'react-redux';
import { setBoard } from './../../store/actions';


class EmptyBoard extends Component {

  state = {
    name: '',   
    boardClicked: false,
    boardName: '',
    
  };

  onBoardClick = () => {
    this.setState(() => {
      return {
        boardClicked: true
      }
    });
  }

  onIconClick = (evt) => {
    evt.stopPropagation();
    this.setState(() => {
      return {
        boardClicked: false
      }
    });
  }

  createBoard = (boardName) => {
    return {
      boardName,
      boardId: new Date().getTime()      
    }
  }
 
  onSubmit = (evt) => {
    evt.preventDefault();
    this.setState({
      boardName: this.state.name
    });
    
    this.setState((state, props) => {
      const newBoard = this.createBoard(state.boardName);

      props.setBoard(newBoard);
      return {
        boardClicked: false
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
        <div
          className="boards__item"
          onClick={this.onBoardClick}
        >
          {
            !this.state.boardClicked &&
            <div className="board__tile-add">
              <p className="board__tile-text">Create new board...</p>
            </div>
          }
          { 
            this.state.boardClicked &&
            <form onSubmit={this.onSubmit}>
              <div className="tile-input">
                <Input 
                  placeholder={'Enter board title...'}
                  onInputChange={this.getValue}
                />
                <Controls                  
                  buttonName="Add Board"
                  onIconClick={this.onIconClick}
                />
              </div>
            </form>
          }
        </div>
      </React.Fragment>
    );
  }
}


const mapDispatchToProps = {
  setBoard
}

export default connect(null, mapDispatchToProps)(EmptyBoard);
