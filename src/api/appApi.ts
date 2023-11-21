import { BASE_URL, SECRET_KEY } from "@/constants";
import axios from "axios";
import { AES, enc } from "crypto-js";

interface Auth {
	state?: {
		token?: string;
	};
}

const decryptData = (encryptedData: string) => {
	const decryptedData = AES.decrypt(encryptedData, SECRET_KEY).toString(
		enc.Utf8
	);
	return JSON.parse(decryptedData);
};

// Create an Axios instance with the base URL
const appApi = axios.create({
	baseURL: BASE_URL,
});

// Add a request interceptor to set headers
appApi.interceptors.request.use(
	(config: any) => {
		// Modify Axios's config headers
		config.headers = {
			...config.headers,
			Accept: "application/json",
			"Content-Type": config.headers["Content-Type"] || "application/json",
		};

		// Get the Bearer token from local storage and set the Authorization header
		const auth = JSON.parse(localStorage.getItem("auth") || "") as Auth;

		if (auth && auth.state && auth.state.token) {
			config.headers.Authorization = `Bearer ${decryptData(auth.state.token)}`;
		}

		return config;
	},
	(error) => {
		console.log(error);
		return Promise.reject(error);
	}
);

// Add a response interceptor to handle errors
appApi.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		let errorMessage = "";
		if (error.response?.data?.error) {
			errorMessage = error.response.data.error[0];
		} else {
			errorMessage = error.message;
		}
		return Promise.reject(errorMessage);
	}
);

export default appApi;
