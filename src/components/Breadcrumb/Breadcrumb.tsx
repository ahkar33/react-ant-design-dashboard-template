import { useLocation } from "react-router-dom";
import { StyledBreadcrumb, TitleIconWrapper } from "./Breadcrumb.style";
import { MenuItemType } from "antd/es/menu/hooks/useItems";

type BreadcrumbProps = {
	menuItems: MenuItemType[];
};

const CustomBreadcrumb = ({ menuItems }: BreadcrumbProps) => {
	const location = useLocation();
	const pathnames = location.pathname.split("/").filter((x) => x);

	// Find the matching menu item for the current route
	const currentMenuItem = menuItems?.find(
		(item) => item.key === `/${pathnames.join("/")}`
	);

	const breadcrumbItems = [
		{
			title: (
				<>
					<TitleIconWrapper>
						<span>{currentMenuItem?.icon}</span>
						<span>{currentMenuItem?.label}</span>
					</TitleIconWrapper>
				</>
			),
			key: "home",
		},
	];

	return (
		<StyledBreadcrumb items={breadcrumbItems} />
	);
};

export default CustomBreadcrumb;
