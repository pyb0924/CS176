"use strict";
const task_board = document.querySelector(".tasksBoard");
const task_list = task_board.firstElementChild;
let count = task_list.getElementsByTagName("li").length;

function checkBoard() {
    if (count) {
        task_board.style.display = "block";
    } else {
        task_board.style.display = "none";
    }
}

function createItem(name) {
    const task = document.createElement("li");

    const del_btn = document.createElement("button");
    del_btn.type="submit"
    del_btn.innerHTML = "<img src='del.png' alt='del' width='20px'>"
    //del_btn.appendChild(btn_img);
    task.appendChild(del_btn);

    del_btn.onclick = function () {
        task.parentNode.removeChild(task);
        return false;
    };

    const done_box = document.createElement("input");
    done_box.type = "checkbox";
    task.appendChild(done_box);
    done_box.onchange = function () {
        if (done_box.checked) {
            text.style.textDecoration = "line-through";
        } else {
            text.style.textDecoration = "none";
        }
    }

    const text = document.createElement("span");
    text.innerHTML = name;
    task.appendChild(text);

    return task;
}

const submit_btn = document.querySelector(".input_form > button");
submit_btn.onclick = function () {
    const input = document.querySelector(".input_form > input");
    const task_name = input.value;
    input.value="";
    const task = createItem(task_name);
    task_list.appendChild(task);
    ++count;
    console.log(count.toString());
    checkBoard();
    return false;
};

const clear_link = document.getElementById("clear");
clear_link.onclick = function () {
    console.log("cleared");
    count = 0;
    while (task_list.firstChild) {
        task_list.removeChild(task_list.firstChild);
    }
    checkBoard();
};
