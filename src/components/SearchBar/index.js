import React, { useState } from "react";
import {
	Col,
	Input,
	InputGroup,
	InputGroupAddon,
	Button,
	ButtonDropdown,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	Dropdown,
} from "reactstrap";

import { useDispatch, useSelector } from "react-redux";
import {
	setSearchTerm,
	setTypeFilter,
	getMovies,
} from "../../state/ducks/movies/actions";

export default function SearchBar() {
	const { searchTerm, typeFilter, activePage } = useSelector((state) => ({
		searchTerm: state.movies.searchTerm,
		typeFilter: state.movies.typeFilter,
		activePage: state.movies.activePage,
	}));

	const dispatch = useDispatch();

	const [dropDownOpen, setDropDownOpen] = useState(false);
	const toggle = () => {
		setDropDownOpen(!dropDownOpen);
	};

	const handleClick = (type) => {
		dispatch(setTypeFilter(type));
	};

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
					<ButtonDropdown>
						<Dropdown isOpen={dropDownOpen} toggle={toggle}>
							<DropdownToggle color="secondary" className="dropdown-toggle">
								{typeFilter ? typeFilter : "Choose Filter"}
							</DropdownToggle>
							<DropdownMenu className="currency-dropdown">
								{["", "Movie", "Series", "Episode"].map((item) =>
									item ? (
										<DropdownItem
											onClick={() => handleClick(item.toLowerCase())}
										>
											{item}
										</DropdownItem>
									) : (
										<DropdownItem
											onClick={() => handleClick(item.toLowerCase())}
										>
											ALL
										</DropdownItem>
									)
								)}
							</DropdownMenu>
						</Dropdown>
					</ButtonDropdown>
				</InputGroupAddon>
			</InputGroup>
		</Col>
	);
}
