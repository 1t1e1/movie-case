import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getMovieById } from "../../state/ducks/movies/actions";
import { Row, Col } from "reactstrap";

export default function MovieDetail() {
	let { movieid } = useParams();
	const { state, loading } = useSelector((state) => ({
		state: state.movies.detailMovieData,
		loading: state.movies.loading,
	}));
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getMovieById(movieid));
	}, []);

	if (loading) {
		return <div> loading </div>;
	}

	const { Title, Poster, Runtime, Genre, Director, Actors, imdbRating } = state;

	return (
		<>
			<Row>
				<Col sm="4" xs="12">
					<img src={Poster} className="img-fluid" alt="Movie Poster"></img>
				</Col>
				<Col sm="7" offset-sm="0">
					<Row>
						<h3 className="text-end">{Title}</h3>
					</Row>
					<Row>
						<p> Runtime : {Runtime}</p>
					</Row>
					<Row>
						<p> IMDB Rated :{imdbRating}</p>
					</Row>
					<Row>
						<p> Genre : {Genre}</p>
					</Row>
					<Row>
						<p> Director : {Director}</p>
					</Row>
					<Row>
						<p> Actors : {Actors}</p>
					</Row>
				</Col>
			</Row>
		</>
	);
}
