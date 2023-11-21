import styled from "styled-components";
import { Layout, Menu } from "antd";

const { Sider } = Layout;

export const StyledSider = styled(Sider)`
	/* background-color: #001529; */
	background: linear-gradient(135deg, #531ead, #244e90);
	color: #fff;
	height: calc(100vh - 60px);
`;

export const StyledMenu = styled(Menu)`
  position: relative;
  height: 100%;
  background: linear-gradient(135deg, #531ead, #244e90);
  color: #fff;
  .ant-menu-item {
    padding: 0;
    padding-left: 28px;
    display: flex;
    align-items: center;
  }
  .ant-menu-item:not(.ant-menu-item-selected):hover {
    background-color: #3a8ce9 !important; 
    color: #ccc !important;
  }
  .ant-menu-item-selected {
    background-color: #1890ff; /* Change selected color */
    color: #fff;
  }
`;


export const CloseButton = styled.div`
	padding: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	background: linear-gradient(135deg, #531ead, #244e90);
	/* background-color: #001529; */
	color: #fff;
	border-top: 1px solid #003a8c;
	&:hover {
		background-color: #002140;
	}
`;

