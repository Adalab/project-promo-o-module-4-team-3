const postToApi = (userData) => {
  return fetch("https://localhost:4000/card/:cardId", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .catch((error) => console.log("Error:", error));
};
export default postToApi;
