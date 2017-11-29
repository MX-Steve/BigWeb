//递归遍历
//Step1: 定义函数，仅遍历直接子节点
function getChildren1(parent){
	console.log(parent.nodeName);
	var children=parent.children;
	for(var i=0,len=children.length;i<len;i++){
		//Step2: 对每个直接子元素调用和父元素相同的操作
		arguments.callee(children[i]);
	}
}
//用循环代替递归: 
function getChildren2(parent){
	//Step1: 创建节点迭代器对象: 
	var iterator=document.createNodeIterator(
		parent,NodeFilter.SHOW_ELEMENT,null,false	
	);
	//Step2: 循环调用nextNode()方法，跳到下一个
	do{
		var curr=iterator.nextNode();
		if(curr){
			console.log(curr.nodeName);
		}else break;
	}while(true);
}
getChildren2(document.body);