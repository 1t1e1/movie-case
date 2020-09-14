import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

export default function MovieRow({ Title, Year, imdbID, index }) {
	return (
		<tr>
			<th scope="row">{index}</th>
			<td>{Title}</td>
			<td>{Year}</td>
			<td>
				<Link to="/detail/tt1690470">{imdbID}</Link>
			</td>
		</tr>
	);
}
