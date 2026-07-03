let title = document.getElementById("title");
let taskInput = document.getElementById("taskInput");
let add = document.getElementById("add");
let message= document.getElementById("message");
let taskCount= document.getElementById("taskCount");
let taskList= document.getElementById("taskList");
let count = 0;

add.addEventListener("click",function(){
	let taskText = taskInput.value;
		if(taskText === ""){
			message.textContent= "PLeas Add New Task ";
			return;
		}
	 let li = document.createElement("li");
	 let taskSpan= document.createElement("span");
	 taskSpan.textContent= taskText;
	 let noteInput = document.createElement("input");
	 noteInput.type = "text";
	 noteInput.placeholder = "Add  a note";
	 
	 let deleteBtn= document.createElement("button");
	 deleteBtn.textContent = "Delete";
	 
	 li.appendChild(taskSpan);
	 li.appendChild(document.createElement("br"));
	 li.appendChild(noteInput);
	 li.appendChild(document.createElement("br"));
	 li.appendChild(deleteBtn);
	 taskList.appendChild(li);
	 
	message.textContent= "New Task :" + taskText;
	count++ 
	taskCount.textContent = count;
	taskInput.value = "";
	
	deleteBtn.addEventListener("click" , function(){
		li.remove();
		count--;
		taskCount.textContent = count;
		message.textContent = "Task Deleted";
	});
});

	








