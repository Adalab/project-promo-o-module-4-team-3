const postToApi = (userData) => {
	return fetch("https://awesome-profile-cards.herokuapp.com/card", {
		method: "POST",
		body: JSON.stringify(userData),
		headers: { "Content-Type": "application/json" },
	}).then((response) => response.json());
};
export default postToApi;
