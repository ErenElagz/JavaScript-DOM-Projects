const InputText = document.getElementById("InputText");
const InputButton = document.getElementById("InputButton");
const NoteList = document.getElementById("NoteList");

var TaskLists = [];

InputButton.addEventListener("click", function () {
    NoteList.insertAdjacentHTML(
        "afterbegin",
        `<li class="list-group-item d-flex justify-content-between align-items-center p-3">
        <div class="d-flex align-items-center justify-content-between gap-2">
        <input class="form-check-input m-0" type="checkbox" id="item-checkbox" />
        <p class="opacity-75 fw-bold m-0">${InputText.value}</p>
        </div>
        <div class="fa-solid fa-trash"></div>
        </li>`
    );
    InputText.value = "";
});
