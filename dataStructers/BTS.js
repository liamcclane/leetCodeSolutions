class TreeNode {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}
class BTS {
    constructor() {
        this.root = null; // this should be a TreeNode that chains all the way down
    }

    // CRUD 
    // create - insert
    // read - inorder, preorder, postorder, findOne
    // update - rebalance
    // delete

    /**
     * this method adds new TreeNodes to the BTS at the correct spot 
     * making new leafs
     * @param { number } val  the value of the node you are tring to add
     * @param { TreeNode } curr DO NOT put anything in this param
     * it is used for recursive function call
     * @returns { number[] }the BTS so chaining can occure
     */
    insert = (val, curr = this.root) => {
        //edge case check for empty BTS
        if (this.isEmpty()) {
            this.root = new TreeNode(val);
            return this
        }

        /**
         * if- is some error handeling 
         * else if - recursive call to the right IF there is a node ELSE add is as the right
         * else - recursive call to the left IF there is a node ELSE add is as the left
         */
        if (curr.val === val) {
            console.log(`ERROR: you are trying to add a value (${val}) that already exists in the BTS`);
            return this;
        } else if (val > curr.val) { // we want to think about going to the right

            // ONLY recursivly call to the right if there is a node to move to 
            // else create a new TreeNode and set is a the currents right node
            if (curr.right != null) {
                this.insert(val, curr.right);
            } else {
                curr.right = new TreeNode(val);
            }
        } else { // we want to think about going to the left
            if (curr.left != null) {
                this.insert(val, curr.left);
            } else {
                curr.left = new TreeNode(val)
            }
        }
        return this;
    }

    /**
     * "Waterfall"
     * Top-down
     * 
     * call this function to print the tree's preorder
     * the function looks at the root
     * adds to the array
     * looks if can move left, (moves)
     * adds to the array and continues to move left until it can't
     * then looks right does similary stuff
     * then moves backwards one and goes as far right as possible 
     * adding to the array each time
     * @param { TreeNode } curr params used for recursion
     * @param { number[] } arr params used for recursion
     * @returns { number[] } an array of the BTS's preordered values
     */
    preOrder = (curr = this.root, arr = []) => {
        // edge case check
        if (this.isEmpty()) {
            console.log("no Nodes in this BTS");
            return this;
        }

        arr.push(curr.val);
        if (curr.left != null) {
            this.preOrder(curr.left, arr);
        }
        if (curr.right != null) {
            this.preOrder(curr.right, arr);
        }
        // base case
        if (curr.left === null && curr.right === null) {
            return;
        }
        return arr;
    }

    /**
     * lest to greatest
     * @param { TreeNode } curr 
     * @param { number[] } arr 
     * @returns { number[] }an array of the BTS's values in order
     */
    inorder = (curr = this.root, arr = []) => {
        // edge case check
        if (this.isEmpty()) {
            console.log("no Nodes in this BTS");
            return this;
        }

        // if I can go left, move left
        if (curr.left != null) {
            this.inorder(curr.left, arr);
        }

        // now that we are as far left into the tree as possible
        // we can push into the array
        arr.push(curr.val);

        // now continue and move over right ONCE, then the recurisive 
        // will then look again at going the most left and push and 
        // then move over right ONCE more
        if (curr.right != null) {
            this.inorder(curr.right, arr);
        }

        return arr;
    }

    /**
     * Go as far left, and bottom leaf then add to the array
     * (bottom to top...ish)
     * @param { TreeNode } curr 
     * @param { number[] } arr
     * @returns { number[] }an array of values from the BTS Post order
     */
    postOrder = (curr = this.root, arr = []) => {
        // edge case check
        if (this.isEmpty()) {
            console.log("no Nodes in this BTS");
            return this;
        }

        // go as far left as possible
        if (curr.left != null) {
            this.postOrder(curr.left, arr);
        }
        // then go right ONCE recursivley look/move left
        if (curr.right != null) {
            this.postOrder(curr.right, arr);
        }
        // then push to the arr
        arr.push(curr.val);
        return arr;
    }

    /**
     * call this function with the number value you are looking for in the BTS
     * it will return that node
     * it is dependent on the tree being BINARY => everything to the right is greater than
     * everything to the left is less
     * Returns false if val does not exits
     * @param { number } val : the value you are searching for
     * @param { TreeNode } curr used for recursion
     * @returns { TreeNode } found node
     */
    findOne = (val, curr = this.root, ans) => {
        // empty edge case
        if (this.isEmpty()) {
            console.log("BTS has no nodes");
            return false;
        }

        /**
         * if - case where the node does not exist and given an error
         * else if - checks if we found the val
         * else if - returns either false or the node after moving to the right
         * else if - returns either false or the node after moving to the left
         */
        if (curr === null) {
            console.log(`the values does not exits, add it using the .insert(${val}) method`);
            return false;
        } else if (val === curr.val) {
            return curr;
        } else if (val > curr.val) {
            return this.findOne(val, curr.right, ans);
        } else {
            return this.findOne(val, curr.left, ans);
        }
    }

    /**
     * created this fucntion to help reduce repeated code
     * and is only called with in the scope of the class
     * @returns { boolean } true => empty tree; false => tree with nodes
     */
    isEmpty = () => {
        if (this.root === null) return true;
        return false;
    }

    // DELETE
    /**
     * 
     * @param { number } val
     * @param { TreeNode } curr
     * @param { TreeNode } prev
     * @returns { TreeNode } returns the deleted node
     */
    deleteByVal = (val, curr = this.root, prev = null) => {

        // edge case
        if (this.isEmpty()) {
            console.log("No nodes in the BTS");
            return this;
        }

        if (this.findOne(val) === false) {
            console.log(`Node with val, ${val} does not exists`);
            return this;
        }

        if (curr.val === val) {
            /**
             * if - when you have two children pick the least of the right subtree  
             * else if - only has a right child
             * else if - only have a left child
             * else - is a leaf node
            */
            if (curr.right != null && curr.left != null) {
                console.log("two children");
                // console.log(curr.val);
                // console.log();
                // console.log(prev.val);
                // console.log();

                // edge case where we are deleting the root
                if(prev === null) {
                    console.log("deleting the root");
                    // find the new root
                    if(this.root.right != null && this.root.left != null) {
                        
                    }
                    return this;
                }
                prev = curr;
                let replace = curr.right;

                while(replace.left != null) {
                    prev = replace;
                    replace = replace.left;
                }
                // console.log(replace.val);

                curr.val = replace.val;
                if(prev === curr) {
                    curr.right = null;
                } else {
                    prev.left = null;
                }
                return this;
            } else if (curr.right != null) {
                console.log("only right child");
                // console.log(curr.val);
                // console.log();
                // console.log(prev.val);
                // console.log();

                // ask your self does prev. right or left need to be over written
                if(curr.val < prev.val) {
                    prev.left = curr.right;
                } else {
                    prev.righ = curr.right;
                }
                curr.righ = null;
                return this;
            } else if(curr.left != null) {
                console.log("only left child");
                // console.log(curr.val);
                // console.log();
                // console.log(prev.val);
                // console.log();

                // ask your self does prev. right or left need to be over written
                if(curr.val > prev.val) {
                    prev.right = curr.left;
                } else {
                    prev.left = curr.left;
                }
                curr.left = null;
                return this;
            } else {
                console.log("is leaf");
                // console.log(curr.val);
                // console.log();
                // console.log(prev.val);
                // console.log();

                // edge case of only one node in the BTS and removing it
                if(prev === null) {
                    this.root = null;
                    return this;
                }

                if(curr.val < prev.val) {
                    prev.left = null;
                } else {
                    prev.right = null;
                }

                return this;
            }

        } else if (val > curr.val) {
            // prev = curr;
            // curr = curr.right;
            this.deleteByVal(val, curr.right, curr);
        } else {
            // prev = curr;
            // curr = curr.left;
            this.deleteByVal(val, curr.left, curr);
        }
        return this;
    }


    /**
     * REBALANCING TREE FUNCTIONS
     */

    /**
     * FEATURES for BTS
     */

    // height





}

const myBTS = new BTS;
myBTS.insert(100);
const vals = [200, 300, 50, 40, 30, 20, 45, 55, 51, 57, 59, 22, 110, 101, 220, 225];
for (let n of vals) {
    myBTS.insert(n);
}

// console.log(myBTS.preOrder());
// printed the BTS preorder
// [
//     100,  50,  40,  30,  20,  22,
//     45,  55,  51,  57,  59, 200,
//     110, 101, 300, 220, 225
// ]

// console.log(myBTS.inorder());
// [
//     20,  22,  30,  40,  45,  50,
//     51,  55,  57,  59, 100, 101,
//    110, 200, 220, 225, 300
// ]

// console.log(myBTS.postOrder());
// [
//     22,  20,  30,  45,  40,  51,
//     59,  57,  55,  50, 101, 110,
//    225, 220, 300, 200, 100
// ]


console.log(myBTS.deleteByVal(101).deleteByVal(200).deleteByVal(100).inorder());
