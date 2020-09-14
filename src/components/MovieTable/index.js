import React, { useEffect } from "react";
import { Table, Row } from "reactstrap";
import MovieRow from "./MovieRow";

export default function MovieList({ movies, loading }) {
	useEffect(() => {});

	if (loading) return <h3>loading</h3>;

	return (
		<Row>
			<Table>
				<thead>
					<tr>
						<th>#</th>
						<th>Movie Name</th>
						<th>Year </th>
						<th>Type </th>
						<th>Imdb id</th>
					</tr>
				</thead>
				<tbody>
					{movies ? (
						movies.map((item, index) => (
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
