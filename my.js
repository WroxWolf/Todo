let tableBox = document.getElementById("tbody");
let todoData = []


function Beolvas(){
    $.ajax({
        url: "todo.json",
        method: "get",
        dataType: "json",
        success: function(data){
            todoData = data;
            console.log(todoData);
            
        },
        error:function(error){   
        }
    });
}