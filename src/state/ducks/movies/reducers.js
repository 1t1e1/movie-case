import * as Actions from "./types";

const initialState = {
	data: [{ title: "first movie" }, { title: "second movie" }],
	loading: true,
	filter: "",
	searchTerm: "",
	searchByValue: "Pokemon",
	detailMovieData: {},
};

function movieReducer(state = initialState, action) {
	switch (action.type) {
		case Actions.LOAD_MOVIES:
			return {
				...state,
				loading: true,
			};
		case Actions.SET_DETAIL_MOVIE:
			return {
				...state,
				detailMovieData: { ...action.payload },
				loading: false,
			};
		default:
			return state;
	}
}

export default movieReducer;
