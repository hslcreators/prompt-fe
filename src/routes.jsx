import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
// import Home from "@pages/home";
// import FileUpload from "@pages/fileUpload";
// import Login from "@pages/login";
// import SignUp from "@pages/signup";
// import CreatePassword from "@pages/createPassword";
// import ForgotPassword from "@pages/forgotPassword";
// import VerifyCode from "@pages/verifyCode";
// import VendorsPage from "@pages/vendorsPage";
// import UsersDashboards from "@pages/usersDashboard";
// import VendorsProfile from "@pages/vendorsProfile";
// import SettingsPage from "@pages/SettingsPage";
// import PersonalDetailsPage from "./pages/personalDetails";
// import VendorSignUpPage from "./pages/VendorSignUpPage";
// import ContactUs from "./pages/emailjs";
import AuthRoute from "./AuthRoute";
import Progress from "./components/Progress/Progress";
// import UserActivityPage from "./pages/activity";
// import SearchPage from "./pages/search";

const Home = lazy(() => import('@pages/home'))
const FileUpload = lazy(() => import('@pages/fileUpload'))
const Login = lazy(() => import('@pages/login'))
const SignUp = lazy(() => import('@pages/signup'))
const CreatePassword = lazy(() => import('@pages/createPassword'))
const ForgotPassword = lazy(() => import('@pages/forgotPassword'))
const VerifyCode = lazy(() => import('@pages/verifyCode'))
const VendorsPage = lazy(() => import('@pages/vendorsPage'))
const UsersDashboards = lazy(() => import('@pages/usersDashboard'))
const VendorsProfile = lazy(() => import('@pages/vendorsProfile'))
const SettingsPage = lazy(() => import('@pages/SettingsPage'))
const PersonalDetailsPage = lazy(() => import('@pages/personalDetails'))
const VendorSignUpPage = lazy(() => import('@pages/VendorSignUpPage'))
const UserActivityPage = lazy(() => import('@pages/activity'))
const SearchPage = lazy(() => import('@pages/search'))



const router = createBrowserRouter([
	// {
	// 	path: "/", // Root Route
	// 	element: (
	// 		<AuthRoute>
	// 			 <Suspense fallback={
	// 				<div>
	// 					<Progress sus = { true }/>
	// 			 	</div>
	// 			}>
	// 			 	<Home />	
	// 			 </Suspense>
	// 		</AuthRoute>
	// 	),
	// },
	{
		path: "/", // Root Route
		element: (
			<AuthRoute>
				<Suspense fallback={
					<div>
						<Progress sus = { true }/>
				 	</div>
				}>
					<UsersDashboards />
				</Suspense>
			</AuthRoute>
		),
	},
	{
		path: "/file-upload/:vendor_id", // File Upload Route
		element: (
			<AuthRoute>
				<Suspense fallback={
					<div>
						<Progress sus = { true }/>
				 	</div>
				}>
				 	<FileUpload />
				 </Suspense>
			</AuthRoute>
		),
	},
	{
		path: "/login",
		element:  (
			<Suspense fallback={
					<div>
						<Progress sus = { true }/>
				 	</div>
				}>
				<Login />
			</Suspense>
		),
	},
	{
		path: "/signup",
		element: (
			<Suspense fallback={
					<div>
						<Progress sus = { true }/>
				 	</div>
				}>
				<SignUp/>
			</Suspense>
		),
	},
	{
		path: "/forgotpassword",
		element: (
			<Suspense fallback={
					<div>
						<Progress sus = { true }/>
				 	</div>
				}>
				<ForgotPassword />
			</Suspense>
		),
	},
	{
		path: "/createpassword",
		element: (
			<Suspense fallback={
					<div>
						<Progress sus = { true }/>
				 	</div>
				}>
				<CreatePassword />
			</Suspense>
		),
	},
	{
		path: "/personaldetails",
		element: (
			<Suspense fallback={
					<div>
						<Progress sus = { true }/>
				 	</div>
				}>
				<PersonalDetailsPage />
			</Suspense>
		),
	},
	{
		path: "/verify",
		element: (
			<Suspense fallback={
					<div>
						<Progress sus = { true }/>
				 	</div>
				}>
				<VerifyCode />
			</Suspense>
		),
	},
	{
		path: "/vendorsignup",
		element: (
			<Suspense fallback={
					<div>
						<Progress sus = { true }/>
				 	</div>
				}>
				<VendorSignUpPage />
			</Suspense>
		),
	},
	{
		path: "/vendors", // Vendors Page
		element: (
			<AuthRoute>
				<Suspense fallback={
					<div>
						<Progress sus = { true }/>
				 	</div>
				}>
					<VendorsPage />
				</Suspense>
			</AuthRoute>
		),
	},
	{
		path: "/search", // Vendors Page
		element: (
			<AuthRoute>
				<Suspense fallback={
					<div>
						<Progress sus = { true }/>
				 	</div>
				}>
					<SearchPage />
				</Suspense>
			</AuthRoute>
		),
	},
	{
		path: "/user-dashboard", // Users Dashboard Page
		element: (
			<AuthRoute>
				<Suspense fallback={
					<div>
						<Progress sus = { true }/>
				 	</div>
				}>
					<UsersDashboards />
				</Suspense>
			</AuthRoute>
		),
	},
	{
		path: "/vendor-profile/:id", // Vendors Profile Page
		element: (
			<AuthRoute>
				<Suspense fallback={
					<div>
						<Progress sus = { true }/>
				 	</div>
				}>
					<VendorsProfile />
				</Suspense>
			</AuthRoute>
		),
	},
	{
		path: "/settings", //  Settings Page
		element: (
			<AuthRoute>
				<Suspense fallback={
					<div>
						<Progress sus = { true }/>
				 	</div>
				}>
					<SettingsPage />
				</Suspense>
			</AuthRoute>
		),
	},
	{
		path: "/activity", //  Settings Page
		element: (
			<AuthRoute>
				<Suspense fallback={
					<div>
						<Progress sus = { true }/>
				 	</div>
				}>
					<UserActivityPage />
				</Suspense>
			</AuthRoute>
		),
	},
	// {
	// 	path: "/emTEst", //  Settings Page
	// 	element: <ContactUs />,
	// },
]);

export default router;
