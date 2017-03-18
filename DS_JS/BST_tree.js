
//define the  BST tree
function BST(){
	this.root=null;
	this.insert=insert;
	this.inOrder=inOrder;//inorder search
	this.preOrder=preOrder;
	this.postOrder=postOrder;
	this.getMin=getMin;
	this.getMax=getMax;
}

function Node(data,left,right) {
	// body...
	this.data=data;
	this.left=left;
	this.right=right;
	this.show=show;
}

function insert(data){
	var n =new Node(data,null,null);
	if(this.root==null){
		this.root=n;
	}
	else{
		var current=this.root;
		var parent;
		while(true){
			parent=current;
			if(data<current.data){
				current=current.left;
				if(current==null){
					parent.left=n;
					break;
				}
			}
			else{
				current=current.right;
				if(current==null){
					parent.right=n;
					break;
				}
			}
					}
	}}

function inOrder(node){

	if(!(node==null)){

		inOrder(node.left);
		console.log(node.show()+" " );
		inOrder(node.right);
	}
}
function preOrder(node){
	if(!(node==null)){
		console.log(node.show()+" " );
		preOrder(node.left);
		preOrder(node.right);
	}
}
function show() {
	// body...
	return this.data;
}
function postOrder(node){
	if(!(node==null)){

		postOrder(node.left);
		postOrder(node.right);
		console.log(node.show()+" " );
	}
}

function getMin() {
	// body...
	var current=this.root;
	while(!(current.left==null)){
		current=current.left;
	}
	return current.data;
}
function getMax() {
	var current=this.root;
	while(!(current.right==null)){
		current=current.right;
	}
	return current.data;
	// body...
}

//////////////////////////////////////////////////////////////////
var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
inOrder(nums.root);
console.log("============================");
preOrder(nums.root);
console.log("============================");
postOrder(nums.root);
console.log("============================");
console.log("the Max data is " + nums.getMax());
console.log("============================");
console.log("the Min data is " + nums.getMin());
