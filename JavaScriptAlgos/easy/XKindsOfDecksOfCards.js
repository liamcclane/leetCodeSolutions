/**914. X of a Kind in a Deck of Cards
 * In a deck of cards, each card has an integer written on it.
 * 
 * Return true if and only if you can choose X >= 2 such 
 * that it is possible to split the entire deck into 1 or more groups of cards, where:
 * 
 * Each group has exactly X cards.
 * All the cards in each group have the same integer.
 * 
 * Example 1:
 * 
 * Input: deck = [1,2,3,4,4,3,2,1]
 * Output: true
 * Explanation: Possible partition [1,1],[2,2],[3,3],[4,4].
 * 
 * Example 2:
 * 
 * Input: deck = [1,1,1,2,2,2,3,3]
 * Output: false´
 * Explanation: No possible partition.
 * 
 * Example 3:
 * 
 * Input: deck = [1]
 * Output: false
 * Explanation: No possible partition.
 * 
 * Example 4:
 * 
 * Input: deck = [1,1]
 * Output: true
 * Explanation: Possible partition [1,1].
 * 
 * Example 5:
 * 
 * Input: deck = [1,1,2,2,2,2]
 * Output: true
 * Explanation: Possible partition [1,1],[2,2],[2,2].
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    let dict = {};
    for (var i = 0; i < deck.length; i++) {
        var num = deck[i];
        dict[num] = (dict[num]) ? dict[num] + 1 : 1;
        //          (right here is the falsey statement)
        // if true  ? (returns!) dict[num] + 1
        // if false : (returns!) 1
        // into the 
        // dict[num] <= setter
    }
    // for(let d of deck){
    //     if(d in dict){
    //         dict[d]++
    //     } else {
    //         dict[d] = 1;
    //     }
    // }
    let max = 0;
    for(let key in dict) {
        max < dict[key] ? max = dict[key] : '';
    }
    console.log(dict);
    console.log(max);
    
    // let X = 2, l = deck.length;
    // while(X<l){
    //     for(let key in dict){
    //         if(dict[key] % X === 0) {
    //             continue;
    //         } else { break; }
    //     } 
    //     return true;
    // }
    // return false;
    
};