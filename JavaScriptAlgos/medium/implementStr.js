var strStr = function (haystack, needle) {
    if (haystack === '') return 0;
    // if()
    if (!(haystack.includes(needle))) return -1;
    let start = haystack.indexOf(needle, needle.length);
    let j = 0;
    // console.log(start);
    if (start != 0) {
        for (let i = start; i < needle.length; i++) {
            // console.log(haystack);
            if (haystack[i] == needle[j]) {
                j++;
            } else {
                haystack = haystack.slice(0, i).concat(haystack.slice(i + 1, haystack.length));
                continue;
            }
        }
    }
    return start;
};
let ex = "helohello", n = "ll";
console.log(strStr("aaaa","a"));
console.log("aaaaa".indexOf("a", 1))
