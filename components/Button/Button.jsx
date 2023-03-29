import React from "react";

const Button = ({
	text,
	size,
	background,
	textColor,
	onClick,
	children,
	icon,
	borderColor,
	hoverbg,
	hovertext,
	...props
}) => {
	background = background || "[#004DB3]";
	// background === "blue"
	// 	? "#004DB3"
	// 	: background === "white"
	// 	? "#FFFFFF"
	// 	: background;
	size = size || "140";
	textColor = textColor || "[#004DB3]";
	borderColor = borderColor || "white";

	return (
		<button
			className={`p-3 bg-${background} text-${textColor} hover:text-${hovertext} hover:bg-${hoverbg}  font-[700] rounded-[5px] outline-none w-[${size}px] md:w-[${size}] border-[1px] border-${borderColor} ${
				children ? "flex  items-center gap-x-2" : ""
			} text-[12px] sm:text-[1rem]`}
			onClick={() => onClick()}>
			{text}
			{icon}
			{children}
		</button>
	);
};

export default Button;
