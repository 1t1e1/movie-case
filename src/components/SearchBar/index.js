import React, { useState } from "react";
import { Col, Input, InputGroup, InputGroupAddon, Button } from "reactstrap";

import { useDispatch, useSelector } from "react-redux";
import {
	setSearchTerm,
	setTypeFilter,
	setYearFilter,
	getMovies,
} from "../../state/ducks/movies/actions";
import MyDropDown from "./MyDropDown";

export default function SearchBar() {
	const { searchTerm, typeFilter, yearFilter, activePage } = useSelector(
		(state) => ({
			searchTerm: state.movies.searchTerm,
			typeFilter: state.movies.typeFilter,
			yearFilter: state.movies.yearFilter,
			activePage: state.movies.activePage,
		})
	);

	const dispatch = useDispatch();

	const handleClickType = (type) => {
		dispatch(setTypeFilter(type.toLowerCase()));
	};

	const handleClickYear = (year) => {
		dispatch(setYearFilter("" + year));
	};

	const types = ["", "Movie", "Series", "Episode", "Game"];
	const years = [""];
	for (let i = 2020; i > 1920; i--) years.push(i);

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
					<Button
						color="primary"
						onClick={() => {
							dispatch(getMovies(searchTerm, activePage, typeFilter, ""));
						}}
					>
						search
					</Button>
					<MyDropDown
						name="Type"
						handleClick={handleClickType}
						items={types}
						value={typeFilter}
					></MyDropDown>
					<MyDropDown
						className="long-list"
						name="Year"
						handleClick={handleClickYear}
						items={years}
						value={yearFilter}
					></MyDropDown>
				</InputGroupAddon>
			</InputGroup>
		</Col>
	);
}
