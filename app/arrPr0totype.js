/**
 * Array Prototype
 * accept an array and return the array 
 * with multipling each of that element 
 * with 2.
 */
console.log("Array Prototype Example");
var obj = {};
obj= Array.prototype.multby = function () {
    let arr = new Array();
    for (let elements of this) {
        arr.push(elements * 2);
        //console.log(elements * 2);
    }
    return arr;
};

module.export = obj;