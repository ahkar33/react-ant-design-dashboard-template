import { Form, Button as AntButton } from "antd";
import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 30px;
	align-items: center;
	height: 100vh;
	background-repeat: no-repeat;
	background-size: cover;
`;

export const LoginForm = styled(Form)`
	padding: 20px;
	margin-bottom: 180px;
	border: 1px solid #eaeaea;
	border-radius: 8px;
	background: #fff;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
	width: 300px;
	text-align: center;
	animation: fadeIn 0.5s;

	@keyframes fadeIn {
		0% {
			opacity: 0;
			transform: translateY(-20px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}
`;

export const LoginTitle = styled.h2`
	font-size: 1.5rem;
	color: #4d24a9;
`;

export const Button = styled(AntButton)`
	width: 100%;
	&&& {
		background-color: #4d24a9;
		color: white;
		border: none;

		&:hover {
			border: none;
			color: white;
			background-color: #4d24a9;
		}
	}
`;
