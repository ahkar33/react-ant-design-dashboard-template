import { Navigate } from "react-router-dom";
import { PUBLIC_ROUTE } from "./route.constant";
import { useUser } from "@/store";

type PrivateRouteProps = {
	children: JSX.Element; 
};

const PrivateRoute = ({ children } : PrivateRouteProps) => {
	const isLoggedIn = useUser((state) => state.token);

	if (!isLoggedIn) {
		return <Navigate to={PUBLIC_ROUTE.LOGIN} replace={true} />;
	}

	return children;
};

export default PrivateRoute;
