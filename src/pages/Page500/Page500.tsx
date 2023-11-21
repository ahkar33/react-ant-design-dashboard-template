import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import { PRIVATE_ROUTES } from "@/routes/route.constant";

const { DASHBOARD } = PRIVATE_ROUTES;

const Page500: React.FC = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`/${DASHBOARD}`);
		location.reload();
	};

	return (
		<Result
			status="500"
			title="500"
			subTitle="Sorry, something went wrong."
			extra={
				<Button onClick={handleClick} type="primary">
					Back Home
				</Button>
			}
		/>
	);
};

export default Page500;
