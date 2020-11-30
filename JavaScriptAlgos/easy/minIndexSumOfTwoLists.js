/**599. Minimum Index Sum of Two Lists
 * Suppose Andy and Doris want to choose a restaurant for dinner, 
 * and they both have a list of favorite restaurants represented by strings.
 * 
 * You need to help them find out their common interest with the 
 * least list index sum. If there is a choice tie between answers, 
 * output all of them with no order requirement. You could assume 
 * there always exists an answer.
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    // unique movies they both like (key,val) pairs of 
    // "movie title" : indexSum // line 23
    let dict = {}, 
        min = (list1.length + list2.length), 
        movies = []; // array to return
    for(let i = 0; i < list1.length; i++) {
        let movie = list1[i];
        let j = list2.indexOf(movie); 
        if(j != -1) {
            dict[movie] = (i + j);
        }
    }
    // starting with the min being the max length of 
    // both list, we min is reset, reset the movies array
    for(let movie in dict) {
        if(dict[movie] < min) {
            min = dict[movie];
            movies = [];
            movies.push(movie);
        } else if(dict[movie] === min) {
            movies.push(movie);
        }
    }
    return movies;
    /**
     * Runtime: 104 ms, faster than 87.61% of JavaScript online submissions for Minimum Index Sum of Two Lists.
     * Memory Usage: 45.9 MB, less than 74.78% of JavaScript online submissions for Minimum Index Sum of Two Lists.
     */
};
/**
 * Example 1:
 * 
 * Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
 * Output: ["Shogun"]
 * Explanation: The only restaurant they both like is "Shogun".
 * Example 2:
 * 
 * Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]
 * Output: ["Shogun"]
 * Explanation: The restaurant they both like and have the least index sum is "Shogun" with index sum 1 (0+1).
 * Example 3:
 * 
 * Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Burger King","Tapioca Express","Shogun"]
 * Output: ["KFC","Burger King","Tapioca Express","Shogun"]
 * Example 4:
 * 
 * Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KNN","KFC","Burger King","Tapioca Express","Shogun"]
 * Output: ["KFC","Burger King","Tapioca Express","Shogun"]
 * Example 5:
 * 
 * Input: list1 = ["KFC"], list2 = ["KFC"]
 * Output: ["KFC"]
 */