import React from "react";

const Button = ({
	text,
	size,
	background,
	textColor,
	onClick,
	children,
	icon,
	...props
}) => {
	background =
		background === "blue"
			? "#004DB3"
			: background === "white"
			? "#FFFFFF"
			: background;
	size = size || "140";
	textColor = textColor || "#004DB3";

	return (
		<button
			className={`p-3 bg-[${background}] text-${textColor} rounded-[5px] w-[${size}px] border-[1px] border-white ${
				children ? "flex justify-between items-center gap-x-2" : ""
			} `}
			onClick={() => onClick()}>
			{text}
			{icon}
			{children}
		</button>
	);
};

export default Button;
