import * as Actions from "./types";
import Axios from "axios";
import {
	api_key,
	api_url,
	first_str,
	search_w_page,
	search_w_id,
	first_id,
} from "../../../constant";

const getMovies = (searchInput, activePage = 1) => {
	return (dispatch) => {
		dispatch({
			type: Actions.LOAD_MOVIES,
		});
		Axios.get(`${api_url}${api_key}${searchInput}${search_w_page}${activePage}`)
			.then((result) => {
				dispatch({ type: Actions.SET_MOVIES, payload: result.data });
			})
			.catch((error) => {
				console.log(error);
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
};
