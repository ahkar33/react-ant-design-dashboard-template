import { Button, Space, Upload as AntUpload, Modal as AntModal } from "antd";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
`;

export const RootContainer = styled(Space).attrs({
	direction: "vertical",
	size: "middle",
})`
	width: 100%;
	height: 100%;
	padding: 12px;
`;

export const Actions = styled(Space)`
	.ant-btn {
		min-width: 60px;
	}
`;

export const CreateButton = styled(Button)``;

export const DetailsButton = styled(Button)`
	&&& {
		background-color: #00b3bc;
		color: white;
		border: none;

		&:hover {
			border: none;
			color: white;
			background-color: #66c9d0;
		}
	}
`;

export const UpdateButton = styled(Button)`
	&&& {
		background-color: #34a835;
		color: white;
		border: none;

		&:hover {
			border: none;
			color: white;
			background-color: #68c968;
		}
	}
`;

export const DeleteButton = styled(Button)`
	&&& {
		background-color: #ff4d4f;
		color: white;
		border: none;

		&:hover {
			border: none;
			color: white;
			background-color: #ff8c8e;
		}
	}
`;

interface UploadProps {
	required?: boolean;
}

export const Upload = styled(AntUpload)<UploadProps>`
	.ant-upload-list-item-actions > a {
		display: none;
	}

	.ant-upload-select {
		width: 100% !important;
		height: 200px !important;
		border: ${(props) =>
			props.required
				? "1px dashed red !important"
				: "1px dashed #d9d9d9 !important"};
	}

	.ant-upload-list-item-container {
		width: 100% !important;
		height: 200px !important;

		img {
			object-fit: cover !important;
		}
	}
`;

export const CreateUpdateStyledModal = styled(AntModal)`
	.ant-modal-title,
	.ant-modal-footer {
		text-align: center;
	}

	.ant-space {
		width: 100%;
		justify-content: center;
	}
`;
