//Exercise: Create a to do List app
function todoList(){
	var item = document.getElementById("todoInput").value;
	localStorage.setItem("Text",item);
	var text = document.createTextNode(item);
	var newItem = document.createElement("li");
	newItem.appendChild(text);
	document.getElementById("todoList").appendChild(newItem);
	}
	
function todoList1(){
	var item = document.getElementById("todoInput").value;
	localStorage.removeItem("Text");
	newItem.appendChild(text);
	document.getElementById("todoList").appendChild(newItem);
	}
