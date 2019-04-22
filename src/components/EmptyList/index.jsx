import React, { Component } from 'react';
import AddBlock from './../AddBlock';
import Input from './../Input';
import Controls from './../Controls';

import './EmptyList.css';
import { connect } from 'react-redux';
import { setList } from './../../store/actions';


class EmptyList extends Component {
  
  state = {
    listClicked: false,
    name: '', 
    listName: ''
  };

  onListClick = () => {
    this.setState( () => {
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

  createList = (listName) => {
    return {
      boardId: this.props.boardId,
      listName,
      listId: String( new Date().getTime() ),
      tasks:[]
    }
  }

  onSubmit = (evt) => {
    evt.preventDefault();
    this.setState({
      listName: this.state.name
    });

    this.setState((state, props) => {
      const newList = this.createList(state.listName);
      
      props.setList(newList);
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
            name={'Add list'}
            onClick={this.onListClick}
            listClicked={this.state.listClicked}
          />
        }
        {
          this.state.listClicked &&
          <form onSubmit={this.onSubmit}>
            <div className="tile-input">
              <Input
                placeholder={'Enter list title...'}
                onInputChange={this.getValue}
              />
              <Controls
                buttonName="Add List"
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
  setList
}

export default connect(null, mapDispatchToProps)(EmptyList);
