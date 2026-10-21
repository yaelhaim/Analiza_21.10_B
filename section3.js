function showFirstAndLast(array) {
    return array.filter((element, index) =>
        typeof element === "string" &&
        (index === 0 || index === array.length - 1)
    );
}
arr = showFirstAndLast(['hello', 1, 2, 'world']);

console.log(arr)
    // פלט: ['hello', 'world']