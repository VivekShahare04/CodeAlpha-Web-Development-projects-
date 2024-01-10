const inputbox = document.getElementById('todo');
const listcontainer = document.getElementById('list-container');

function addtask(){
    if(inputbox.value===''){
        alert("Please enter a task");
    }else{
        let li = document.createElement('li');
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        
        let span = document.createElement('span');
        span.innerHTML = "\u2715";
        li.appendChild(span);
    }
    inputbox.value = '';
    savedata();
}

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();

    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
}
, false);

function savedata(){
    localStorage.setItem("todo", listcontainer.innerHTML);
}

function showtask(){
    listcontainer.innerHTML = localStorage.getItem("todo");
}

showtask();