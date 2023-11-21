import { Layout } from "antd";
import HomeRoutes from "./HomeRoutes";
import Sidebar, { menuItems } from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

const { Content } = Layout;

const Home = () => {
	return (
		<>
			<Navbar />
			<Layout style={{ maxHeight: "calc(100vh - 60px)" }}>
				<Sidebar />
				<Layout>
					<Breadcrumb menuItems={menuItems} />
					<Content style={{ overflowY: "auto" }}>
						<HomeRoutes />
					</Content>
				</Layout>
			</Layout>
		</>
	);
};

export default Home;
