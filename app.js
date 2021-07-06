
let addBtn = document.getElementsByClassName("btn-add")
let deleteBtn = document.getElementsByClassName("btn-delete")
let submitBtn = document.getElementsByClassName("submit_btn")[0]


// create element function

function createElement(){
    let input = document.querySelector("#input_task");
    let ul = document.querySelector(".task_holder");

    let li = document.createElement("li");
    let itemText = document.createTextNode(input.value);

    li.appendChild(itemText);
    ul.appendChild(li);

    input.value = "";
}


submitBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    
createElement();

});

