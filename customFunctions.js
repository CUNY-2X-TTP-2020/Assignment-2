let array = [1, 2, 3, 4];

/**
 * @function
 * myEach: executes a provided function once for each array element
 * 
 * @param {Array} Array to perform the operation on
 * @param {callback} Function to execute on each element
 * 
 * @returns {undefined}
 */
function myEach(arr, callback)
{
    for(let i = 0; i < arr.length; i++)
    {
        // Callback can have 3 parameters:
        // - currentValue: The current element being processed in the array
        // - index (optional): The index of currentValue in the array
        // - array (optional): The array myEach() was called upon
        callback(arr[i], i, arr);
    }
};

console.log("Default forEach");
array.forEach((x, index, arr) =>
{
    console.log(x + arr.length + index);
});

console.log("\nCustom forEach");
myEach(array, (x, index, arr) => 
{
    console.log(x + arr.length + index);
});

console.log("\n\n");

/**
 * @function
 * myMap: creates a new array populated with the results of calling a provided function on every element in the calling array
 * 
 * @param {Array} Array to perform the operation on
 * @param {callback} Function to execute on each element
 * 
 * @returns {Array} A new array with each element being the result of the callback function
 */
function myMap(arr, callback)
{
    var newArr = [];

    arr.forEach((item, index, arr) =>
    {
        // Callback can have 3 parameters:
        // - currentValue: The current element being processed in the array
        // - index (optional): The index of currentValue in the array
        // - array (optional): The array myMap() was called upon
        newArr.push(callback(item, index, arr));
    });
    return newArr;
};

console.log("Default map");
console.log(array.map((x, index, arr) => x + arr.length + index));

console.log("\nCustom map");
console.log(myMap(array, (x, index, arr) => x + arr.length + index));

console.log("\n\n");