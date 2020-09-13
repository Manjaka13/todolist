//Class that links view and controller
class Controller {
	constructor() {
		let self=this;
		let today=new _Date();
		this.model=new Model();
		this.view=new View();

		this.view.date=today;

		//Listen to date change
		this.view.listen_dateChange(() => {
			self.update(self.view.date);
		});

		//Listen to todo creation
		this.view.listen_addTodo(() => {
			let task=self.view.input;
			self.view.input="";
			self.model.create(task, self.view.date).then(() => {
				self.update(self.view.date);
			}).catch(err => {
				console.log(err);
			});
		});

		//Display today's todo list
		this.update(today);
	}
	//Listens to todo items
	_listen(todo) {
		let self=this;
		this.view.listen_todo(todo, (i, status) => {
			self.model.update(todo[i].id, status).then(() => {}).catch(err => {
				console.log(err);
			});
		}, id => {
			self.model.delete(id).then(() => {
				self.update(self.view.date);
			}).catch(err => {
				console.log(err);
			});
		});
	}
	//Update list
	update(date) {
		let self=this;
		this.view.set_loading(true);
		this.model.read(date).then(result => {
			self.view.update_todo(result);
			self.view.set_loading(false);
			if(result.length===0)
				self.view.no_item();
			else {
				self._listen(result);
			}
		}).catch(err => {
			console.log(err);
		});
	}
};