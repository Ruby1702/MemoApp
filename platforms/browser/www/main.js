//Exercise: Create a to do List app
function todoList(){
	var item = document.getElementById("todoInput").value;
	if(item==""){
		var obj = {
			list: [item]
		}
	localStorage.setItem('obj', JSON.stringify(obj));	
	}
	
	var text = document.createTextNode(item);
	var newItem = document.createElement("li");
	newItem.appendChild(text);
	document.getElementById("todoList").appendChild(newItem);
	}

	var retrieveruby = localStorage.getItem('obj');
	retrieveruby = JSON.parse(retrieveruby);
	var text = document.createTextNode(retrieveruby);
	var newItem = document.createElement("li");
	newItem.appendChild(text);
	document.getElementById("todoList").appendChild(newItem);

function deleteValue() {localStorage.removeItem('obj');		
	};

	//var retrieveruby = localStorage.getItem('item');
	//retrieveruby = JSON.parse(retrieveruby);
	//var text = document.createTextNode(retrieveruby)
	//var newItem = document.createElement("li")
	//newItem.appendChild(text)
	//document.getElementById("todoList").appendChild(newItem)

	//var retrieveruby = localStorage.getItem('item');
	//retrieveruby = JSON.parse(retrieveruby);
	//var text = document.createTextNode(retrieveruby)
	//var newItem = document.createElement("li")
	//newItem.appendChild(text)
	//document.getElementById("todoList").appendChild(newItem)

	