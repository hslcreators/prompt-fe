import { createBrowserRouter } from "react-router-dom";
import Home from "@pages/Home";
import FileUpload from "@pages/fileUpload";
import Login from "@pages/Login";
import SignUp from "@pages/signup";
import CreatePassword from "@pages/createPassword";
import ForgotPassword from "@pages/forgotPassword";
import VerifyCode from "@pages/verifyCode";
import VendorsPage from "@pages/vendorsPage";
import UsersDashboards from "@pages/usersDashboard";
import VendorsProfile from "@pages/vendorsProfile";

const router = createBrowserRouter([
	{
		path: "/", // Root Route
		element: <Home />,
	},
	{
		path: "/file-upload", // File Upload Route
		element: <FileUpload />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/signup",
		element: <SignUp />,
	},
	{
		path: "/forgotpassword",
		element: <ForgotPassword />,
	},
	{
		path: "/createpassword",
		element: <CreatePassword />,
	},
	{
		path: "/verify",
		element: <VerifyCode />,
	},
	{
		path: "/vendors", // Vendors Page
		element: <VendorsPage />,
	},
	{
		path: "/user-dashboard", // Users Dashboard Page
		element: <UsersDashboards />,
	},
	{
		path: "/vendor-profile", // Vendors Profile Page
		element: <VendorsProfile />,
	},
]);

export default router;
