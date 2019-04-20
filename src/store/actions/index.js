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

const setBoard = newBoard => ({
	type: 'SET_BOARD',
	payload: newBoard,
});


export {
	setList,
	setLists,
	setTask,
	deleteTask,
	deleteList,
	setBoard
};