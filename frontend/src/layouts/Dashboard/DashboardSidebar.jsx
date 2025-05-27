import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../components/logo/Logo";

import { Squares2X2Icon, DocumentTextIcon, BuildingOffice2Icon, UserIcon, TrashIcon, ChevronDownIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { useSidebar } from "../../context/SidebarContext";

const navItems = [
	{
		icon: <Squares2X2Icon />,
		name: "Dashboard",
		path: "/dashboard",
	},
	{
		icon: <BuildingOffice2Icon />,
		name: "Institutions",
		path: "/institutions",
	},
	{
		icon: <UserIcon />,
		name: "Instructors",
		path: "/instructors",
	},
	{
		icon: <DocumentTextIcon />,
		name: "Report",
		path: "/report",
	},
	{
		icon: <TrashIcon />,
		name: "Trash",
		path: "/trash",
	},
];

function DashboardSidebar() {
	const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
	const location = useLocation();

	const [openSubmenu, setOpenSubmenu] = useState(null);
	const [subMenuHeight, setSubMenuHeight] = useState({});
	const subMenuRefs = useRef({});

	const isActive = useCallback(
		(path) => location.pathname === path,
		[location.pathname]
	);

	useEffect(() => {
		let submenuMatched = false;

		navItems.forEach((nav, index) => {
			if (nav.subItems) {
				nav.subItems.forEach((subItem) => {
					if (isActive(subItem.path)) {
						setOpenSubmenu({ type: "main", index });
						submenuMatched = true;
					}
				});
			}
		});

		if (!submenuMatched) {
			setOpenSubmenu(null);
		}
	}, [location, isActive]);

	useEffect(() => {
		if (openSubmenu !== null) {
			const key = `main-${openSubmenu.index}`;
			if (subMenuRefs.current[key]) {
				setSubMenuHeight((prevHeights) => ({
					...prevHeights,
					[key]: subMenuRefs.current[key]?.scrollHeight || 0,
				}));
			}
		}
	}, [openSubmenu]);

	const handleSubmenuToggle = (index) => {
		setOpenSubmenu((prevOpenSubmenu) =>
			prevOpenSubmenu?.index === index ? null : { type: "main", index }
		);
	};

	const renderMenuItems = (items) => (
		<ul className="flex flex-col gap-3">
			{items.map((nav, index) => (
				<li key={nav.name}>
					{nav.subItems ? (
						<button
							onClick={() => handleSubmenuToggle(index)}
							className={`menu-item group ${openSubmenu?.index === index ? "menu-item-active" : "menu-item-inactive"} cursor-pointer ${!isExpanded && !isHovered ? "lg:justify-center" : "lg:justify-start"}`}
						>
							<span className={`size-5 ${openSubmenu?.index === index ? "menu-item-icon-active" : "menu-item-icon-inactive"}`}>
								{nav.icon}
							</span>
							{(isExpanded || isHovered || isMobileOpen) && (
								<span className="menu-item-text">{nav.name}</span>
							)}
							{(isExpanded || isHovered || isMobileOpen) && (
								<ChevronDownIcon className={`ml-auto w-5 h-5 transition-transform duration-200 ${openSubmenu?.index === index ? "rotate-180 text-brand-500" : ""}`} />
							)}
						</button>
					) : (
						<Link to={nav.path} className={`menu-item group ${isActive(nav.path) ? "menu-item-active" : "menu-item-inactive"}`}>
							<span className={`size-5 ${isActive(nav.path) ? "menu-item-icon-active" : "menu-item-icon-inactive"}`}>
								{nav.icon}
							</span>
							{(isExpanded || isHovered || isMobileOpen) && (
								<span className="menu-item-text">{nav.name}</span>
							)}
						</Link>
					)}
					{nav.subItems && (isExpanded || isHovered || isMobileOpen) && (
						<div
							ref={(el) => {
								subMenuRefs.current[`main-${index}`] = el;
							}}
							className="overflow-hidden transition-all duration-300"
							style={{
								height: openSubmenu?.index === index ? `${subMenuHeight[`main-${index}`]}px` : "0px",
							}}
						>
							<ul className="mt-2 space-y-1 ml-9">
								{nav.subItems.map((subItem) => (
									<li key={subItem.name}>
										<Link to={subItem.path} className={`menu-dropdown-item ${isActive(subItem.path) ? "menu-dropdown-item-active" : "menu-dropdown-item-inactive"}`}>
											{subItem.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
					)}
				</li>
			))}
		</ul>
	);

	return (
		<aside
			className={`fixed mt-16 flex flex-col text-sm lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-300 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
			${isExpanded || isMobileOpen ? "w-[290px]" : isHovered ? "w-[290px]" : "w-[90px]"} ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
			onMouseEnter={() => !isExpanded && setIsHovered(false)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className={`pt-4 pb-8 flex ${!isExpanded && !isHovered ? "lg:justify-center" : "justify-start"}`}>
				<Link to="/dashboard" className="flex items-center gap-x-2">
					{isExpanded || isHovered || isMobileOpen ? (
						<>
							<Logo />
						</>
					) : (
						<Logo />
					)}
				</Link>
			</div>

			<div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
				<nav className="mb-6">
					<div className="flex flex-col gap-4">
						<div>
							<p className={`mb-4 text-sm uppercase flex leading-[20px] text-gray-400 ${!isExpanded && !isHovered ? "lg:justify-center" : "justify-start"}`}>
								{isExpanded || isHovered || isMobileOpen ? "Menu" : <EllipsisHorizontalIcon className="size-6" />}
							</p>
							{renderMenuItems(navItems)}
						</div>
					</div>
				</nav>
			</div>
		</aside>
	);
}

export default DashboardSidebar;