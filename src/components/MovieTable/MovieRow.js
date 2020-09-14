import React from "react";
import { Link } from "react-router-dom";

export default function MovieRow({ Title, Year, imdbID, index }) {
	return (
		<tr>
			<th scope="row">{index}</th>
			<td>{Title}</td>
			<td>{Year}</td>
			<td>
				<Link to={`/detail/${imdbID}`}>{imdbID}</Link>
			</td>
		</tr>
	);
}
