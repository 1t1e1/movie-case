import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HomePage, MovieDetail, PageNotFound } from "../index";

export default function MyRouter() {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
					</ul>
				</nav>

				<Switch>
					<Route path="/detail/:movieid" exact component={MovieDetail}></Route>
					<Route path="/" exact>
						<HomePage></HomePage>
					</Route>
					<Route component={PageNotFound}></Route>
				</Switch>
			</div>
		</Router>
	);
}
