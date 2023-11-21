import { LogoutOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { Typography } from "antd";

const { Paragraph } = Typography;

export const LogoutIcon = styled(LogoutOutlined)`
	cursor: pointer;
	transition: transform 0.2s ease-in-out;

	&:hover {
		transform: scale(1.2);
	}
`;

export const HeaderContainer = styled.header`
	height: 60px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	background: linear-gradient(135deg, #531ead, #244e90);
	/* background-color: #001326; */
	/* background-color: #00172c; */
`;

export const AdminIdText = styled(Paragraph)`
	margin-top: 15px;
	font-weight: bold;
	color: white !important;
`;
