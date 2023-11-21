import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { PRIVATE_ROUTES, PUBLIC_ROUTE } from "./route.constant";
import ErrorBoundary from "./ErrorBoundary";
import PrivateRoute from "./PrivateRoute";
import { Loader } from "@/components";
import Home from "@/components/Home/Home";

const { LANDING, LOGIN } = PUBLIC_ROUTE;
const { DASHBOARD } = PRIVATE_ROUTES;

const publicRoutes = [
	{
		path: LANDING,
		component: lazy(() => import("@/pages/Login/Login")),
	},
	{
		path: LOGIN,
		component: lazy(() => import("@/pages/Login/Login")),
	},
];

const AppRoutes = () => {
	return (
		<ErrorBoundary>
			<Suspense fallback={<Loader />}>
				<>
					<Routes>
						{publicRoutes.map((route, index) => (
							<Route
								key={index}
								path={route.path}
								element={<route.component />}
							/>
						))}
						<Route
							path={`/${DASHBOARD}/*`}
							element={
								<PrivateRoute>
									<Home />
								</PrivateRoute>
							}
						/>
					</Routes>
				</>
			</Suspense>
		</ErrorBoundary>
	);
};

export default AppRoutes;
