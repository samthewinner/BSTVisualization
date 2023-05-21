class Node{
    constructor(data,left = null,right = null) {
        this.data = data
        this.left = null
        this.right = null  
        // this.x = 200
        // this 
    }    
}

class BST{
    constructor() 
    {
        this.root = null
    }
    add(data,node = this.root){
        
        if(this.root == null)
            return this.root = new Node(data)

           if(node == null)
           {                                
                return new Node(data);                    
           }
           if(node.data < data){
            node.right = this.add(data,node.right);
            return node            
           }
           else if(node.data > data){
            node.left = this.add(data , node.left);  
            return node;          
           }           
           process.stdout.write('same node already exists')
           return node;
           
    }
    
    search(data , node = this.root){
        if(node == null)
            return false;
        if(node.data > data)
            return this.search(data , node.left);
        else if(node.data < data)
            return this.search(data , node.right);
        else
            return true;
    }

    delete(data,node = this.root){
        if(node == null){
            // console.log('null');
            return null;
        }
        // console.log(data)
        if(node.data > data){
            // console.log('in');
            node.left = this.delete(data , node.left);
            return node;
        }
        else if(node.data < data){
            node.right = this.delete(data, node.right)
            return node;
        }
        
        else{
            // two children
            if(node.left && node.right){
                const deleteNode = findMin(node);
                node.data = deleteNode.data;
                node.right = this.delete(deleteNode.data, node.right);
                return node;
            }
            // left child
            else if(node.left){
                return node.left;
            }
            // right child
            else if(node.right){
                return node.right;
            }
            // no child
            else{
                return null;
            }
        }
        
    }

    findMin(node){
        let curr = node.right;
        while(curr.left!=null)
            curr = curr.left;
        return curr;
    }
    
    print(node = this.root){
        if(node == null)return;
        this.print(node.left);
        console.log(node.data)
        this.print(node.right)
        return;
    }
}

const bt = new BST()
const nums = [2,1,3,4,5,23]
// for(let i of nums)
// {
//         bt.add(i);
// }
// bt.add(3)
// bt.add(4)
// bt.add(4)
// bt.print();
// console.log(bt.search(33))
// // console.log(bt.root)
// // bt.delete(0);
// process.stdout.write('after deletion\n')
// bt.print();
// console.log(bt.root)