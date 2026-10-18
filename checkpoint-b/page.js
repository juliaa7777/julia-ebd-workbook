
import { items } from "./items.js";

export function renderItems(list) {
  const listElement = document.querySelector("#list");

  listElement.innerHTML = "";

  list.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("listing");
    li.textContent = `${item.name} (${item.category})`;

    listElement.append(li);
  });
}

export function matching() {
  return items.filter((item) => item.price > 100);
}

export function start() {
  renderItems(items);

  document
    .querySelector("#filter-button")
    .addEventListener("click", () => {
      renderItems(matching());
    });
}
