const InputText = document.getElementById("InputText");
const InputButton = document.getElementById("InputButton");
const NoteList = document.getElementById("NoteList");

var TaskLists = [];

let id = 1;
InputButton.addEventListener("click", function () {
    TaskLists.push({ noteId: id, noteContent: InputText.value, check: false });
    id = id + 1;

    NoteList.insertAdjacentHTML(
        "afterbegin",
        `<li class="list-group-item d-flex justify-content-between align-items-center p-3">
        <div class="d-flex align-items-center justify-content-between gap-2">
        <input class="form-check-input m-0" type="checkbox" id="item-checkbox"/>
        <p class="opacity-75 fw-bold m-0">${InputText.value}</p>
        </div>
        <div class="fa-solid fa-trash"></div>
        </li>`
    );
    InputText.value = "";

    console.log(TaskLists);
    console.log(NoteList.children);
    for (let i of NoteList.childNodes) {
        if (NoteList.children[i].children[0].children[0].checked == true) {
            TaskLists[i + 1].check = true;
        } else {
            TaskLists[i + 1].check = false;
        }
    }
});
