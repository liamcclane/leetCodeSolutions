/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
    let s = n + "", str = s[s.length - 1];
    for(let i = s.length - 2, j = 1; i >= 0; i--, j++) {
        str = s[i] + ((j) % 3 == 0 ? "." : "") + str;
    }
    return str;
};
