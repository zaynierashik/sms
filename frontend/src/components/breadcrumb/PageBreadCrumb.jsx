import { Link } from "react-router-dom";

const PageBreadcrumb = ({ pathSegments = [] }) => {
	return (
		<div className="flex flex-wrap items-center justify-between gap-3">
			<h2 className="text-xl font-semibold text-gray-800">
				{pathSegments[pathSegments.length - 1]?.name ?? ""}
			</h2>

			<nav>
				<ol className="flex items-center gap-1.5 flex-wrap">
					{pathSegments.map((segment, index) => (
						<li key={index} className="flex items-center gap-1.5 text-sm font-normal">
							{segment.path ? (
								<Link to={segment.path} className="text-gray-500 inline-flex items-center gap-1.5">
									{segment.name}
									<svg className="stroke-current" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M6.0765 12.667L10.2432 8.50033L6.0765 4.33366" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</Link>
							) : (
								<span className="text-gray-500">{segment.name}</span>
							)}
						</li>
					))}
				</ol>
			</nav>
		</div>
	);
};

export default PageBreadcrumb;