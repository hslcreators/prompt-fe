import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import LogoutWindow from "./components/LogoutWindow";
import Progress from "./components/Progress/Progress";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
	<QueryClientProvider client={queryClient}>
		<RouterProvider router={router} />
		<ToastContainer />
		<Progress />
		<LogoutWindow />
	</QueryClientProvider>
);
