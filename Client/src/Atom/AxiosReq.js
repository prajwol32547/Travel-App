import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { refresh } from "./Refresh";

const intercept = Axios.create({
	withCredentials: true,
});

intercept.interceptors.request.use(
	async function (config) {
		const authToken = localStorage.getItem("jwtToken");
		console.log(`Bearer ${authToken}`);

		if (authToken) {
			config.headers = {
				...config.headers,
				Authorization: `Bearer ${authToken}`,
			};
		} else {
			useNavigate()("/login");
		}

		return config; // Return the modified config for the request
	},
	function (error) {
		return Promise.reject(error);
	}
);

const responseIntercept = intercept.interceptors.response.use(
	(response) => response,
	async (error) => {
		const prevRequest = error?.config;
		if (error?.response?.status === 403 && !prevRequest?.sent) {
			try {
				// await refresh();
				// Retry the original request after successful refresh
				return Axios(prevRequest);
			} catch (refreshError) {
				console.error("Refresh failed", refreshError);
				// Redirect to the login page

				if (Promise.reject(refreshError)) {
					// window.location.replace("http://localhost:3000/login");
				}
			}
		}
		return Promise.reject(error);
	}
);

// Correct the usage of intercept.post and intercept.get
export const postRequest = async (api, data) => {
	try {
		const res = await intercept.post(api, data);
		return res.data;
	} catch (error) {
		console.error("Post request failed", error);
		throw error;
	}
};

export const getRequest = async (api) => {
	try {
		const res = await intercept.get(api);
		return res.data;
	} catch (error) {
		console.error("Get request failed", error);
		throw error;
	}
};
