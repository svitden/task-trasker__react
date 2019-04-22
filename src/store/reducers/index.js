const initialState = {	
	loading: true,
	boards: [],
	lists: []
};

const reducer = (state = initialState, action) => {
	console.log('Actions in reducer', action);

	switch (action.type) {

		case 'DELETE_TASK':	
			return {
				...state,
				lists: action.payload
			};

		case 'SET_TASK':
			return {
				...state,
				lists: action.payload
			};

		case 'SET_LIST':
			return {
				...state,
				lists: action.payload
			};

		case 'SET_LISTS':
			return {
				...state,
				lists: action.payload,
				loading: false
			};
			
		case 'DELETE_LIST':
			return {
				...state,
				lists: action.payload
			};

		case 'SET_BOARD':
			return {
				...state,
				boards: action.payload
			};

		case 'SET_BOARDS':
			return {
				...state,
				boards: action.payload,
				loading: false
			};
		
		case 'DELETE_BOARD':
			const { filteredBoards, filteredLists } = action.payload;
			return {
				...state,
				lists: filteredLists,
				boards: filteredBoards
			};

		case 'SET_LOADING':
			return {
				...state,
				loading: action.payload
			};

		default:
			return state;
	}
}

export default reducer;