/**
 *         1-2-2-2-3-3-4-5-nul
 * u-null  c f                
 *         u c f              
 *         u c   f            
 *         u c     f
 *         Want
           1-3-3-4-5-null
 u.next = f
 c = f
 f = f.next
           1-3-3-4-5-null
           u c f
           u c   f
           
 u.next = f
 c = f
 f = f.next
            1-4-5-null
            u c f
              u c f



    1-2-3-4-5-null
u-null  c f
      c f
        c f
          c f

    1-2-3-4-4-5
u-null  c f
    u c f
      u c f
        u c f
        u c    f
 */
const ListNode = require('../dataStructures/ListNode');
/**Remove Duplicates from Sorted List II - 82
 * Given a sorted linked list, delete all nodes that have duplicate numbers, 
 * leaving only distinct numbers from the original list.
 * 
 * Return the linked list sorted as well.
 * 
 * Example 1:
 * Input: 1->2->3->3->4->4->5
 * Output: 1->2->5
 * 
 * Example 2:
 * Input: 1->1->1->2->3
 * Output: 2->3
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (head === null) return head;
    // case where only two nodes exist and there are duplicates
    // um? I though this is the path where if we are passed a linked list like 1-> 1 -> null 
    if (head.next != null && head.val === head.next.val && head.next.next === null) {
        return null;
    }

    let u = null;
    let c = head;
    let f = head.next;
    // if (c.val != f.val) {
    //     c = c.next;
    //     f = f.next;
    //     // u = head;
    // }
    while (f.next != null) {
        if (c.val === f.val) {
            f = f.next;
        } else if (c.next != f && c.val != f.val) {
            // reassign
            if (u === null) {
                u = head;
            } else {
                u.next = f;
            }
            u = f;
            c = f;
            f = f.next;
        } else {
            // everything shifting
            if (u === null) {
                u = head
            } else {
                u = u.next;
            }
            c = c.next;
            f = f.next;
        }
        if (f) {
            // console.log(`unique = \t${u.val}`);
            // console.log(`current = \t${c.val}`);
            // console.log(`front = \t${f.val}`);
            // console.log();
        }
        // console.log("+-+--");
        // head.print();
        // console.log("+-+--");
    }
    // console.log("+-+--");
    // head.print();
    // console.log("+-+--");
    // this means that the entire list was the same number
    if (u === null) {
        return null;
    }
    if (c.val === u.val) {
        u.next = f;
    }
    return head;
    // head.next != null needs to be first in the conditions because if it doesn't exist it won't check the rest of the shit lol\ heard

    // by here we know that there are at least 2 or more nodes in the list 
};
console.log("*************");
console.log("Hi Ritz");
console.log("*************");
console.log();
console.log();
// all cases to consider
// 1-null
// 1-1-null
// 1-1-1-1-1-null
// 1-1-5-null
// 1-2-3-4-5-null



// // test case 0
// // all unique values
// // 1-2-3-4-5-null
// // returns 1-2-3-4-5-null
// const ex0 = new ListNode(101);
// for (let n of [102, 103, 104, 105]) {
//     ex0.add(n);
// }
// ex0.print();
// deleteDuplicates(ex0).print();
// console.log();

// // test case 1
// // 1-2-2-2-3-3-4-5-null
// // returns 1-4-5-null
// const ex1 = new ListNode(101);
// for (let n of [102, 102, 102, 103, 103, 104, 105]) {
//     ex1.add(n);
// }
// ex1.print();
// deleteDuplicates(ex1).print();
// console.log();

// // test case 2
// // 1-1-5-null
// // returns 5-null
// const ex2 = new ListNode(101);
// for (let n of [101, 105]) {
//     ex2.add(n);
// }
// ex2.print();
// deleteDuplicates(ex2).print();
// console.log();

// //test case 3
// // 1-1-1-1-1-1-1-null
// // returns null
// const ex3 = new ListNode(101);
// for (let n of [101, 101, 101, 101]) {
//     ex3.add(n);
// }
// ex3.print();
// console.log(deleteDuplicates(ex3));
// console.log();

// // test case 4
// // 1-1-null
// // returns null
// const ex4 = new ListNode(101);
// for (let n of [101]) {
//     ex4.add(n);
// }
// ex4.print();
// console.log(deleteDuplicates(ex4));
// console.log();

// // test case 5
// // 1-null
// const ex5 = new ListNode(101);
// ex5.print();
// console.log(deleteDuplicates(ex5));
// console.log();



function deleteDup(head) {
    // edge case for empty list or a single node in list
    if (head === null || head.next === null) return head;
    let u = null, c = head, f = head.next;
    while (f) {
        if (c.val != f.val && c.next != f) {
            // reassign shit
            console.log("reassign shit");
            if (u === null) {
                u = head;
            } else {
                u.next = f;
            }
            c = f;
            // f = f.next
        } else if (((u === null || u.next === c) && c.next === f) && c.val != f.val) {
            // everyone shifts
            console.log("everyone shifts");
            if (u === null) {
                u = head;
            } else {
                u = u.next;
            }
            c = c.next;
            // f = f.next;
        } else {
            console.log("font runs");
            // f = f.next;
        }
        f = f.next;
    }
    console.log("+-+-+");
    console.log(c.val);
    console.log(f);
    // head.print();
    console.log("+-+-+");
    if (u === null) return u;
    return head;
}















const deleteD = (head) => {
    if (head === null) return head;
    const dict = {};
    let runner = head;
    while (runner) {
        if (runner.val in dict) {
            dict[runner.val]++;
        } else {
            dict[runner.val] = 1;
        }
        runner = runner.next;
    }
    head = null;
    // let arr = Object.entries(dict).sort((ele)=>console.log(ele[0]));
    let arr = Object.entries(dict).sort((a, b) => { return (a[0] - b[0])});
    for (let [key, val] of arr) {
        if (val === 1) {
            if(head===null){
                head = new ListNode(Number(key));
                runner = head;
            } else {
                runner.next = new ListNode(Number(key));
                runner = runner.next;
            }
        }
    }
    if(head===null) return null

    return head;
}
// test case 0
// all unique values
// 1-2-3-4-5-null
// returns 1-2-3-4-5-null
const ex0 = new ListNode(-3);

for (let n of [-1,-1,0,0,0,0,0,2]) {
    ex0.add(n);
}
ex0.print();
deleteD(ex0).print();
console.log();

// // test case 1
// // 1-2-2-2-3-3-4-5-null
// // returns 1-4-5-null
// const ex1 = new ListNode(101);
// for (let n of [102, 102, 102, 103, 103, 104, 105]) {
//     ex1.add(n);
// }
// ex1.print();
// deleteD(ex1).print();
// console.log();

// // test case 2
// // 1-1-5-null
// // returns 5-null
// const ex2 = new ListNode(101);
// for (let n of [101, 105]) {
//     ex2.add(n);
// }
// ex2.print();
// // deleteD(ex2).print();
// console.log(deleteD(ex2));
// console.log();

// //test case 3
// // 1-1-1-1-1-1-1-null
// // returns null
// const ex3 = new ListNode(101);
// for (let n of [101, 101, 101, 101]) {
//     ex3.add(n);
// }
// ex3.print();
// console.log(deleteD(ex3));
// console.log();

// // test case 4
// // 1-1-null
// // returns null
// const ex4 = new ListNode(101);
// for (let n of [101]) {
//     ex4.add(n);
// }
// ex4.print();
// console.log(deleteD(ex4));
// console.log();

// // test case 5
// // 1-null
// const ex5 = new ListNode(101);
// ex5.print();
// console.log(deleteD(ex5));
// console.log();




