const initialState = {	
	loading: true,
	boards: [],
	lists: []
};

const reducer = (state = initialState, action) => {
	console.log('Actions in reducer', action);
	switch (action.type) {
		case 'SET_TASK':
			{
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

				localStorage.setItem(
					"lists",
					JSON.stringify(newListArray)
				);

				return {
					...state,
					lists: newListArray
				};
			}
			
		case 'SET_LIST':
			{
				const newListArray = [...state.lists, action.payload];

				localStorage.setItem(
					"lists",
					JSON.stringify(newListArray)
				);

				return {
					...state,
					lists: [...state.lists, action.payload]
				};
			}

		case 'SET_LISTS':
			return {
				...state,
				lists: action.payload,
				loading: false
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

			localStorage.setItem(
				"lists",
				JSON.stringify(newListArray)
			);
			
			return {
				...state,
				lists: newListArray
			};

		case 'DELETE_LIST':
			{
				const { listId } = action.payload;
				const lists = state.lists;
				const inxOfRequedList = lists.findIndex((item) => item.listId === listId);
				const newListArray = [
					...lists.slice(0, inxOfRequedList),
					...lists.slice(inxOfRequedList + 1)
				];

				localStorage.setItem(
					"lists",
					JSON.stringify(newListArray)
				);

				return {
					...state,
					lists: newListArray
				};
		}

		case 'SET_BOARDS':
			{
				return {
					...state,
					boards: action.payload
				};
			}

		case 'SET_BOARD':
			{
				const newBoards = [...state.boards, action.payload];

				localStorage.setItem(
					"boards",
					JSON.stringify(newBoards)
				);

				return {
					...state,
					boards: newBoards
				};
			}
		
		case 'DELETE_BOARD':
			const { filteredBoards, filteredLists } = action.payload;
			return {
				...state,
				lists: filteredLists,
				boards: filteredBoards
			};

		default:
			return state;
	}
}

export default reducer;