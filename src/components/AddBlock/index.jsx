import React, {Component} from 'react';
import './AddBlock.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

library.add( faPlus)

class AddBlock extends Component {

  render() {
    const { name, onClick, listClicked } = this.props;
    
    const listAddClassName = listClicked ? "list__add hide" : "list__add";
    return (
      <div
        className={listAddClassName}
        onClick={onClick}>
        <div
          className="icon">
          <FontAwesomeIcon icon="plus" />
        </div>
        <p className="list__title">
          {name}
        </p>
      </div>
    );
  }
}

export default AddBlock;
