fetch("http://localhost:3000/api/images").then((response) =>
  response.json().then((json) => {
    console.log(json);

    const section = document.querySelector("section");

    json.awsRealImages.forEach((elem, index) => {
      const figure = document.createElement("figure");
      const imageTag = document.createElement("img");
      const figCaption = document.createElement("figcaption");

      imageTag.setAttribute("src", json.awsRealImages[index]);
      imageTag.style.width = "300px";
      imageTag.style.height = "300px";
      figCaption.innerHTML = json.bdObjects[index].title;

      figure.appendChild(imageTag);
      figure.appendChild(figCaption);
      section.appendChild(figure);
    });
  })
);
