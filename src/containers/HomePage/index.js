import React, { useEffect, useState } from "react";
import { SearchBar, MovieTable, PaginationComp } from "../../components";
import { Row, Col } from "reactstrap";

import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../state/ducks/movies/actions";

export default function HomePage() {
	const { movies, loading, searchTerm, activePage, resultCount } = useSelector(
		(state) => ({
			movies: state.movies.data,
			loading: state.movies.loading,
			searchTerm: state.movies.searchTerm,
			activePage: state.movies.activePage,
			resultCount: state.movies.resultCount,
		})
	);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getMovies(searchTerm, activePage));
	}, [searchTerm]);

	return (
		<>
			<Row>
				<SearchBar></SearchBar>
			</Row>
			<Row>
				<Col>
					<MovieTable movies={movies} loading={loading}></MovieTable>
				</Col>
			</Row>
			<Row>
				<PaginationComp />
			</Row>
		</>
	);
}
