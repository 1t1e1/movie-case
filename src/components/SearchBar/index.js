import React from "react";
import {
	Row,
	Col,
	Input,
	InputGroup,
	InputGroupAddon,
	Button,
} from "reactstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch, faFilter } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar({ handleUserInput, userInput }) {
	return (
		<Col className="p-4">
			<InputGroup>
				<Input
					type="text"
					placeholder={userInput}
					onChange={(e) => {
						handleUserInput(e.target.value);
					}}
				/>
				<InputGroupAddon addonType="append">
					<Button color="primary">search</Button>
					<Button color="secondary">filter</Button>
				</InputGroupAddon>
			</InputGroup>
			<p> Search term is {userInput}</p>
		</Col>
	);
}
