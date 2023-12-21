import { createBrowserRouter } from "react-router-dom";
import Home from "@pages/Home";
import Notification from "@components/UserDashboard/Notifications";
import Transaction from "@components/UserDashboard/Transaction";

const router = createBrowserRouter([
	{
		path: "/", // Root Route
		element: <Home />,
	},
	{
		path: "/notifications", // Root Route
		element: <Notification />,
	},
	{
		path: "/transaction",
		element: <Transaction />,
	},
]);

export default router;
