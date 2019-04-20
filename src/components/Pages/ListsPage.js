import React, { Component } from 'react';
import './ListsPage.css';
import EmptyList from './../EmptyList';
import LoadLists from '../LoadLists';
import { connect } from 'react-redux';
import { setLists } from './../../store/actions';
import Spinner from '../Spinner';



class ListsPage extends Component {

	 componentDidMount(){		
			let listsFromLocalStorage = JSON.parse( localStorage.getItem("lists") );
			console.log('from Local Storage', listsFromLocalStorage, this.props);
		 listsFromLocalStorage = listsFromLocalStorage ? this.props.setLists(listsFromLocalStorage) : this.props.setLists(this.props.lists);
	 }

	render() {

		const { lists, loading } = this.props;
		const listContext = lists ? <LoadLists />	: null;
		if (loading) {
			console.log('СПИННЕР БЫЛ')
			return (
				< Spinner />
			);
		}
		
		return (
			<section className="lists">
				{listContext}
				<div className="list__wrapper">
					<div className="list__content">
						<EmptyList />
					</div>
				</div>
			</section>
		);
	}
}

const mapStateToProps = state => ({
	lists: state.lists,
	loading: state.loading
});

const mapDispatchToProps = {
	setLists	
}

export default connect(mapStateToProps, mapDispatchToProps)(ListsPage);