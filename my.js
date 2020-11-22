  
// Változók

//Elemek
let checkboxCheckAll = document.getElementById("inputCheckAll");
let buttonDeleteChecked = document.getElementById("buttonDeleteChecked");
let inputAdd = document.getElementById("inputAdd");
let buttonAdd = document.getElementById("buttonAdd");
let divListBox = document.getElementById("listBox");

//Feliratkozás
$(document).ready(function(){
    ReadIn();
});

checkboxCheckAll.addEventListener("change", OnChange_CheckAll);

buttonDeleteChecked.addEventListener("click", OnClick_DeleteChecked);

buttonAdd.addEventListener("click", OnCLick_AddNew);

//Eseménykezelők
function ReadIn() {
    $.ajax({
        url: "todo.json",
        method: "get",
        datatype: "JSON",
        success: function(data){
            new List(divListBox, data);
        },
        error: function(error){
            console.log(error);
        }
    });
}

function OnChange_CheckAll(){
    let event = new CustomEvent("checkAll", {detail: this.checked});

    window.dispatchEvent(event);
}

function OnClick_DeleteChecked() {
    let event = new Event("deleteChecked");

    window.dispatchEvent(event);
}

function OnCLick_AddNew() {
    let newTask = inputAdd.value;
    inputAdd.value = "";

    let event = new CustomEvent("addNew", {detail: newTask});

    window.dispatchEvent(event);
}