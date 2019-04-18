const deleteTask = (taskId, listId) => ({
		type: 'DELETE_TASK',
		payload: { taskId, listId }
	});

const setList = newList => ({
	type: 'SET_LIST',
	payload: newList,
});

const setTask = (task, listId) => ({
	type: 'SET_TASK',
	payload: { task, listId }
});

export {
	setList,
	setTask,
	deleteTask
};