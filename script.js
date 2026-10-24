const addButton = document.getElementById("add-button");
const list = document.getElementById("item-list");
const input = document.getElementById("text-input");

let data = [];

document.addEventListener("load", loadFromStorage());

addButton.addEventListener("click", (e) => {
  e.preventDefault();
  addition(crypto.randomUUID(), input.value.trim());
});

function addition(id, title) {
  if (!title) return;
  const listItem = document.createElement("li");
  listItem.innerHTML = `<input class='editable-input' type='text' value='${title}'/>  <div class='button-group'><button type='button' id='update-button' onclick="updateHandler(event,this.parentElement.parentElement.querySelector('.editable-input').value)">Update</button> <button type='button' id='delete-button' onclick='deleteHandler(event)'>Delete</button></div>`;
  listItem.dataset.id = id;
  list.append(listItem);
  data.push({ id: listItem.dataset.id, title });
  input.value = "";
  localStorage.setItem("data", JSON.stringify(data));
}

function updateHandler(e,newTitle) {
  data = data.map((item) => {
    if (item.id === e.target.closest("li").dataset.id) {
      return { ...item, title:newTitle };
    }
    return item;
  });
  localStorage.setItem("data", JSON.stringify(data));
}

function deleteHandler(e) {
  const targetItem = e.target.closest("li");
  targetItem.remove();
  data = data.filter((item) => item.id != targetItem.dataset.id);
  localStorage.setItem("data", JSON.stringify(data));
}

function loadFromStorage() {
  const storageData = JSON.parse(localStorage.getItem("data"));
  if (!storageData || storageData.length === 0) return;
  storageData.forEach((item) => {
    addition(item.id, item.title);
  });
}
