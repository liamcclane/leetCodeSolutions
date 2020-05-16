/**925. Long Pressed Name
 * Your friend is typing his name into a keyboard.  
 * Sometimes, when typing a character c, the key might get long pressed, 
 * and the character will be typed 1 or more times.
 * 
 * You examine the typed characters of the keyboard.  
 * Return True if it is possible that it was your friends name, 
 * with some characters (possibly none) being long pressed.
 *  
 * 
 * Example 1:
 * 
 * Input: name = "alex", typed = "aaleex"
 * Output: true
 * Explanation: 'a' and 'e' in 'alex' were long pressed.
 * 
 * Example 2:
 * 
 * Input: name = "saeed", typed = "ssaaedd"
 * Output: false
 * Explanation: 'e' must have been pressed twice, but it wasn't in the typed output.
 * 
 * Example 3:
 * 
 * Input: name = "leelee", typed = "lleeelee"
 * Output: true
 * 
 * Example 4:
 * 
 * Input: name = "laiden", typed = "laiden"
 * Output: true
 * Explanation: It's not necessary to long press any character.
 * 
 ************************
 * "lia"  "lllliiiiaaaa"
 *  *          *
 * 
 * in conclusion
 * we have moved the name pointer forward every time 
 * and then caught the j pointer up, make sure that 
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
    let j = 0;
    let ans = true;

    for (let c of name) {
        // if we have even gotten to the point where the second pointer has hit the end of the 
        // typed input, but not finished the name loop return false
        if (j === typed.length) return false;

        // IF the pointers are not looking at the same letter
        if (typed[j] != c) {
            // If j === 0 that means the first two letters of name and type never equalled each other => false
            // If typed[j-1] != typed[j] =>
            // that neither typed[j] is not equal to c nor equal to typed[j - 1] (the one previous behind it)
            if (j === 0 || typed[j - 1] != typed[j]) return false;

            // lets store the letter j is sitting on,
            // continue to increase j as long as the pointers letter is
            // equal to the one we stored, 
            // NOTE we cannot use c here because c != typed[j]
            let curr = typed[j];
            while (j < typed.length && typed[j] === curr) {
                j++;
            }
            // and the end of this while loop
            // we now have j = typed.length => false, since we haven't finished the name loop
            // or typed[j] != curr wherever it started, we are hoping that now
            // typed[j] === c, THEREFORE it if does not satisfy these two we can return false
            if (j === typed.length || typed[j] != c) return false
        }
        // ALWAYS increase the second pointer
        // since we have assured that now typed[j] = c after above manipulation
        // or never even stepping into the second if after the for loop
        j++;
    }
    let arr = [...typed.slice(j, typed.length)].map(ele => ele === name[name.length - 1]);
    // console.log(arr)
    for (let a of arr) {
        if (!a) ans = a;
    }
    // if(indT != )
    // if we have completed this for loop => we can assume that long keypress has passed all tests
    return ans;
};

/**
 * Below code failed
 * 
 * isLongPressedNameDict("kikcxmvzi","kiikcxxmmvvzz")
 * return false
 * @param {string} name 
 * @param {string} typed 
 * @returns {boolean} 
 */
const isLongPressedNameDict = (name, typed) => {
    if (typed.length < name.length) {
        return false;
    }
    let dictName = {}, dictTyped = {}, ans = true;
    // building into dictName
    for (let i = 0; i < name.length; i++) {
        let letter = name[i];
        if (letter in dictName) {
            dictName[letter]++;
        } else {
            dictName[letter] = 1;
        }
    }
    // building into the dictTyped
    for (let i = 0; i < typed.length; i++) {
        let letter = typed[i];
        if (letter in dictTyped) {
            dictTyped[letter]++;
        } else {
            dictTyped[letter] = 1;
        }
    }
    for (let key in dictTyped) {
        if (key in dictName) {
            // console.log(dictTyped[key] >= dictName[key]);
            if (ans) {
                ans = dictTyped[key] >= dictName[key]
            }
        } else {
            return false
        }
    }
    for (let key in dictName) {
        if (!(key in dictTyped)) {
            return false;
        }
    }
    return ans;
}
// console.log(`isLongPressedNameDict("alex", "aaleexxxx") `); // true
// console.log(`// true`); // true
// console.log(isLongPressedNameDict("alex", "aaleexxxxx")); // true

// console.log();
// console.log(`isLongPressedNameDict("saeed", "ssaaedd")`); // false
// console.log(`// false`); // false
// console.log(isLongPressedNameDict("saeed", "ssaaedd")); // false

// console.log();
// console.log(`isLongPressedNameDict("bob", "bobo" )`); // false
// console.log(`// false`); // false
// console.log(isLongPressedNameDict("bob", "bobo")); // false

// console.log();
// console.log(`isLongPressedNameDict("bob", "boob")`); // true
// console.log(`// true`); // true
// console.log(isLongPressedNameDict("bob", "boob")); // true

// console.log();
// console.log(`isLongPressedNameDict("book", "boook")`); // true
// console.log(`// true`); // true
// console.log(isLongPressedNameDict("book", "boook")); // true

// console.log();
// console.log(`isLongPressedNameDict("vtkgn", "vttkgnn")`);
// console.log(`// true`);
// console.log(isLongPressedNameDict("vtkgn", "vttkgnn")); // true

// console.log(); // true
// console.log(`isLongPressedNameDict("pyplrz", "ppyypllr")`); // false
// console.log(`// false`); // false
// console.log(isLongPressedNameDict("pyplrz", "ppyypllr")); // false

/**
 * name = "bob", typed ="boob"
 * true
 *
 *
 * name="bob", typed = "bobo"
 * false
 *
 *
 * ***********
 * "alex",  "aaleelx"
 *     *          *
 *
 *
 * ******
 * "saeed", "ssaaedd"
 *     *            *
  *
 */
/**
 * 
 * @param {string} name 
 * @param {string} typed 
 * @returns {boolean}
 */

const brokenEdgeCase = (name, typed) => {

    let indN = 0, indT = 0;
    let savedLetter = '';

    while (indN < name.length && indT < typed.length) {

        let currLetterN = name[indN], currLetterT = typed[indT];
        // console.log(`currLetterN : \t${currLetterN} \t${indN}`)
        // console.log(`currLetterT : \t${currLetterT} \t${indT}`)

        if (currLetterN === currLetterT) {       // if they are equal
            savedLetter = currLetterN;          // save the current name letter
            indN++;                             // then move both indices forward
            indT++;
        } else {                                // if they are not equal
            // console.log(`${currLetterT} = ${savedLetter}`);
            if (currLetterT == savedLetter) {   // 
                indT++;
            } else {
                // console.log("false here")
                return false;
            }
        }
        // console.log(`savedLetter : \t${savedLetter}`)
    }

    // if (indN === name.length && indT === typed.length) return true;

    // now we need to think about last letter edge cases

    let lastLetter = name[indN - 1];
    console.log(`lastLetter ${lastLetter}`);

    if (indN === name.length) {
        // if (indT === typed.length) return true
        while (indT < typed.length) {
            if (typed[indT] === lastLetter) indT++;
            else return false
        }
    }
    // console.log("false at end");
    // console.log(indN);
    // console.log(indT);
    return true;
}