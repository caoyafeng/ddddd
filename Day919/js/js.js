
  	function Person(name,age){
		this.name = name;
		this.age = age;
  	}
  	var per = new Person("zs",18);
  	var per2 = new Person("ls",20);
  	console.log(per);

  	var arr = [1,2,3,4,5,];
	var s=0;
	for(var i=0;i<arr.length;i++){
		s+=arr[i];
	}
	console.log(s);
	
	var sum = arr.reduce((a,b)=>a+b);
	console.log(sum);
	
	var max = arr.reduce(function(a,b){
		if(a>b){
			return a;
		}
		else{
			return b;
		}
	})
	console.log(max);
	function add(){
		var s=0;
		for(var i=0;i<arguments.length;i++){
			s += arguments[i];
		}
		return s;
	}
