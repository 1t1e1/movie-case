import React, { useEffect } from "react";
import { SearchBar, MovieTable, PaginationComp } from "../../components";
import { Row, Col } from "reactstrap";

import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../state/ducks/movies/actions";

export default function HomePage() {
	const { movies, loading, searchTerm, activePage, typeFilter } = useSelector(
		(state) => ({
			movies: state.movies.data,
			loading: state.movies.loading,
			searchTerm: state.movies.searchTerm,
			activePage: state.movies.activePage,
			typeFilter: state.movies.typeFilter,
		})
	);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getMovies(searchTerm, activePage, typeFilter, ""));
	}, [searchTerm, typeFilter]);

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
