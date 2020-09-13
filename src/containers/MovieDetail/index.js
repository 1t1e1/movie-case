import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getMovieById } from "../../state/ducks/movies/actions";

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

	return (
		<div>
			<h3>This is Movie Detail</h3>
			<p> id : {movieid}</p>
			<p> it must be tt1690470</p>
			<button
				onClick={() => {
					console.log(state);
					console.log(loading);
				}}
			>
				{" "}
				click
			</button>
			<p>{JSON.stringify(state)}</p>
		</div>
	);
}

// class MovieDetail extends React.Component {
// 	constructor(props) {
// 		super(props);
// 	}

// 	componentDidMount() {
// 		this.props.getMovieById("tt1690470");
// 	}

// 	render() {
// 		console.log("what ");
// 		console.log(this.props);
// 		return <h1>movie is loading...</h1>;
// 	}
// }

// const mapStateToProps = (state) => {
// 	return {
// 		detailMovieData: state.movies.detailMovieData,
// 		loading: state.movies.loading,
// 	};
// };

// const mapDispatchToProps = {
// 	getMovieById,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
