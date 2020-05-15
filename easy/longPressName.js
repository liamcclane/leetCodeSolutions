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
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
    if (typed.length < name.length) {
        return false;
    }
    let dictName = {}, dictTyped = {}, ans = false;
    // building into dictName
    for (let i = 0; i < name.length; i++) {
        let letter = name[i];
        if (letter in dictName) {
            dictName[letter].push(i);
        } else {
            dictName[letter] = [i];
        }
    }
    // building into the dictTyped
    for (let i = 0; i < typed.length; i++) {
        let letter = typed[i];
        if (letter in dictTyped) {
            dictTyped[letter].push(i);
        } else {
            dictTyped[letter] = [i];
        }
    }
    // checking if all the same amount of letters occur in both dict
    if (Object.entries(dictTyped).length != Object.entries(dictName).length) {
        console.log(Object.entries(dictTyped))
        console.log(Object.entries(dictName))
        return false;
    }


    for (let [key, val] of Object.entries(dictTyped)) {
        if (key in dictName) {
            let amountOfLetterTyped = val.length;
            let amountOFLetterName = dictName[key].length;
            if (amountOFLetterName > amountOfLetterTyped) {
                console.log("false here");
                console.log(key)
                return false;
            }
        } else {
            console.log("false *** here")
            console.log(key)
            return false;
        }
    }


    /**
     * Object.entries(dictTyped) 
     * looks like
     * [ [s,[0,1]] , [a,[2,3]], [e, [4]], .... ]
     */

    /** From Ex2
     * Input: name = "saeed", typed = "ssaaedd"
     * dictName = {
     *  s : [0]
     *  a : [1]
     *  e : [2,3]
     *  d : [4]
     * }
     * 
     * dictTyped = {
     *  s: [0,1],
     *  a: [2,3],
     *  e: [4],
     *  d: [5,6]
     * }
     */


    // let's check that all the letters are the same from both dictName and dictTyped


    // console.log(`dict at line 57`);
    // console.log(dict);



};



const whatever = (name, typed) => {

    let indN = 0, indT = 0;

    while (indN < name.length && indT < typed.length) {

        let letterN = name[indN];
        let letterFrontN = name[indN + 1];
        let letterT = typed[indT];
        let letterFrontT = typed[indT + 1];

        if (letterT != letterN && letterT != letterFrontN) {
            console.log("error here");
            return false
        }

        if (letterN != letterT) {
            if (letterFrontN == letterT) {
                indN++;
            } else {
                indT++;
            }
            // one of them should increase, or kick out as false
        } else {
            indN++;
            indT++;
        }
    }
    // if(indN < name.length) {
    //     console.log(indN);
    //     console.log(indT);
    //     return false;
    // }
    return true;

}
// console.log(whatever("alex",  "aaleelx"));

console.log(whatever("alex", "aaleex"));
console.log(whatever("saeed", "ssaaedd"));
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
/***
 *
 * Okay, I think it wants to confirm: "is this your friends name with or without long pressed charatcers?" So #2 doesnt
 * work because it did not have two ee's
 *
 * cool, we can try!! Sudoku may have to wait Haha
 * sorry to strong arm away from that, I just feel intimidated jumping into meduims
 *
 * once sec... sorry I got a call
 *
 *
 *
 * No worries. I think it's a bit harder than I am comfortable with too. It'll be good for us
 * to have some time to play around in our mind before we actually try to code it
 *
 * //should we disect the string and put it into a dictionary? YES
 * lets take the actaull name and dictorary it
 * we have to take into account the correct amount of letters as well as the order for the typed area
 * so that might be 'tricky'
 *
 * I have to answer this eamil really quickly but i'll be back don't wait for me :) if you need to run it maybe just copy
 * past to jsbin
 *
 * the value of the key in name must be AT LEAST the value of the key in typed.YES Typed can have more but not lessYES
 * Cool, i'm wokring on my white board at home
 *
 * lucky
 *
 * Got it :)
 *
 * YENoS worries; take your time
 *
 *
 *
 */



/**Lia's 'white board'
 */
/**
 * Before doing something to the already made key val paris
 * think about
 *
 * if(key in dict){
 *  // do something to the already made key
 *  // here we want to push into the val of the dict
 * } else {
 *  // create it!
    *  //, i want to make an array for the value, right? YES,  the array contians the indecies of the letter yes
    * // what you are talking about here though is more of the intial making of the key and val pairs
 * }
//         /**Example
//          *
//          * name = "waterwell"
//          *
//          * dict = {
//          *  w: [0,5],
//          *  a: [1],
//          *  ...,
//          *  'l' : [7,8]    :))
//          * }
//          *  nice dude!
 *
 * lol sorry
 *
 */ //okay, let me think, i need to remember how to do it, no worries, i;m rusty and it takes a minute




// you write it above :)

//          */
// for(let letter of name) {
//     if(letter in dict) {
//         dict[letter]++; 
//         //It would be good to check if the letter was already in the dict in another place or if it's doubled
//         // good call, not sure how we'll do that just yet Haha
//         // maybe we save the index of all these letters... Oh then we will also have the amount of that letter in the word


//     } else {
//         dict[letter] = 1;
//     }
// }

/**for example 2
 * Input: name = "saeed", typed = "ssaaedd"
 * dict = {
 *     's' : 1,
 *     'a' : 1,
 *     'e' : 2,
 *     'd' : 1
 *  }
 */