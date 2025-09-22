document.addEventListener("DOMContentLoaded", () => {
  const itemsContainer = document.getElementById("items-container");
  const items = JSON.parse(localStorage.getItem("shopItems")) || [];

  if (itemsContainer) {
    itemsContainer.innerHTML = "";
    items.forEach(item => {
      const div = document.createElement("div");
      div.className = "item-card";
      div.innerHTML = `
        <h3>${item.name}</h3>
        <p>Roblox ID: <strong>${item.id}</strong></p>
        <p>Price: $${item.price}</p>
        <button>Buy Now</button>
      `;
      itemsContainer.appendChild(div);
    });
  }

  // Loader hide
  window.onload = () => {
    const loader = document.getElementById("loader");
    if (loader) loader.style.display = "none";
  };
});
