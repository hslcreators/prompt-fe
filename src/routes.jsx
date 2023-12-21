import { createBrowserRouter } from "react-router-dom";
import Home from "@pages/Home";
import VendorsPage from "@pages/vendorsPage";
import UsersDashboards from "@pages/usersDashboard";

const router = createBrowserRouter([
	{
		path: "/", // Root Route
		element: <Home />,
	},
	{
		path: "/VendorsPage", // Vendors Page
		element: <VendorsPage />,
	},
	{
		path: "/UsersDahboard", // Root Route
		element: <UsersDashboards />,
	},
]);

export default router;
