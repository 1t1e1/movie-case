import * as Actions from "./types";

const initialState = {
	data: [{ title: "first movie" }, { title: "second movie" }],
	loading: true,
	filter: "",
	searchTerm: "Pokemon",
	resultCount: 1,
	searchByValue: "",
	detailMovieData: {},
	activePage: 1,
};

function movieReducer(state = initialState, action) {
	switch (action.type) {
		case Actions.LOAD_MOVIES:
			return {
				...state,
				loading: true,
			};
		case Actions.SET_MOVIES:
			return {
				...state,
				data: [...action.payload.Search],
				resultCount: action.payload.totalResults,
				loading: false,
			};
		case Actions.SET_DETAIL_MOVIE:
			return {
				...state,
				detailMovieData: { ...action.payload },
				loading: false,
			};
		case Actions.SET_RESULT_COUNT:
			return {
				...state,
				resultCount: action.payload,
			};
		case Actions.SET_ACTIVE_PAGE:
			return {
				...state,
				activePage: action.payload,
			};
		case Actions.SET_SEARCH_TERM:
			return {
				...state,
				activePage: 1,
				searchTerm: action.payload,
			};
		default:
			return state;
	}
}

export default movieReducer;
