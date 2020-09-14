import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTypeFilter, setYearFilter } from "../../state/ducks/movies/actions";

export default function MovieRow({ Title, Year, imdbID, index, Type }) {
	const dispatch = useDispatch();

	return (
		<tr>
			<th scope="row">{index}</th>
			<td>
				<Link to={`/detail/${imdbID}`}>{Title}</Link>
			</td>
			<td
				onClick={() => {
					dispatch(setYearFilter(Year));
				}}
			>
				{Year}
			</td>
			<td
				onClick={() => {
					dispatch(setTypeFilter(Type));
				}}
			>
				{Type}
			</td>
			<td>{imdbID}</td>
		</tr>
	);
}
