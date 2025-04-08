let inputBox = document.querySelector("#InputBox");
let btn = document.querySelector("#btn");
let outputBox = document.querySelector(".tasks");


// on first try 
  
// btn.addEventListener("click",()=>{
//     let message = inputBox.value;
//     let newTask = document.createElement("p");
//     newTask.innerText = message;
    
//     let deletebtn = document.createElement("button");
//     deletebtn.innerText = "Delete";
//     deletebtn.style.backgroundColor = "#d76f30";
//     deletebtn.style.color = "#EBE8E3";
//     deletebtn.style.margin="3px";

//     deletebtn.addEventListener("click", ()=>{
//         newTask.remove();
//     })
    
//     newTask.appendChild(deletebtn);
    
//     let completebtn = document.createElement("button");
//     completebtn.innerText = "Completed";
//     completebtn.style.backgroundColor = "#d76f30";
//     completebtn.style.color =  "#EBE8E3";
//     completebtn.style.margin="3px";
    
//     completebtn.addEventListener("click", ()=>{
//         newTask.style.textDecorationLine = "line-through";
//         newTask.style.textDecorationColor = "red";
//         newTask.style.opacity = "0.7";
//     })
    
//     newTask.prepend(completebtn);

//     outputBox.appendChild(newTask);
//     inputBox.value = "";
// });



//after improvements

btn.addEventListener("click", () => {
    let message = inputBox.value.trim();
    if (message === "") return;

    let taskWrapper = document.createElement("div");
    taskWrapper.style.display = "flex";
    taskWrapper.style.alignItems = "center";
    taskWrapper.style.justifyContent = "space-between";
    taskWrapper.style.backgroundColor = "#264e36";
    taskWrapper.style.color = "#EBE8E3";
    taskWrapper.style.borderRadius = "5px";
    taskWrapper.style.padding = "10px";
    taskWrapper.style.marginBottom = "8px";
    taskWrapper.style.width = "100%";
    taskWrapper.style.maxWidth = "500px";
    taskWrapper.style.gap = "10px";

    
    let newTask = document.createElement("span");
    newTask.innerText = message;
    newTask.style.flex = "1";


    let deletebtn = document.createElement("button");
    deletebtn.innerText = "Delete";
    deletebtn.style.backgroundColor = "#d76f30";
    deletebtn.style.color = "#EBE8E3";
    deletebtn.style.margin = "3px";
    deletebtn.style.padding = "6px";
    deletebtn.style.border = "none";
    deletebtn.style.borderRadius = "3px";
    deletebtn.style.cursor = "pointer";

    deletebtn.addEventListener("click", () => {
        taskWrapper.remove();
    });

    
    let completebtn = document.createElement("button");
    completebtn.innerText = "Complete";
    completebtn.style.backgroundColor = "#d76f30";
    completebtn.style.color = "#EBE8E3";
    completebtn.style.margin = "3px";
    completebtn.style.padding = "6px";
    completebtn.style.border = "none";
    completebtn.style.borderRadius = "3px";
    completebtn.style.cursor = "pointer";

 
    completebtn.addEventListener("click", () => {
        newTask.style.textDecorationLine = "line-through";
        newTask.style.textDecorationColor = "gold";
        newTask.style.opacity = "0.7" ;
    });

    
    taskWrapper.appendChild(newTask);
    taskWrapper.appendChild(completebtn);
    taskWrapper.appendChild(deletebtn);

    
    outputBox.appendChild(taskWrapper);

    inputBox.value = "";
});




