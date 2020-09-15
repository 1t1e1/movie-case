import React, { useState } from "react";
import {
	ButtonDropdown,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	Dropdown,
} from "reactstrap";

export default function MyDropDown({ handleClick, items, value, name }) {
	const [dropDownOpen, setDropDownOpen] = useState(false);
	const toggle = () => {
		setDropDownOpen(!dropDownOpen);
	};

	return (
		<ButtonDropdown>
			<Dropdown isOpen={dropDownOpen} toggle={toggle}>
				<DropdownToggle color="secondary" className="dropdown-toggle">
					{value ? value : "Choose " + name}
				</DropdownToggle>
				<DropdownMenu
					className="currency-dropdown"
					modifiers={{
						setMaxHeight: {
							enabled: true,
							order: 890,
							fn: (data) => {
								return {
									...data,
									styles: {
										...data.styles,
										overflow: "auto",
										maxHeight: 300,
									},
								};
							},
						},
					}}
				>
					{items.map((item) =>
						item ? (
							<DropdownItem key={item} onClick={() => handleClick(item)}>
								{item}
							</DropdownItem>
						) : (
							<DropdownItem key={item} onClick={() => handleClick(item)}>
								ALL
							</DropdownItem>
						)
					)}
				</DropdownMenu>
			</Dropdown>
		</ButtonDropdown>
	);
}
