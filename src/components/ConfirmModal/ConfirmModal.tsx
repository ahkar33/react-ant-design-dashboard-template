import { Modal as AntModal, Button } from "antd";
import styled from "styled-components";

const Modal = styled(AntModal)`
	width: 300px !important;

	.ant-modal-body {
		text-align: center;
		padding: 20px;
	}

	.ant-modal-footer {
		text-align: center;

		button {
			width: 73px;
		}
	}
`;

interface ConfirmModalPropsType {
	confirmMessage: string;
	onOk: () => void;
	open: boolean;
	onClose: () => void;
	isLoading?: boolean;
}

const ConfirmModal = ({
	confirmMessage,
	onOk,
	open,
	onClose,
	isLoading,
}: ConfirmModalPropsType) => {
	return (
		<Modal
			open={open}
			onOk={onOk}
			onCancel={onClose}
			okText="Yes"
			cancelText="Cancel"
			closable={false}
			maskClosable={false}
			footer={[
				<Button key="back" onClick={onClose}>
					Cancel
				</Button>,
				<Button
					loading={isLoading}
					key="submit"
					type="primary"
					danger
					onClick={onOk}
				>
					Yes
				</Button>,
			]}
		>
			<p>{confirmMessage}</p>
		</Modal>
	);
};

export default ConfirmModal;
