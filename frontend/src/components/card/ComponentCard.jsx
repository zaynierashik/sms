const ComponentCard = ({
	title,
	icon: Icon,
	onIconClick,
	children,
	className = "",
	titleClassName = "",
	desc = "",
}) => {
	return (
		<div className={`rounded-2xl border border-gray-200 bg-white shadow-md p-6 ${className}`}>
			{title && (
				<div className="flex items-center justify-between mb-4">
					<h3 className={`text-lg font-semibold text-gray-800 ${titleClassName}`}>{title}</h3>
					{Icon && (
						<button
							onClick={onIconClick}
							className="flex items-center justify-center px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
						>
							<Icon className="w-5 h-5 mr-2" />
							<span className="text-sm font-medium">Add Teacher</span>
						</button>
					)}
				</div>
			)}
			{desc && <p className="text-sm text-gray-500 mb-2">{desc}</p>}
			{children}
		</div>
	);
};

export default ComponentCard;
