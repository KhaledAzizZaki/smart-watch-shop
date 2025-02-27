let ringButton = document.querySelectorAll(".ring-button");

for (let i of ringButton) {
  i.addEventListener("click", function (event) {
    // Remove purple color
    for (let j of ringButton) {
      j.classList.remove("border-purple-600");
      j.classList.add("border-gray-300");
    }
    // Add purple color
    event.target.classList.add("border-purple-600");
    event.target.classList.remove("border-gray-300");
    // Select color for image
    let color = event.target.id.replace("-color", "");
    // Select image
    let imageBase = document.getElementById("product-image");
    imageBase.src = `../images/${color}.png`;
    console.log(imageBase.src);
  });
}
