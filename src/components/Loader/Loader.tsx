import { Spin } from "antd";
import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;

const Loader = () => {
	return (
		<Wrapper>
			<Spin size="large" />
		</Wrapper>
	);
};

export default Loader;
