/**1189. Maximum Number of Balloons
 * Given a string text, you want to use the characters of 
 * text to form as many instances of the word "balloon" as possible.
 * 
 * You can use each character in text at most once. 
 * Return the maximum number of instances that can be formed.
 * 
 * Example 1:
 * Input: text = "nlaebolko"
 * Output: 1
 * 
 * Example 2:
 * Input: text = "loonbalxballpoon"
 * Output: 2
 * 
 * Example 3:
 * Input: text = "leetcode"
 * Output: 0
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
    let dict = {};
    for (let i of "balloon") {
        dict[i] = 0;
    }
    // dict = { "b" : 0, "a" : 0, "l" : 0, "o" : 0, "n" : 0 };
    // add to the dictionary 
    for (let i of text) {
        if (i in dict) {
            dict[i]++;
        }
    }
    // after this for loop with example "leetcode" dict will look like
    // dict = { "b": 0, "a": 0, "l": 1, "o": 1, "n": 0 };

    /// after this for loop with example "nlaebolko" dict will look like
    // dict = { "b": 1, "a": 1, "l": 2, "o": 1, "n": 1 };
    // we looked though "k" and "e", but it wasn't already in the dict as a key, so 
    // we did nothing 

    // loop though the keys.
    // returning the max number of times we can make the word balloon
    // starting at Infinity, find the least amount of times we can make the word "balloon"
    let maxNumOfBalloon = Infinity;
    for (let key in dict) {
        // if any of them are still zero, then return 0
        if (dict[key] === 0) { return 0; }
        if (key == "l" || key == "o") {
            // something more special, because we need an even number of them to 
            // "create" another word balloon
            // Math.floor because if we have 5 "l"'s in text
            // we can only build the word balloon 2 times
            if (maxNumOfBalloon > Math.floor(dict[key] / 2)) {
                // if that is greater than what we are storing, then override
                maxNumOfBalloon = Math.floor(dict[key] / 2);
            }
        } else if (maxNumOfBalloon > dict[key]) {
            maxNumOfBalloon = dict[key];
        }
    }
    return maxNumOfBalloon;
    /**
     * Runtime: 84 ms, faster than 60.14% of JavaScript online submissions for Maximum Number of Balloons.
     * Memory Usage: 38.7 MB, less than 21.71% of JavaScript online submissions for Maximum Number of Balloons.
     */
};


// console.log(maxNumberOfBalloons("waterbottelballoonjumpingmonkeybaloonnoollab"), "should be 3");
// console.log(maxNumberOfBalloons("leetcode"), "should be 0");
// console.log(maxNumberOfBalloons("aboolln"), "should be 1");
// console.log(maxNumberOfBalloons("balon"), "should be 0");
// console.log(maxNumberOfBalloons("bbbbalon"), "should be 0");

/**
 * Lia's try
 */
const liaBalloons = (text) => {
    if (text.length < "balloon".length) { return 0; }
    let count = Math.floor(text.length / "balloon".length);
    let balloonDict = {};
    let textDict = {};
    // build the balloon dict
    for (let letter of "balloon") {
        if (letter in balloonDict) {
            balloonDict[letter]++;
        } else {
            balloonDict[letter] = 1;
        }
    }

    // here I filtered out the textDict, to only build with letters from balloon
    // with first if
    for (let letter of text) {
        if (letter in balloonDict) {
            if (letter in textDict) {
                textDict[letter]++;
            } else {
                textDict[letter] = 1;
            }
        }
    }

    // first we need to check if both dicts have all the 
    //  letters necessary to make at lease one balloon
    if (Object.keys(balloonDict).length != Object.keys(textDict).length) {
        return 0;
    }

    // above count starts high, with the most potential, then gets reduced as we loop though
    for (let key in balloonDict) {
        let newAmount = Math.floor(textDict[key] / balloonDict[key]);
        if (count < newAmount) {
            count = newAmount;
        }
    }
    return count;
    /**
     * Runtime: 88 ms, faster than 46.98% of JavaScript online submissions for Maximum Number of Balloons.
     * Memory Usage: 39 MB, less than 15.66% of JavaScript online submissions for Maximum Number of Balloons.
     */
}
// console.log("***Lia function****");
// console.log(maxNumberOfBalloons("waterbottelballoonjumpingmonkeybaloonnoollab"), "should be 3");
// console.log(maxNumberOfBalloons("leetcode"), "should be 0");
// console.log(maxNumberOfBalloons("aboolln"), "should be 1");
// console.log(maxNumberOfBalloons("balon"), "should be 0");
// console.log(maxNumberOfBalloons("bbbbalon"), "should be 0");

// let ex = "krhizmmgmcrecekgyljqkldocicziihtgpqwbticmvuyznragqoyrukzopfmjhjjxemsxmrsxuqmnkrzhgvtgdgtykhcglurvppvcwhrhrjoislonvvglhdciilduvuiebmffaagxerjeewmtcwmhmtwlxtvlbocczlrppmpjbpnifqtlninyzjtmazxdbzwxthpvrfulvrspycqcghuopjirzoeuqhetnbrcdakilzmklxwudxxhwilasbjjhhfgghogqoofsufysmcqeilaivtmfziumjloewbkjvaahsaaggteppqyuoylgpbdwqubaalfwcqrjeycjbbpifjbpigjdnnswocusuprydgrtxuaojeriigwumlovafxnpibjopjfqzrwemoinmptxddgcszmfprdrichjeqcvikynzigleaajcysusqasqadjemgnyvmzmbcfrttrzonwafrnedglhpudovigwvpimttiketopkvqw";
// console.log(maxNumberOfBalloons(ex));


/**tags for later look up
 * collaboration
 * multipleSubmissions
 */