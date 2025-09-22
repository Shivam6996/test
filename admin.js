document.getElementById("add-item-form")?.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("item-name").value;
  const id = document.getElementById("item-id").value;
  const price = document.getElementById("item-price").value;

  let items = JSON.parse(localStorage.getItem("shopItems")) || [];
  items.push({ name, id, price });
  localStorage.setItem("shopItems", JSON.stringify(items));

  e.target.reset();
  loadAdminItems();
});

function loadAdminItems() {
  const list = document.getElementById("admin-items-list");
  if (!list) return;
  const items = JSON.parse(localStorage.getItem("shopItems")) || [];
  list.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.id} - $${item.price}`;
    list.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", loadAdminItems);

// Loader hide
window.onload = () => {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";
};
