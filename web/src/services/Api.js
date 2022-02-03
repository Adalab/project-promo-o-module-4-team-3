const postToApi = (userData) => {
	return fetch("//localhost:4000/card", {
		method: "POST",
		body: JSON.stringify(userData),
		headers: { "Content-Type": "application/json" },
	})
		.then((response) => response.json())
		.catch((error) => console.log("Error:", error));
};
export default postToApi;
