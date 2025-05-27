const ComponentCard = ({
	title,
	icon: Icon,
	onIconClick,
	children,
	className = "",
	desc = "",
}) => {
	return (
		<div className={`rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] ${className}`}>
			<div className="flex items-center justify-between px-6 py-5">
				<h3 className="text-2xl uppercase tracking-widest font-medium text-gray-800 dark:text-white/90"> {title} </h3>

				{Icon && (
					<div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-xl dark:bg-gray-800">
						<button onClick={onIconClick} className="relative flex items-center justify-center text-gray-500 transition-colors bg-white border border-gray-200 rounded-lg dropdown-toggle hover:text-gray-700 h-10 w-10 hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white">
							<Icon className="w-5 h-5 text-gray-800 dark:text-white/90" />
						</button>
					</div>
				)}
			</div>

			{desc && (
				<div className="px-6 -mt-3">
					<p className="text-sm text-gray-500 dark:text-gray-400">{desc}</p>
				</div>
			)}

			<div className="p-4 border-t border-gray-100 dark:border-gray-800 sm:p-6">
				<div className="space-y-6">{children}</div>
			</div>
		</div>
	);
};

export default ComponentCard;