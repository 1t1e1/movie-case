import React, { useEffect, useState } from "react";
import Axios from "axios";
import { SearchBar, MovieTable, PaginationComp } from "../../components";
import { api_key, api_url, first_str, search_w_page } from "../../constant";
import { Row, Col } from "reactstrap";

export default function HomePage() {
	const [state, setState] = useState("");
	const [user_input, setUserInput] = useState(first_str);
	const [resultCount, setResultCount] = useState();
	const [activePage, setActivePage] = useState(3);

	useEffect(() => {
		Axios.get(api_url + api_key + user_input + search_w_page + activePage)
			.then((res) => {
				setState(res.data);
				setResultCount(res.data.totalResults);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [user_input, activePage]);

	const handleActivePage = (num) => {
		if (num === "last") {
			setActivePage(Math.ceil(resultCount / 10));
		} else if (num === "first") {
			setActivePage(1);
		} else {
			setActivePage(num);
		}
	};

	return (
		<>
			<Row>
				<SearchBar
					handleUserInput={(e) => {
						setUserInput(e);
						setActivePage(1);
					}}
					userInput={user_input}
				></SearchBar>
			</Row>
			<Row>
				<Col>
					{/* ?? make this like items not state.search etc */}
					<MovieTable liste={state}></MovieTable>
				</Col>
			</Row>
			<Row>
				<PaginationComp
					pageCount={Math.ceil(resultCount / 10)}
					pageIndex={activePage}
					handleActivePage={handleActivePage}
				/>
			</Row>
			<Row>
				<Col> resut count : {resultCount}</Col>
				<Col> page count : {Math.ceil(resultCount / 10)}</Col>
			</Row>
		</>
	);
}
