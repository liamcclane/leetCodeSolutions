module.exports = class TreeNode {
    constructor(val, left, right) {
        // this.val = val;
        // this.right = null;
        // this.left = null;
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
    // add = (val) => {
    //     if (!this.right && !this.left) {
    //         this.left = new TreeNode(val);
    //         return this;
    //     }
    //     if (this.left && !this.right) {
    //         this.right = new TreeNode(val);
    //         return this;
    //     }
    //     // let curr = this;
    //     // while(!curr) {
    //     //     curr = curr.left;
    //     // }
    // }
};