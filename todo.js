let todo = [];
let k;
document.getElementById("edit").style.display = "none";

// let localTodo = localStorage.getItem("toDo")
// let newTodo = JSON.parse(localTodo)

let localTodo = JSON.parse(localStorage.getItem("toDo"))
if (localTodo.length > 0){
  todo = localTodo;
  displayTodo();
}
function addTodo() {
  let task = document.getElementById("task").value;
  let date = document.getElementById("date").value;
  let description = document.getElementById("description").value;
  console.log({task,date,description});

  if (task == "" || date == "" || description == "") {
    alert("All fields are required");
  } else {
    let todoObj = {
      task,
      date,
      description,
    };
    todo.push(todoObj);

//     let strTodo = JSON.stringify(todo)
// localStorage.setItem("toDo",strTodo )

localStorage.setItem("toDo",JSON.stringify(todo))
    console.log(todo);

    //    function displayTodo() {
      //      let show = "";
      //     for (let i in todo) {
        //       console.log(todo);
        //       show += `
        //       <tr>
        //         <td>${Number(i) + 1}</td>
        //         <td>${todo[i].task}</td>
//        <td>${todo[i].date}</td>
//     <td>${todo[i].description}</td>
//      <td>
//      <button onclick="editTodo(${i})">Edit</button>
//      <button onclick="deleteTodo(${i})" >Delete</button>
//      </td>
//         </tr>
// `;
// }
// document.getElementById("display").innerHTML = show;
}
displayTodo()

  document.getElementById("task").value = "";
  document.getElementById("date").value = "";
  document.getElementById("description").value = "";
}

function displayTodo(){
     let show = "";
          for (let i in todo) {
              console.log(todo);
              show += `
              <tr>
                <td>${Number(i) + 1}</td>
                <td>${todo[i].task}</td>
       <td>${todo[i].date}</td>
    <td>${todo[i].description}</td>
     <td>
     <button onclick="editTodo(${i})">Edit</button>
     <button onclick="deleteTodo(${i})" >Delete</button>
     </td>
        </tr>
`;
}
document.getElementById("display").innerHTML = show;

}

function editTodo() {
  document.getElementById("edit").style.display = "block";
  document.getElementById("add").style.display = "none";
 
  document.getElementById("task").value = todo[i].task;
 document.getElementById("date").value = todo[i].date;
 document.getElementById("description").value = todo[i].description;
k=i
}

function updateTodo() {
  let newTask = document.getElementById("task").value;
  let newDate = document.getElementById("date").value;
  let newDescription = document.getElementById("description").value;

  todo[k].task = newTask;
  todo[k].date = newDate;
  todo[k].description = newDescription;

localStorage.setItem("toDo",JSON.stringify(todo))


  let show = "";
  for (let j in todo)(
    console.log(todo),
    show += `
     <tr>
        <td>${Number(i) + 1}</td>
        <td>${todo[i].task}</td>
       <td>${todo[i].date}</td>
    <td>${todo[i].description}</td>
     <td>
     <button onclick="editTodo(${i})">Edit</button>
     <button onclick="deleteTodo(${i})" >Delete</button>
     </td>
        </tr>
    `
  )
      document.getElementById("display").innerHTML = show;
      
  document.getElementById("task").value;
  document.getElementById("date").value;
  document.getElementById("description").value;
}
let savedTodo = localStorage.getItem("todo");
console.log(savedTodo , "saved colors");
let ourString = JSON.stringify(todoArray)
localStorage.setItem("colors", ourString);
displayTodo();