const inputTask = document.querySelector("#inputtask");
const form = document.querySelector(".form");
const addButton = document.querySelector("#addbutton");
const toDoList = document.querySelector(".todolist");
const clear = document.querySelector(".clear");



form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (inputTask.value == "") {
    alert("Please Add Some Text");
  } else {
    const newTask = createNewItem(inputTask.value);
    toDoList.appendChild(newTask);
    inputTask.value = "";
    inputTask.focus();
    clear.classList.remove("d-none");
  }

  clear.addEventListener("click", function () {
    toDoList.innerHTML = "";
   if(toDoList.innerHTML=="")
   clear.classList.add("d-none");
  });
});

function createNewItem(inputValue) {
  const task = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  const editBtn = document.createElement("button");
  const upBtn = document.createElement("button");
  const downBtn = document.createElement("button");
  span.textContent = inputValue;
  delBtn.textContent = "Delete";
  editBtn.textContent = "Edit";
  upBtn.textContent = "Up";
  downBtn.textContent = "Down";
  task.appendChild(span);
  task.appendChild(delBtn);
  task.appendChild(editBtn);
  task.appendChild(upBtn);
  task.appendChild(downBtn);
  
  delBtn.addEventListener("click", function () {
    task.parentNode.removeChild(task);
 if(toDoList.innerHTML=="")
   clear.classList.add("d-none");
  });
  editBtn.addEventListener("click", function () {
    span.contentEditable = true;
    span.focus();
  });
  downBtn.addEventListener("click",function(){
                 var wrapper = this.parentElement;
  
		if(wrapper.nextElementSibling)
		wrapper.parentNode.insertBefore(wrapper.nextElementSibling, wrapper);
  else
 wrapper.parentNode.insertBefore(wrapper, wrapper.parentElement.firstChild);
 
  });
  upBtn.addEventListener("click", function () {
			var wrapper = this.parentElement;
			if (wrapper.previousElementSibling)
			 wrapper.parentNode.insertBefore(wrapper, wrapper.previousElementSibling);

 else
 wrapper.parentElement.appendChild(wrapper);

		});
  return task;
}