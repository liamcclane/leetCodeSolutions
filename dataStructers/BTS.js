/**
 * So TreeNode is what leet code calls the nodes
 * 
 */
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
     * @param {TreeNode} node
     * @param {number} val
     * @returns {} 
     */
    deleteByValDarrick = (node = this.root, val) => {
        // case with two children
        // case with one children
            // one child to the left
            // one child to the right
        // case with no children 

        // edge case of empty BTS
        if (node === null) {
            return null
        }

        let current = node;
        // if we have found the node we are trying to remove
        if (current.val === val) {
            // two children, 
                // traverse down the left branch of the desired node and 
                // replace the value with the bottom most val of left branch
                /**
                 * basically, go left once,
                 * then find the next smallest value..
                 */
            if (current.left && current.right) { // i think i need this.. good => I know... lolol
                // I think we need another pointer to run down and find the node we are swapping with
                // right? We move left once. Then move as far right down as we can
                // so, i think you can do it with left most value as well. and bc, when we set current variable, node already === the val..we only need one pointer to traverse
                current = current.right;
                while (current.left) {
                    current = current.left
                }
                node.val = current.val;
                node.right = this.deleteByValDarrick(node, current.val);
                return node
                    // now we need to delete the bottom most value that we used to swap 
                    // OH okay okay. 

            } else if(current.left) { // one child to the left - after value was found
                node = current.left
            } else if(current.right) { // one child to the right - after value was found
                node = current.right
            } else { //  no children - after value was found
                return null
                // what to do?
                // we need to reassign the node before the found value to point to null,
                // right?
                // yessss nice..
                // so how do we do that again..... lol right? shit
                // it feels stupid to carr around the prev the whole time just incase we hit a leaf node
                // unless that it is just what we have to do
                //  i don't think i ever used the prev variable... but now i don't remember how to do it hah
                // want to come back to it then and keep moving
                // okay good call
                // okay im gonna cheat and look at my notes
                // lol wait, maybe we can look at your folders at the same time. can you open another window of 
                // VS and try to host your own live share session?
                // idk if it will let you but maybe...
                /**
                 * Dude send it to me via slack
                 * I think it will be easier to click
                 * thanks
                 * 
                 * Error message
                 * 
                 * Session is not active. Please contact the session host for a new link.
                 * 
                 */

            }

        } else if (current.val < val) { // NOT FOUND - keep recusing
            // move down the tree to the ... right. Right? lol
            // i think you're right... lets keep going and see 
            // do a recursive call
            node.right = this.deleteByValDarrick(current.right, val);
            return node


            // what does line 267 do???!!
            // I guess we are returning the "popped" node then? I am confused
            // i think you are right... its a little fuzzy to me right now
            // I mean feel free to look at your old notes, bc I don't really remember either
            // this seems right... bc we are gonna keep traversing recursively until we reach our base case which is when node.val === val? 
            // or the case where the val does not exist...
            // should we make the recursive call only run if the node exits?
            
        } else { // current.val > val // NOT FOUND - keep recusing
            node.left = this.deleteByValDarrick(current.left, val);
            return node
        }


        // I have visual of the BTS I made an example of, I will send it to you via slack        cool
    }

    // honestly the delete below is hella messy

    // it looks like mine just with more console logs. maybe that's why its messy?
    // did you do it recurslvey? 
    // i did but i needed some help with the solution... so i looked it up once or twice hehe
    // okay I will watch master
    /**
     * 
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
                if (prev === null) {
                    console.log("deleting the root");
                    // find the new root
                    if (this.root.right != null && this.root.left != null) {

                    }
                    return this;
                }
                prev = curr;
                let replace = curr.right;

                while (replace.left != null) {
                    prev = replace;
                    replace = replace.left;
                }
                // console.log(replace.val);

                curr.val = replace.val;
                if (prev === curr) {
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
                if (curr.val < prev.val) {
                    prev.left = curr.right;
                } else {
                    prev.right = curr.right;
                }
                curr.right = null;
                return this;
            } else if (curr.left != null) {
                console.log("only left child");
                // console.log(curr.val);
                // console.log();
                // console.log(prev.val);
                // console.log();

                // ask your self does prev. right or left need to be over written
                if (curr.val > prev.val) {
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
                if (prev === null) {
                    this.root = null;
                    return this;
                }

                if (curr.val < prev.val) {
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


/**
 *  VIA DARRICK
    BST.prototype.delete = function (val) {
        var remove = function (node, val) {
            if (node === null) {
                return null
            }
            if (node.val === val) {
                // no children
                if (!node.left && !node.right) {
                    return null
                }
                // did you test this at all? i did... but not for many cases
                // one child
                else if (!node.left) {
                    return node.right
                }
                else if (!node.right) {
                    return node.left
                }
                // two children
                // looks like i fucked up already... ahah. forgot to go to the right node
                let pointer = node;
                pointer = pointer.right;
                // traverse left on the right tree branch
                while (pointer.left) {
                    pointer = pointer.left
                }
                // set node = left most leaflet from right branch
                node.val = pointer.val;
                // now remove the left most leaflet from the right branch
                node.right = remove(node.right, pointer.val)
                return node
            } else if (val < node.val) {
                node.left = remove(node.left, val);
                return node
            } else if (val > node.val) {
                node.right = remove(node.right, val);
                return node
            }
        }
        return remove(this.root, val);
    }


 */