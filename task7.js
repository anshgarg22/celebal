var myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join(","));
console.log(myColor.toString());
console.log(myColor.join("+"));

var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var freq = {};
var maxItem = arr1[0];
var maxCount = 1;
for (var i = 0; i < arr1.length; i++) {
    var item = arr1[i];
    freq[item] = (freq[item] || 0) + 1;
    if (freq[item] > maxCount) {
        maxItem = item;
        maxCount = freq[item];
    }
}
console.log(maxItem + " ( " + maxCount + " times )");

function truncateString(str, num) {
    return str.slice(0, num);
}
console.log(truncateString("Robin Singh", 4));

function capitalizeWords(str) {
    return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalizeWords('js string exercises'));

function arrBetween(a, b, arr) {
    return arr.filter(x => x > a && x < b);
}
console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7]));
console.log(arrBetween(1, 10, [1, 10, 25, 8, 11, 6]));
console.log(arrBetween(7, 32, [1, 2, 3, 78]));

function findIndex(arr, val) {
    return arr.indexOf(val);
}
console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));
console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));
console.log(findIndex(["a", "g", "y", "d"], "d"));
console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"));
