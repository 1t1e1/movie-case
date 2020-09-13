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

export { getMovieById };
