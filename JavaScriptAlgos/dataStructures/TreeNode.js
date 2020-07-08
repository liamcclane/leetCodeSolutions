module.exports = class TreeNode {
    constructor(val, left, right) {
        // this.val = val;
        // this.right = null;
        // this.left = null;
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
};