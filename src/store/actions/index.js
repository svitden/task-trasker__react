const setList = newList => ({
	type: 'SET_LIST',
	payload: newList,
});

const deleteList = listId => ({
	type: 'DELETE_LIST',
	payload: { listId },
});

const setTask = (task, listId) => ({
	type: 'SET_TASK',
	payload: { task, listId }
});

const deleteTask = (taskId, listId) => ({
	type: 'DELETE_TASK',
	payload: { taskId, listId }
});

const setLists = newLists => ({
	type: 'SET_LISTS',
	payload: newLists,
});

const setBoards = newBoard => ({
	type: 'SET_BOARDS',
	payload: newBoard,
});

const setBoard = newBoard => ({
	type: 'SET_BOARD',
	payload: newBoard,
});

const deleteBoard = (filteredBoards, filteredLists) => ({
	type: 'DELETE_BOARD',
	payload: { filteredBoards, filteredLists },
});

const removeBoard = boardId => dispatch => {

	const lists = JSON.parse(localStorage.getItem('lists'));
	const filteredLists = lists.filter(item => item.boardId !== boardId);
	console.log('filteredLists', filteredLists);
	localStorage.setItem('lists', JSON.stringify(filteredLists));

	const boards = JSON.parse(localStorage.getItem('boards'));
	const filteredBoards = boards.filter(item => item.boardId !== boardId);
	localStorage.setItem('boards', JSON.stringify(filteredBoards));

	dispatch( deleteBoard(filteredBoards, filteredLists) );
};



export {
	setList,
	setLists,
	setTask,
	deleteTask,
	deleteList,
	setBoards,
	setBoard,
	removeBoard
};