import React from "react";
import { Row, Table } from "reactstrap";
import MovieRow from "./MovieRow";

export default function MovieList() {
	// return (
	// 	<Row>
	// 		<MovieCard></MovieCard>
	// 		<MovieCard></MovieCard>
	// 		<MovieCard></MovieCard>
	// 		<MovieCard></MovieCard>
	// 	</Row>
	// );
	return (
		<Table dark>
			<thead>
				<tr>
					<th>#</th>
					<th>Movie Name</th>
					<th>Year </th>
					<th>Imdb id</th>
				</tr>
			</thead>
			<tbody>
				{Array(10)
					.fill()
					.map(() => Math.round(Math.random() * 40))
					.map((row, index) => (
						<MovieRow name={row} index={index + 1}></MovieRow>
					))}
			</tbody>
		</Table>
	);
}
