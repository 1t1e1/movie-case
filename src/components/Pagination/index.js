import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const PaginationComp = ({ pageIndex, pageCount, handleActivePage }) => {
	return (
		<Pagination aria-label="Page navigation example">
			<PaginationItem disabled={1 === pageIndex}>
				<PaginationLink
					first
					href="#"
					onClick={() => handleActivePage("first")}
				/>
			</PaginationItem>
			<PaginationItem disabled={1 === pageIndex}>
				<PaginationLink
					previous
					href="#"
					onClick={() => handleActivePage(pageIndex - 1)}
				/>
			</PaginationItem>
			{Array(5)
				.fill()
				.map((_, i) => i + pageIndex - 2)
				.map((item, index) => {
					if (item < 1) return null;
					if (item > pageCount) return null;
					return (
						<PageItem
							text={item}
							active={item === pageIndex}
							clickHandle={() => {
								handleActivePage(item);
							}}
						></PageItem>
					);
				})}
			<PaginationItem disabled={pageCount === pageIndex}>
				<PaginationLink
					next
					href="#"
					onClick={() => handleActivePage(pageIndex + 1)}
				/>
			</PaginationItem>
			<PaginationItem disabled={pageCount === pageIndex}>
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
