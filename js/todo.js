//Creates new todo item
class Todo {
	constructor(id, date, task, done) {
		if(date instanceof _Date && typeof(task)==="string") {
			this._id=(typeof(id)==="number" && id>=0)?id:-1;
			this._date=date;
			this._task=task;
			this._done=(typeof(done)==="number" && (done===1 || done===0))?done:0;
		}
		else {
			try {
				throw new Error("Todo creation failed.");
			} catch(e) {
				console.log(e.name+": "+e.message);
			};
		}
	}
	//Getters & setters
	get obj() {
		return {
			id: this._id,
			date: this._date,
			task: this._task,
			done: this._done
		};
	}
	set date(value) {
		if(value instanceof _Date)
			this._date=value;
	}
	get date() {
		return this._date;
	}
	set task(value) {
		if(typeof(value)==="string")
			this._task=value;
	}
	get task() {
		return this._task;
	}
	set done(value) {
		if(typeof(value)==="number" && (value===1 || value===0))
			this._done=value;
	}
	get done() {
		return this._done;
	}
};