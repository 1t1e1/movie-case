import React from "react";
import { Col } from "reactstrap";

export default function MovieCard({ name, year = 2000, imdbid, index }) {
	return (
		<tr>
			<th scope="row">{index}</th>
			<td>{name}</td>
			<td>{year}</td>
			<td>{imdbid}</td>
		</tr>
	);
}
