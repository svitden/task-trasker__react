import React, { Component } from 'react';
import './ListsPage.css';
import EmptyList from './../EmptyList';
import LoadLists from '../LoadLists';



class ListsPage extends Component {

	render() {
		
		return (
			<section className="lists">
				<LoadLists />				
				<div className="list__wrapper">
					<div className="list__content">
						<EmptyList />
					</div>
				</div>
			</section>
		);
	}
}

export default ListsPage;