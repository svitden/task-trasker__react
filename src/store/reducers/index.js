const initialState = {
	boardNames: [],	
	lists: [
		{
			listName: 'TEST NAME 199',
			listId: 199,
			tasks: [
				{ taskId: 300, taskName: '300 Go' },
				{ taskId: 301, taskName: '301 Let' },
				{ taskId: 302, taskName: '302 Last' }
			]
		},
		{
			listName: 'TEST NAME 200',
			listId: 200,
			tasks: [
				{ taskId: 400, taskName: '400 Here' },
				{ taskId: 401, taskName: '401 I' },
				{ taskId: 402, taskName: '402 am' }
			]
		}
	]	
}

const reducer = (state = initialState, action) => {
	console.log('Actions in reducer', action);
	switch (action.type) {		
		case 'SET_TASK':
			{
				console.log(action.payload);
				const { task, listId } = action.payload;
				const lists = state.lists;
				const requedList = lists.find((item) => item.listId === listId);
				const inxOfRequedList = lists.findIndex((item) => item.listId === listId);

				const newTaskArray = [
					...requedList.tasks,
					task
				];

				requedList.tasks = newTaskArray;

				const newListArray = [
					...lists.slice(0, inxOfRequedList),
					requedList,
					...lists.slice(inxOfRequedList + 1)
				];

				return {
					...state,
					lists: newListArray
				};
			}			
			
		case 'SET_LIST':
			return {
				...state, 
				lists: [...state.lists, action.payload]
			};
		case 'DELETE_TASK':			
			const { taskId, listId } = action.payload;
			const lists = state.lists;
			const requedList = lists.find((item) => item.listId === listId);
			const inxOfRequedList = lists.findIndex((item) => item.listId === listId);
			const inxOfTask = requedList.tasks.findIndex((item) => item.taskId === taskId);

			const newTaskArray = [
				...requedList.tasks.slice(0, inxOfTask),
				...requedList.tasks.slice(inxOfTask + 1)
			];

			requedList.tasks = newTaskArray;

			const newListArray = [
				...lists.slice(0, inxOfRequedList),
				requedList,
				...lists.slice(inxOfRequedList + 1)
			];
			
			return {
				...state,
				lists: newListArray
			};

		default:
			return state;
	}
}

export default reducer;