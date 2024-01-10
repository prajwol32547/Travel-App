import Axios from "axios";
import { useNavigate } from "react-router-dom";
const intercept = Axios.create();
intercept.interceptors.request.use(function (config) {
	const Navigate = useNavigate();
	const authToken = localStorage.getItem("jwtToken");
	intercept.headers.Authorization = `Bearer ${authToken}`;
	if (!authToken == null) {
		return intercept;
	} else {
		Navigate("/login");
	}
});
export const postRequest = (api, data) => {
	intercept.post(api, { data }).then((res) => {
		return res;
	});
};
export const getRequest = (api) => {
	intercept.get(api).then((res) => {
		return res;
	});
};
