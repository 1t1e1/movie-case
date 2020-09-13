import React, { useEffect } from "react";
import { Table, ListGroupItem, Row } from "reactstrap";
import MovieRow from "./MovieRow";

export default function MovieList({ liste }) {
	useEffect(() => {
		// console.log(liste);
	});

	return (
		<Row>
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
					{liste.Search ? (
						liste.Search.map((item, index) => (
							// <div> loading </div>
							<MovieRow
								{...item}
								index={index + 1}
								key={item.imdbID}
							></MovieRow>
						))
					) : (
						<tr> loading </tr>
					)}
				</tbody>
			</Table>
		</Row>
	);
}
