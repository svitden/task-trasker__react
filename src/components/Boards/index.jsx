import React, { Component } from 'react';
import EmptyBoard from './../EmptyBoard';

import './Boards.css'

class Boards extends Component {

  state = {
    boardNames: []
  }

  getBoardName = (text) => {
    const { boardNames } = this.state;
    boardNames.push(text);
    this.setState(() => {
      return {
        boardNames: boardNames
      }
    });
  }

  renderItems (arr) {
    const array = arr.reverse();
    return array.map((boardName) => {
      return (
        <li className="boards__item" key={boardName}>
          <div className="board__detail">
            <h3 className="board__detail-title">
              {boardName}
            </h3>
          </div>
        </li>
      )
    });
  }

  render() {
    const { boardNames } = this.state;  
    
    const items = this.renderItems(boardNames);

    return (
      <section className="boards">
        <ul className="boards__list">
          {items}          
          <EmptyBoard getBoardName={this.getBoardName}/>
        </ul>
      </section>
    );
  }
}

export default Boards;
