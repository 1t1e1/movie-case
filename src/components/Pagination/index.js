import React, { useState, useEffect } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

import { useDispatch, useSelector } from "react-redux";
import { setActivePage } from "../../state/ducks/movies/actions";

const PaginationComp = () => {
	const { activePage, resultCount } = useSelector((state) => ({
		activePage: state.movies.activePage,
		resultCount: state.movies.resultCount,
	}));

	const dispatch = useDispatch();

	const [pageCount, setPageCount] = useState(Math.ceil(resultCount));

	const pageArray = [];
	for (let i = 1; i <= pageCount; i++) pageArray.push(i);

	useEffect(() => {
		setPageCount(Math.ceil(resultCount));
	}, [resultCount]);

	const handleActivePage = (num) => {
		if (num === "last") {
			dispatch(setActivePage(pageCount));
		} else if (num === "first") {
			dispatch(setActivePage(1));
		} else {
			dispatch(setActivePage(num));
		}
	};

	return (
		<Pagination aria-label="Page navigation example">
			<PaginationItem disabled={1 === activePage}>
				<PaginationLink
					first
					href="#"
					onClick={() => handleActivePage("first")}
				/>
			</PaginationItem>
			<PaginationItem disabled={1 === activePage}>
				<PaginationLink
					previous
					href="#"
					onClick={() => handleActivePage(activePage - 1)}
				/>
			</PaginationItem>

			{pageArray.map(
				(item) =>
					Math.abs(item - activePage) < 4 && (
						<PageItem
							text={item}
							active={item === activePage}
							clickHandle={() => {
								handleActivePage(item);
							}}
						></PageItem>
					)
			)}
			<PaginationItem disabled={pageCount === activePage}>
				<PaginationLink
					next
					href="#"
					onClick={() => handleActivePage(activePage + 1)}
				/>
			</PaginationItem>
			<PaginationItem disabled={pageCount === activePage}>
				<PaginationLink
					last
					href="#"
					onClick={() => handleActivePage("last")}
				/>
			</PaginationItem>
		</Pagination>
	);
};

export default PaginationComp;

function PageItem({ text, active, clickHandle }) {
	return (
		<PaginationItem active={active}>
			<PaginationLink onClick={(e) => clickHandle(e.target.value)} href="#">
				{text}
			</PaginationLink>
		</PaginationItem>
	);
}
