import React, { useEffect, useState } from "react";
import Axios from "axios";
import { SearchBar, MovieTable } from "../../components";
import { api_key, api_url, first_str } from "../../constant";

export default function HomePage() {
	const [state, setState] = useState("");
	const [user_input, setUserInput] = useState(first_str);

	useEffect(() => {
		Axios.get(api_url + api_key + user_input).then((res) => setState(res.data));
		// console.log("user_input");
		// console.log(user_input);
	}, [user_input]);

	return (
		<>
			<SearchBar
				handleUserInput={setUserInput}
				userInput={user_input}
			></SearchBar>
			<MovieTable liste={state}></MovieTable>
		</>
	);
}
