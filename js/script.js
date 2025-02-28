// Band color
let color = "purple";
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
    color = event.target.id.replace("-color", "");
    // Select image
    let imageBase = document.getElementById("product-image");
    imageBase.src = `../images/${color}.png`;
    console.log(imageBase.src);
  });
}

// Wrist size
let size = "";
let price = "";
let sizeBtn = document.querySelectorAll(".size-btn");
for (let i of sizeBtn) {
  i.addEventListener("click", function (event) {
    // Remove color
    for (let j of sizeBtn) {
      j.classList.remove("border-purple-600");
    }
    // Add color
    event.target.classList.add("border-purple-600");
    price = parseInt(event.target.innerText.split("$")[1]);
    size = event.target.innerText.split("$")[0].trim();
    console.log(size);
  });
}

// Quantity
let quantityButton = document.querySelectorAll(".quantity-button");
let sum = 0;
for (let i of quantityButton) {
  i.addEventListener("click", function (event) {
    if (event.target.innerText == "+") {
      sum += 1;
      document.getElementById("quantity").innerText = sum;
    } else {
      sum = Math.max(0, (sum -= 1));
      document.getElementById("quantity").innerText = sum;
    }
  });
}

// Add to cart
let cartCount = 0;
let cartItems = [];
document.getElementById("add-to-cart").addEventListener("click", function () {
  cartCount = cartCount + sum;

  if (sum > 0 && size) {
    document.querySelector("#checkout-container").classList.remove("hidden");
    document.querySelector("#cart-count").innerText = cartCount;
  } else {
    alert("Add Quantity and Size");
  }

  cartItems.push({
    image: `../images/${color}.png`,
    title: " Classy Modern Smart Watch",
    color: color,
    size: size,
    quantity: sum,
    price: price,
  });
});
