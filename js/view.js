//Class that handles/update the view
class View {
	constructor() {
		this._date=document.forms["date"]["input"];
		this._input=document.forms["create"]["input"];
		this.list=document.getElementById("list");
		this.date_area=document.querySelector("#todo .date input");
		this.todo_submit=document.querySelector("#todo .create .submit");
	}
	//Getters & Setters
	get date() {
		return this._date.value;
	}
	set date(date) {
		if(date instanceof _Date)
			this._date.value=date.str_rev;
	}
	get input() {
		return this._input.value;
	}
	set input(input) {
		if(typeof(input)==="string" || typeof(input)==="undefined")
			this._input.value=input===undefined?"":input;
	}

	//Manipulates & updates view
	update_todo(todo_list) {
		if(typeof(todo_list)=="object") {
			let len=todo_list.length;
			this.list.innerHTML="";
			for(let i=0; i<len; i++) {
				this.list.innerHTML+="<div class=\"item "+(todo_list[i].done?"todo_done":"")+"\"><input class=\"done\" type=\"checkbox\" name=\"done\" title=\"Switch status\" "+(todo_list[i].done?"checked":"")+"><p class=\"task\">"+todo_list[i].task+"</p><a class=\"remove\" href=\"#0\" title=\"Remove\"><span class=\"fa fa-trash\"></span></a></div>";
			}
		}
	}
	set_loading(status) {
		if(status) {
			this.list.innerHTML="<div class=\"loading\"><img src=\"img/loading.gif\" alt=\"...\"> <p>Loading...</p></div>";
			this.date_area.style.pointerEvents="none";
		}
		else
			this.date_area.style.pointerEvents="auto";
	}
	no_item() {
		this.list.innerHTML="<div class=\"loading\"><p>No task planned for this day</p></div>";
	}

	//Listeners
	listen_dateChange(callback) {
		this.date_area.addEventListener("change", (e) => {
			e.preventDefault();
			if(typeof(callback)==="function")
				callback();
		});
	}
	listen_addTodo(callback) {
		this.todo_submit.addEventListener("click", (e) => {
			e.preventDefault();
			if(typeof(callback)==="function")
				callback();
		});
	}
	listen_todo(todo, callback1, callback2) {
		if(typeof(todo)=="object") {
			let len=todo.length;
			for(let i=0; i<len; i++) {
				document.querySelector("#list .item:nth-child("+(i+1)+") input").addEventListener("click", () => {
					let item=document.querySelector("#list .item:nth-child("+(i+1)+")"), status;
					if(item.classList.contains("todo_done")) {
						item.classList.remove("todo_done");
						status=0;
					}
					else {
						item.classList.add("todo_done");
						status=1;
					}
					if(typeof(callback1)==="function")
						callback1(i, status);
				});
				document.querySelector("#list .item:nth-child("+(i+1)+") .remove").addEventListener("click", (e) => {
					e.preventDefault();
					if(typeof(callback2)==="function")
						callback2(todo[i].id);
				});
			}
		}
	}
};