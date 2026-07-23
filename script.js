let input = document.getElementById("text");
let addBtn = document.getElementById("addBtn");
let list = document.getElementById("list");

function main() {
  if (!input.value.trim()) {
    return;
  }

  makingTask(input.value);

  input.value = "";

  saveLocalStorage();
}

window.addEventListener("load", () => {
  JSON.parse(localStorage.getItem("items")).forEach((item) => makingTask(item));
});

function makingTask(text) {
  let listElement = document.createElement("li");

  listElement.innerHTML = `${text} <i class="fa-solid fa-trash" style='font-size:20px;color: rgb(255, 255, 255);background-color:red;padding:10px 28px 10px 10px;border-radius:5px'></i>`;

  list.appendChild(listElement);

  let timeout = setTimeout(() => {
    listElement.classList.add("showListElement");
  }, 100);
}

input.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    main();
  }
});

addBtn.addEventListener("click", main);

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-trash")) {
    e.target.parentElement.classList.remove("showListElement");
    let timeout = setTimeout(() => {
      e.target.parentElement.remove();
      saveLocalStorage();
    }, 400);
  }
});

function saveLocalStorage() {
  let data = [];
  list.querySelectorAll("li").forEach((item) => {
    data.push(item.textContent);
  });

  localStorage.setItem("items", JSON.stringify(data));
}
