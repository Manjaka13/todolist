//Handles data read and update
class Model {
	constructor() {
		//CRUD targets
		this.target={
			create: "php/create_todo.php",
			read: "php/read_todos.php",
			update: "php/update_todo.php",
			delete: "php/delete_todo.php"
		};
	}
	//Method that submits CRUD requests
	async _request(name, args) {
		let self=this;
		async function req() {
			return await ajax(self.target[name], args);
		}
		return req();
	}

	//CRUD operations	
	async create(task, date) {
		let result, valid=false;
		if(typeof(date)==="string")
			date=new _Date(date);
		if(typeof(task)=="string" && date instanceof _Date) {
			valid=true;
			result=await this._request("create", {task: task, date: date.str});
		}
		return new Promise((resolve, reject) => {
			if(typeof(task)=="string" && date instanceof _Date)
				resolve(result);
			else
				reject("Failed creating new todo.");
		});
	}
	async read(date) {
		let result, valid=false;
		if(typeof(date)==="string")
			date=new _Date(date);
		if(date instanceof _Date) {
			valid=true;
			result=await this._request("read", {date: date.str});
		}
		return new Promise((resolve, reject) => {
			if(valid)
				resolve(result);
			else
				reject("Failed reading todo list.");
		});
	}
	async update(id, done) {
		let result, valid=false;
		if(typeof(id)==="number" && id>=0 && typeof(done)=="number" && (done===1 || done===0)) {
			valid=true;
			result=await this._request("update", {id: id, done: done});
		}
		return new Promise((resolve, reject) => {
			if(valid)
				resolve(result);
			else
				reject("Failed reading todo list.");
		});
	}
	async delete(id) {
		let result, valid=false;
		if(typeof(id)==="number" && id>=0) {
			valid=true;
			result=await this._request("delete", {id: id});
		}
		return new Promise((resolve, reject) => {
			if(valid)
				resolve(result);
			else
				reject("Failed reading todo list.");
		});
	}
};