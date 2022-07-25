
class node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
} 

class Bst {
    constructor() {
        this.root = null;
    }
    
    //INSERT FUNCTION
    insert(data) {
        // creating new node with the data
        let newNode = new node(data);
        
        if(this.root === null){
            //when there is no root previously
            this.root = newNode;
        } else {
            //when root is not null-- creating a new node and then inserting it in the tree
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if(node.data < newNode.data) {
            if(node.right === null){
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        } else {
            if(node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        }
    }

    getRootNode () {
        return this.root;
    }

    inorder (node) {
        if(node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

    search(node, data) {
        if(node === null) {
            
            return null;
        }

        else if(node.data > data) {
            return this.search(node.left, data);
        }

        else if(node.data < data){
            return this.search(node.right, data);
        }
        else {

            return node;
        }
    }
}

//  IMPLEMENTATON   // 
// create an object for the BinarySearchTree
var BST = new Bst();
 
// Inserting nodes to the BinarySearchTree
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);
                         
//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17
 
let root = BST.getRootNode();
             
// prints 5 7 9 10 13 15 17 22 25 27
// BST.inorder(root);
console.log(BST.search(root, 13));
