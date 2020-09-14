import React from "react";
import { Col, Input, InputGroup, InputGroupAddon, Button } from "reactstrap";

import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../../state/ducks/movies/actions";

export default function SearchBar() {
	const { searchTerm } = useSelector((state) => ({
		searchTerm: state.movies.searchTerm,
	}));

	const dispatch = useDispatch();

	return (
		<Col className="p-4">
			<InputGroup>
				<Input
					type="text"
					value={searchTerm}
					onChange={(e) => {
						dispatch(setSearchTerm(e.target.value.trim()));
					}}
				/>
				<InputGroupAddon addonType="append">
					<Button color="primary">search</Button>
					<Button color="secondary">filter</Button>
				</InputGroupAddon>
			</InputGroup>
		</Col>
	);
}
