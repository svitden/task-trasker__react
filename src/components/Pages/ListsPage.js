import React, { Component } from 'react';
import './ListsPage.css';
import EmptyList from './../EmptyList';
import LoadLists from '../LoadLists';
import { connect } from 'react-redux';
import { getListsFromStorage, setLoading } from './../../store/actions';
import Spinner from '../Spinner';



class ListsPage extends Component {

	componentDidMount(){
		this.props.setLoading('true');
		this.props.getListsFromStorage();
	}

	render() {

		const { lists, loading, boardId } = this.props;		
		
		if (loading) {
			console.log('СПИННЕР БЫЛ')
			return (
				< Spinner />
			);
		}
		const listContext = lists ? <LoadLists boardId={boardId} /> : null;
		
		return (
			<section className="lists">
				{listContext}
				<div className="list__wrapper">
					<div className="list__content">
						<EmptyList boardId={boardId}/>
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
	getListsFromStorage,
	setLoading
}

export default connect(mapStateToProps, mapDispatchToProps)(ListsPage);