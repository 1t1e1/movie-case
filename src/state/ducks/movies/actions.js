import * as Actions from "./types";
import Axios from "axios";
import {
	api_key,
	api_url,
	search_w_page,
	search_w_id,
	search_w_type,
	search_w_year,
} from "../../../constant";

const getMovies = (searchInput, activePage = 1, type = "", year) => {
	return (dispatch) => {
		dispatch({
			type: Actions.LOAD_MOVIES,
		});
		// series,movie
		Axios.get(
			`${api_url}${api_key}${searchInput}${search_w_page}${activePage}${search_w_type}${type}${search_w_year}${year}`
		)
			.then((result) => {
				dispatch({ type: Actions.SET_MOVIES, payload: result.data });
			})
			.catch((error) => {
				console.log(error);
			});
	};
};

const setYearFilter = (year) => {
	return (dispatch) => {
		dispatch({
			type: Actions.SET_YEAR_FILTER,
			payload: ("" + year).slice(0, 4),
		});
	};
};

const setTypeFilter = (type) => {
	return (dispatch) => {
		dispatch({
			type: Actions.SET_TYPE_FILTER,
			payload: type,
		});
	};
};

const setResultCount = (num) => {
	return (dispatch) => {
		dispatch({
			type: Actions.SET_RESULT_COUNT,
			payload: num,
		});
	};
};

const setActivePage = (pageNum) => {
	return (dispatch) => {
		dispatch({
			type: Actions.SET_ACTIVE_PAGE,
			payload: pageNum,
		});
	};
};

const setSearchTerm = (searchTerm) => {
	return (dispatch) => {
		dispatch({
			type: Actions.SET_YEAR_FILTER,
			payload: "",
		});
		dispatch({
			type: Actions.SET_TYPE_FILTER,
			payload: "",
		});
		dispatch({
			type: Actions.SET_SEARCH_TERM,
			payload: searchTerm,
		});
	};
};

const getMovieById = (movieId) => {
	return (dispatch) => {
		dispatch({
			type: Actions.LOAD_MOVIES,
		});
		Axios.get(`${api_url}${api_key}${search_w_id}${movieId}`)
			.then((result) => {
				dispatch({ type: Actions.SET_DETAIL_MOVIE, payload: result.data });
			})
			.catch((error) => {
				console.log(error);
			});
	};
};

export {
	getMovieById,
	getMovies,
	setSearchTerm,
	setActivePage,
	setResultCount,
	setTypeFilter,
	setYearFilter,
};
