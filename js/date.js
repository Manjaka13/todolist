//Creates new date object
class _Date {
	constructor(d, m, y) {
		if(d instanceof _Date && m==undefined && y==undefined) {
			this._d=d.d;
			this._m=d.m;
			this._y=d.y;
		}
		else if(typeof(d)==="string" && m==undefined && y==undefined) {
			let arr=[];
			if(d.indexOf("-")>=0)
				arr=d.split("-");
			else if(d.indexOf("/")>=0)
				arr=d.split("/");
			if(parseInt(arr[0])<=31) {
				this._d=parseInt(arr[0]);
				this._m=parseInt(arr[1]);
				this._y=parseInt(arr[2]);
			}
			else {
				this._d=parseInt(arr[2]);
				this._m=parseInt(arr[1]);
				this._y=parseInt(arr[0]);
			}
		}
		else if(d==undefined || m==undefined || y==undefined) {
			let today=new Date();
			this._d=today.getDate();
			this._m=today.getMonth()+1;
			this._y=today.getFullYear();
		}
		else {
			this._d=d;
			this._m=m;
			this._y=y;
		}
	}

	//Getters and setters for each components
	get d() {
		return ((this._d>0 && this._d<=31)?this._d:1);
	}
	set d(value) {
		if(value>0 && value<=31)
			this._d=value;
	}
	get m() {
		return ((this._m>0 && this._m<=12)?this._m:1);
	}
	set m(value) {
		if(value>0 && value<=12)
			this._m=value;
	}
	get y() {
		return (this._y>0?this._y:2020);
	}
	set y(value) {
		if(value>0)
			this._y=value;
	}
	get str() {
		return (this._d<10?"0"+this._d:this._d)+"-"+(this._m<10?"0"+this._m:this._m)+"-"+this._y;
	}
	get str_rev() {
		return this._y+"-"+(this._m<10?"0"+this._m:this._m)+"-"+(this._d<10?"0"+this._d:this._d);
	}
	get obj() {
		return {
			d: this._d,
			m: this._m,
			y: this._y
		};
	}
};