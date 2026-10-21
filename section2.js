function onlyEvenValues(array) {
    return array.filter(number => number % 2 === 0)
}
arr = onlyEvenValues([1, 2, 3, 4, 5, 6, 7, 8]);
// פלט: [2, 4, 6]
console.log(arr)