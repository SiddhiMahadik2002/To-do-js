let addbtn=document.getElementById("addbtn")
let todoinput=document.getElementById("todoinput")
let todolist=document.querySelector(".todolist")
let stats=document.querySelector("#stats")
let clear=document.querySelector(".clear")
todoinput.addEventListener("input",()=>{

     if(todoinput.value.trim()!=0){
         addbtn.classList.add("active")
     }
     else{
         addbtn.classList.remove("active")
     }
})
 displayTodo()
 updatestats()

addbtn.addEventListener("click", () => {
    if(todoinput.value.length != 0){
        let userInput = todoinput.value;
        
        let getLocalStorage = localStorage.getItem("Siddhi");
        if(getLocalStorage == null){
            todoArray = []
        }
        else{
            todoArray=JSON.parse(getLocalStorage)
        }
        todoArray.push(userInput)
        localStorage.setItem("Siddhi",JSON.stringify(todoArray))
    }
    todoinput.value=""
    displayTodo()
    updatestats()
})


function displayTodo(){
    let getLocalStorage = localStorage.getItem("Siddhi");
        if(getLocalStorage == null){
            todoArray = []
        }
        else{
            todoArray=JSON.parse(getLocalStorage)
        }
        let htmlString=""
        todoArray.forEach((ele,idx) => {
            htmlString +=`<div class="singletodo"><p>${ele}</p>
            <button onclick="deleteTodo(${idx})"><ion-icon name="trash-outline"></ion-icon></button></div>`
        });
 todolist.innerHTML=htmlString
} 

function deleteTodo(idx){
    let getLocalStorage =localStorage.getItem("Siddhi")
    todoArray =JSON.parse(getLocalStorage)
    todoArray.splice(idx,1)
    localStorage.setItem("Siddhi",JSON.stringify(todoArray))
    displayTodo()
    updatestats()
}
function updatestats(){
    let getLocalStorage =localStorage.getItem("Siddhi")
if (getLocalStorage==null){
    stats.innerText=0;
}
else{
    stats.innerText=todoArray.length
}
}

clear.addEventListener("click",()=>{
    localStorage.clear()
    displayTodo()
    updatestats()
}
)
