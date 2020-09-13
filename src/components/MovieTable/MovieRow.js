import React from "react";
import { Col } from "reactstrap";

export default function MovieCard({ Title, Year, imdbID, index }) {
	return (
		<tr>
			<th scope="row">{index}</th>
			<td>{Title}</td>
			<td>{Year}</td>
			<td>{imdbID}</td>
		</tr>
	);
}
