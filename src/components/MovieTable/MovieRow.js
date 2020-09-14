import React from "react";
import { Link } from "react-router-dom";

export default function MovieRow({ Title, Year, imdbID, index, Type }) {
	return (
		<tr>
			<th scope="row">{index}</th>
			<td>
				<Link to={`/detail/${imdbID}`}>{Title}</Link>
			</td>
			<td>{Year}</td>
			<td>{Type}</td>
			<td>{imdbID}</td>
		</tr>
	);
}
