const addButton = document.getElementById("add-button");
const list = document.getElementById("item-list");
const input = document.getElementById("text-input");

let data = [];

document.addEventListener("load", localStorageAddition());

addButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (!input.value.trim()) return;
  const listItem = document.createElement("li");
  listItem.innerHTML = `<input class='editable-input' type='text' value='${input.value.trim()}'/>  <div><button type='button' id='update-button' onclick='updateHandler(event)'>Update</button> <button type='button' id='delete-button' onclick='deleteHandler(event)'>Delete</button></div>`;
  listItem.dataset.id = crypto.randomUUID();
  list.append(listItem);
  data.push({ id: listItem.dataset.id, title: input.value.trim() });
  input.value = "";
  localStorageAddition();
});

function updateHandler(e) {}

function deleteHandler(e) {
  const targetItem = e.target.closest("li");
  targetItem.remove();
  data = data.filter((item) => item.id != targetItem.dataset.id);
  localStorageAddition();
}

function localStorageAddition() {
  const dataExists = localStorage.getItem("data");
  if (!dataExists) {
    localStorage.setItem("data", JSON.stringify(data));
  }
  return;
}
