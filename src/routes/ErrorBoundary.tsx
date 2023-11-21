import { Component, ReactNode } from "react";
import { Page500 } from "@/pages";

type GlobalErrorBoundaryProps = {
	children: ReactNode;
};

type GlobalErrorBoundaryState = {
	hasError: boolean;
};

class GlobalErrorBoundary extends Component<
	GlobalErrorBoundaryProps,
	GlobalErrorBoundaryState
> {
	constructor(props: GlobalErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) {
			return <Page500 />;
		}
		return this.props.children;
	}
}

export default GlobalErrorBoundary;
