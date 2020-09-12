import React from "react";
import { useParams } from "react-router-dom";
export default function MovieDetail() {
	let { movieid } = useParams();

	return (
		<div>
			<h3>This is Movie Detail</h3>
			<p> id {movieid}</p>
			<p> it must be 1234</p>
			<p> url match</p>
		</div>
	);
}
