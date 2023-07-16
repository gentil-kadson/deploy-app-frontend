function getMessages() {
  fetch("http://localhost:3000/api/get-messages").then((response) =>
    response.json().then((json) => {
      const messsagesSection = document.getElementById("messages");
      messsagesSection.innerHTML = "";
      for (messageObj of json.Messages) {
        const span = document.createElement("span");
        span.innerText = messageObj.Body;
        messsagesSection.appendChild(span);
      }
    })
  );
}
