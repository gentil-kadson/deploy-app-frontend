function getMessages() {
  fetch("http://localhost:3000/api/get-messages").then((response) =>
    response.json().then((json) => {
      console.log(json);
    })
  );
}
