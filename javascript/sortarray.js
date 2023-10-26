function sortDescending(arr) {
    return arr.sort((a, b) => b - a);
}

let numbers = [5, 2, 8, 1, 7];
let sortedArray = sortDescending(numbers);
console.log(sortedArray);
