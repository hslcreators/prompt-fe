import { createBrowserRouter } from "react-router-dom";
import Home from "@pages/Home";
import Login from "@pages/Login";
import SignUp from "@pages/signup";
import CreatePassword from "@pages/createPassword";
import ForgotPassword from "@pages/forgotPassword";
import VerifyCode from "@pages/verifyCode";
import PersonalDetailsPage from "@pages/personalDetails";

const router = createBrowserRouter([
	{
		path: "/", // Root Route
		element: <Home />,
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
		path: "/personaldetails",
		element: <PersonalDetailsPage />,
	},
	{
		path: "/createpassword",
		element: <CreatePassword />,
	},
	{
		path: "/verify",
		element: <VerifyCode />,
	},
]);

export default router;
