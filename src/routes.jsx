import { createBrowserRouter } from "react-router-dom";
import Home from "@pages/Home";
import VendorsPage from "@pages/vendorsPage";
import UsersDashboards from "@pages/usersDashboard";
import VendorsProfile from "@pages/vendorsProfile";

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
		path: "/UsersDahboard", // Users Dashboard Page
		element: <UsersDashboards />,
	},
	{
		path: "/VendorsProfile", // Vendors Profile Page
		element: <VendorsProfile />,
	},
]);

export default router;
