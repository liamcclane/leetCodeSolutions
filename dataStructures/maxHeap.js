/**
 * 
 */
class minHeap {

    items;

    constructor() {
        this.items = [null];
    }

    add = (val) =>{
        if(this.items.length == 1) {
            this.items.push(val);
            return this;
        }

        return this;
    }
    
}