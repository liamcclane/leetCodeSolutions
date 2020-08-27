const TreeNode = require('./../dataStructures/TreeNode');
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**606. Construct String from Binary Tree
 *  You need to construct a string consists of parenthesis and \
 * integers from a binary tree with the preorder traversing way.
 *  
 * The null node needs to be represented by empty parenthesis pair "()". 
 * And you need to omit all the empty parenthesis pairs that don't \
 * affect the one-to-one mapping relationship between the string and the original binary tree.
 * 
 * Example 1
 * Input: Binary tree: [1,2,3,4]
 *        1
 *      /   \
 *     2     3
 *    /    
 *   4     
 * 
 * Output: "1(2(4))(3)"
 * 
 * Explanation: Originally it needs to be "1(2(4)())(3()())", 
 * but you need to omit all the unnecessary empty parenthesis pairs. 
 * And it will be "1(2(4))(3)".
 * Example 2:
 * Input: Binary tree: [1,2,3,null,4]
 *        1
 *      /   \
 *     2     3
 *      \  
 *       4 
 * 
 * Output: "1(2()(4))(3)"
 * 
 * Explanation: Almost the same as the first example, 
 * except we can't omit the first parenthesis pair to break the one-to-one mapping relationship between the input and the output.
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function (t) {
    // let ansStr = "";
    let s = "";
    const helper = (node, str) => {
        console.log(str, "str: ", node.val, " node.val");
        // null
        // node -> left and right empty
        // node -> left empty
        // node -> right empty
        // node -> full
        // console.log(str, "str: ", node.val, " node.val");
        if (node == undefined) { return ")" };
        if(node.right && node.left) {
            str += "(" + node.val.toString();
            helper(node.left, str);
            str += ")";
            helper(node.right, "(" + str);
            return str;
        }

        if(node.left && !node.right) {
            str += "(" + node.val.toString() + ")";
            return str;
        }
        if(!node.left && !node.right) {
            str += "(" + node.val.toString() + ")";
            return str;
        }
    }

    s = helper(t, s);
    console.log(`\t s is now`);
    return s;
};

let ex1 = new TreeNode(1);
ex1.left = new TreeNode(2);
ex1.right = new TreeNode(3);
ex1.left.left = new TreeNode(4);

let ex2 = new TreeNode(1);
ex2.left = new TreeNode(2);
ex2.right = new TreeNode(3);
ex2.left.right = new TreeNode(4);

console.log(tree2str(ex1));
// console.log(tree2str(ex2));
/**tags for later look up
 * unfinished
 */