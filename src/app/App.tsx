import AppRoutes from "@/routes/AppRoutes";
import { QueryClient, QueryClientProvider } from "react-query";

const App = () => {
	const queryClient = new QueryClient();
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<AppRoutes />
			</QueryClientProvider>
		</>
	);
};

export default App;
