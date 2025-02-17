let index = 0;

function add(button) {
    let string = button.closest(".item").querySelector("input[type='text']").value;
    let date = button.closest(".item").querySelector("input[type='date']").value;

    let table = document.querySelector(".ListTable");

    let row = document.createElement("tr");
    row.setAttribute("class", "row");

    let td1 = document.createElement("td");
    td1.setAttribute("class", "string");
    td1.innerHTML = `<p>${string}</p>`;

    let td2 = document.createElement("td");
    td2.innerHTML = `<p>${date}</p>`;

    let td3 = document.createElement("td");
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    td3.appendChild(checkbox);

    let td4 = document.createElement("td");
    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.setAttribute("onclick", "edit(this)");
    td4.appendChild(editButton);

    let td5 = document.createElement("td");
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("onclick", "delete1(this)");
    td5.appendChild(deleteButton);

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    row.appendChild(td5);

    table.appendChild(row);
}

function delete1(button) {
    button.closest(".row").remove();
}

function edit(button) {
    let td = button.closest("td").previousElementSibling.previousElementSibling.previousElementSibling; // Find the correct `<td>` with text
    let existingText = td.querySelector("p").textContent;
    td.innerHTML = "";
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("class", "editfield");
    input.value = existingText;
    let submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    submitButton.onclick = function() {
        td.innerHTML = `<p>${input.value}</p>`;
    }
    td.appendChild(input);
    td.appendChild(submitButton);
}