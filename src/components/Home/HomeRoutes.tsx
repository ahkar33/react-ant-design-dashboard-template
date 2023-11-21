import { PRIVATE_ROUTES } from "@/routes/route.constant";
import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const { DASHBOARD } = PRIVATE_ROUTES;
const privateRoutes = [
	{
		path: `/${DASHBOARD}`,
		component: lazy(() => import("@/pages/Dashboard/Dashboard")),
	},
];

const HomeRoutes = () => {
	return (
		<>
			<Routes>
				{privateRoutes?.map((route, idx) => (
					<Route
						key={idx}
						path={`${route.path}/*`}
						element={<route.component />}
					/>
				))}
				<Route path="*" element={<Navigate to={`/${DASHBOARD}`} />} />
			</Routes>
		</>
	);
};

export default HomeRoutes;
