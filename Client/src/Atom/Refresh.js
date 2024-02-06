import axios from "axios";

// Export a function instead of a constant
export const refresh = async () => {
	try {
		const response = await axios.post(
			"http://localhost:4000/user/refresh",
			{
				email: localStorage.getItem("email"),
			},
			{
				headers: {
					Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
				},
			}
		);

		// Update the way you handle the response and set the new token
		console.log("Refresh successful");
		localStorage.setItem("jwtToken", response.data.accessToken);
		return response.data.accessToken;
	} catch (error) {
		// Handle errors here
		console.error("Refresh failed", error);
		throw error; // Re-throw the error to be handled where refresh is called
	}
};
