const inputbox = document.querySelector("#input-box");
const button = document.querySelector(".add_todo");
const listcontainer = document.querySelector("#list-container");

button.addEventListener("click", addTask);

function addTask() {
    let texttodo = inputbox.value.trim();
    if (texttodo !== "") {
        const li = document.createElement("li");
        li.innerHTML = texttodo;

        let deletebtn = document.createElement("button");
        deletebtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
        deletebtn.className = "delete";

        deletebtn.onclick = function () {
            li.remove();
        };

        li.appendChild(deletebtn);
        listcontainer.appendChild(li);

        inputbox.value = ""; // Clear the input box after adding the task
    }
}
