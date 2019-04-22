const deleteTask = (taskId, listId) => dispatch => {

	const lists = JSON.parse(localStorage.getItem("lists"));
	const requiredList = lists.find((item) => item.listId === listId);
	const inxOfRequiredList = lists.findIndex((item) => item.listId === listId);

	const tasks = requiredList.tasks;
	const newTasks = tasks.filter((item) => item.taskId !== taskId);

	requiredList.tasks = newTasks;
	
	const newLists = [
		...lists.slice(0, inxOfRequiredList),
		requiredList,
		...lists.slice(inxOfRequiredList + 1)
	];

	localStorage.setItem('lists', JSON.stringify(newLists));

	dispatch ({
		type: 'DELETE_TASK',
		payload: newLists
	});
};


const deleteList = listId => dispatch => {
	
	const lists = JSON.parse(localStorage.getItem("lists"));
	const filteredLists = lists.filter(item => item.listId !== listId);
	localStorage.setItem('lists', JSON.stringify(filteredLists));
	
	dispatch ({
		type: 'DELETE_LIST',
		payload: filteredLists,
	});
};

const setTask = (task, listId) => dispatch => {
	const lists = JSON.parse(localStorage.getItem("lists"));
	const requiredList = lists.find((item) => item.listId === listId);
	const inxOfRequiredList = lists.findIndex((item) => item.listId === listId);
	
	const newTasks = [...requiredList.tasks, task];
	
	requiredList.tasks = newTasks;
	console.log('requiredList', requiredList);
	const newLists = [
		...lists.slice(0, inxOfRequiredList),
		requiredList,
		...lists.slice(inxOfRequiredList + 1)
	];	

	localStorage.setItem('lists', JSON.stringify(newLists));

	dispatch ({
		type: 'SET_TASK',
		payload: newLists
	});
};

const setList = newList => (dispatch, getState) => {
	let lists = JSON.parse(localStorage.getItem("lists"));
	if (lists === null) lists = getState().lists;

	const newLists = [...lists, newList];
	localStorage.setItem('lists', JSON.stringify(newLists));

	dispatch({
		type: 'SET_LIST',
		payload: newLists,
	});
};

const setBoard = newBoard => (dispatch, getState) => {
	let boards = JSON.parse(localStorage.getItem('boards'));
	if (boards === null) boards = getState().boards;

	const newBoards = [...boards, newBoard];
	localStorage.setItem('boards', JSON.stringify(newBoards));

	dispatch({
		type: 'SET_BOARD',
		payload: newBoards,
	});
};

const setLists = newLists => ({
	type: 'SET_LISTS',
	payload: newLists,
});


const getListsFromStorage = () => (dispatch, getState) => {
	setTimeout(() => {
		let newLists = JSON.parse(localStorage.getItem("lists"));
		if (newLists === null) newLists = getState().lists;

		dispatch(setLists(newLists));
	}, 500);	
};

const setBoards = newBoards => ({
	type: 'SET_BOARDS',
	payload: newBoards,
});

const getBoardsFromStorage = () => (dispatch, getState) => {
	setTimeout(() => {
		let newBoards = JSON.parse(localStorage.getItem('boards'));
		if (newBoards === null) newBoards = getState().boards;
		
		dispatch(setBoards(newBoards));
	}, 500);
};


const deleteBoard = (filteredBoards, filteredLists) => ({
	type: 'DELETE_BOARD',
	payload: { filteredBoards, filteredLists },
});


const removeBoard = boardId => dispatch => {

	const lists = JSON.parse(localStorage.getItem('lists'));
	const filteredLists = lists.filter(item => item.boardId !== boardId);
	
	localStorage.setItem('lists', JSON.stringify(filteredLists));

	const boards = JSON.parse(localStorage.getItem('boards'));
	const filteredBoards = boards.filter(item => item.boardId !== boardId);
	localStorage.setItem('boards', JSON.stringify(filteredBoards));

	dispatch( deleteBoard(filteredBoards, filteredLists) );
};

const setLoading = (bool) => ({
	type: 'SET_LOADING',
	payload: bool,
});


export {
	setList,
	setLists,
	setTask,
	deleteTask,
	deleteList,
	setBoards,
	setBoard,
	removeBoard,
	getBoardsFromStorage,
	getListsFromStorage,
	setLoading
};