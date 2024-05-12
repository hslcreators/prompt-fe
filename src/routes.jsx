import { createBrowserRouter } from "react-router-dom";
import Home from "@pages/home";
import FileUpload from "@pages/fileUpload";
import Login from "@pages/login";
import SignUp from "@pages/signup";
import CreatePassword from "@pages/createPassword";
import ForgotPassword from "@pages/forgotPassword";
import VerifyCode from "@pages/verifyCode";
import VendorsPage from "@pages/vendorsPage";
import UsersDashboards from "@pages/usersDashboard";
import VendorsProfile from "@pages/vendorsProfile";
import SettingsPage from "@pages/SettingsPage";
import PersonalDetailsPage from "./pages/personalDetails";

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
		path: "/personaldetails",
		element: <PersonalDetailsPage />,
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
	{
		path: "/settings", //  Settings Page
		element: <SettingsPage />,
	},
]);

export default router;
