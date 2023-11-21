import ConfirmModal from "../ConfirmModal/ConfirmModal";
import { useState } from "react";
import { LOGOUT_CONFIRM } from "@/constants";
import { HeaderContainer, AdminIdText, LogoutIcon } from "./Navbar.style";
import { Space } from "antd";
import { useUser } from "@/store";
import { LOGO } from "@/assets";

const Navbar = () => {
	const admin_id = useUser((state) => state.admin_id);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const logout = async () => {
		localStorage.removeItem("auth");
		window.location.reload();
	};

	return (
		<>
			<HeaderContainer>
				<img src={LOGO} alt="logo" height={50} width={170} />
				<Space>
					<AdminIdText>{admin_id}</AdminIdText>
					<LogoutIcon
						style={{
							cursor: "pointer",
							color: "white",
						}}
						onClick={() => setIsModalOpen(true)}
					/>
				</Space>
			</HeaderContainer>
			<ConfirmModal
				onOk={logout}
				open={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				confirmMessage={LOGOUT_CONFIRM}
			/>
		</>
	);
};

export default Navbar;
