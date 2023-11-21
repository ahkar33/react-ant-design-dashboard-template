import { useNavigate } from "react-router-dom";
import {
	CloseOutlined,
	RightOutlined,
	BarChartOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { CloseButton, StyledMenu, StyledSider } from "./Sidebar.style";
import { PRIVATE_ROUTES } from "@/routes/route.constant";
import { MenuItemType } from "antd/es/menu/hooks/useItems";

const { DASHBOARD } = PRIVATE_ROUTES;

export const menuItems: MenuItemType[] = [
	{
		label: "Dashboard",
		key: `/${DASHBOARD}`,
		icon: <BarChartOutlined />,
	},
	// {
	// 	label: "Employee",
	// 	key: PRIVATE_ROUTES.EMPLOYEE,
	// 	icon: <UserOutlined />,
	// 	children: [
	// 		{ label: "Submenu Item 1", key: "hello" },
	// 		{ label: "Submenu Item 2", key: "world" },
	// 	],
	// },
];

const Sidebar = () => {
	const navigate = useNavigate();

	const [collapsed, setCollapsed] = useState(false);

	const toggleSider = () => {
		setCollapsed(!collapsed);
	};

	useEffect(() => {
		const handleWindowResize = () => {
			if (window.innerWidth < 768) {
				setCollapsed(true);
			} else {
				setCollapsed(false);
			}
		};

		handleWindowResize();
		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);

	const handleClick = ({ key }: { key: string }) => {
		navigate(key);
	};

	const defaultSelect =
		window.location.pathname === `/${DASHBOARD}`
			? `/${DASHBOARD}`
			: window.location.pathname;

	return (
		<>
			<StyledSider width={200} collapsed={collapsed}>
				<StyledMenu
					onClick={handleClick}
					defaultSelectedKeys={[defaultSelect]}
					items={menuItems}
					mode="inline"
				/>
				<CloseButton
					style={{
						position: "absolute",
						bottom: 0,
						width: "100%",
					}}
					onClick={toggleSider}
				>
					{collapsed ? <RightOutlined /> : <CloseOutlined />}
				</CloseButton>
			</StyledSider>
		</>
	);
};

export default Sidebar;
