import { Form, Input, message } from "antd";
import { Container, LoginForm, LoginTitle, Button } from "./Login.style";
import { useUser } from "@/store";
import { Navigate, useNavigate } from "react-router-dom";
import { PRIVATE_ROUTES } from "@/routes/route.constant";
import { AccountApi } from "@/api";
import { useState } from "react";
import { AES } from "crypto-js";
import { SECRET_KEY } from "@/constants";

const { DASHBOARD } = PRIVATE_ROUTES;

const Login = () => {
	const navigate = useNavigate();
	const { addUser, token: isLoggedIn } = useUser((state) => ({
		addUser: state.addUser,
		token: state.token,
	}));
	const [isLoading, setIsLoading] = useState(false);

	if (isLoggedIn) {
		return <Navigate to={`/${DASHBOARD}`} />;
	}

	const onFinish = async (values: any) => {
		try {
			setIsLoading(true);
			const {
				data: { admin, token },
			} = await AccountApi.login({
				admin_id: values.admin_id,
				password: values.password,
			});
			const encrypted_token = AES.encrypt(
				JSON.stringify(token),
				SECRET_KEY
			).toString();
			addUser({ admin_id: admin.admin_id, token: encrypted_token });
			navigate(`/${DASHBOARD}`);
			message.success("Login Successful");
		} catch (error) {
			message.error(error as string);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Container>
			<LoginForm
				onFinish={onFinish}
				// initialValues={{ admin_id: "", password: "" }}
			>
				<LoginTitle>Login</LoginTitle>
				<Form.Item
					name="admin_id"
					rules={[{ required: true, message: "Please enter your Admin ID" }]}
				>
					<Input placeholder="Admin ID" autoComplete="username" />
				</Form.Item>
				<Form.Item
					name="password"
					rules={[{ required: true, message: "Please enter your password" }]}
				>
					<Input.Password
						placeholder="Password"
						autoComplete="current-password"
					/>
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit" loading={isLoading}>
						Login
					</Button>
				</Form.Item>
			</LoginForm>
		</Container>
	);
};

export default Login;
