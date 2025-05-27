import DashboardLayout from "../layouts/Dashboard/DashboardLayout";
import Dashboard from "../pages/Dashboard/Home";

const DashboardRoutes = {
	path: "/",
	element: <DashboardLayout />,
	children: [
		{
			path: "dashboard",
			element: <Dashboard />,
		},
	],
};

export default DashboardRoutes;