import { SidebarProvider, useSidebar } from "../../context/SidebarContext";
import { Outlet } from "react-router-dom";
import Backdrop from "./Backdrop";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";

function DashboardContent() {
	const { isExpanded, isHovered, isMobileOpen } = useSidebar();

	return (
		<div className="min-h-screen xl:flex">
			<div>
				<DashboardSidebar />
				<Backdrop />
			</div>
			<div className={`flex-1 transition-all duration-300 ease-in-out ${isExpanded || isHovered ? "lg:ml-[290px]" : "lg:ml-[90px]"} ${isMobileOpen ? "ml-0" : ""}`} >
				<DashboardHeader />
				<div className="p-4 mx-auto max-w-[1536px] md:p-5">
					<Outlet />
				</div>
			</div>
		</div>
	);
}

function DashboardLayout() {
	return (
		<SidebarProvider>
			<DashboardContent />
		</SidebarProvider>
	);
}

export default DashboardLayout;