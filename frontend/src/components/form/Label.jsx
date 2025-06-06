import React from "react";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

const Label = ({ htmlFor, children, className }) => {
	return (
		<label htmlFor={htmlFor} className={clsx( twMerge( "mb-1.5 block text-sm font-medium text-gray-700", className ) )} >
			{children}
		</label>
	);
};

export default Label;