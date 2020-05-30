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

/**
 * @function
 * myFilter: creates a new array with all elements that pass the test implemented by the provided function
 * 
 * @param {Array} Array to perform the operation on
 * @param {callback} Function to test each element of the array. Return true to keep the element, false otherwise
 * 
 * @returns {Array} A new array with the elements that pass the past. If no elements pass the test, an empty array will be returned
 */
function myFilter(arr, callback)
{
    var newArr = [];

    arr.forEach((item, index, arr) =>
    {
        // Callback can have 3 parameters:
        // - element: The current element being processed in the array
        // - index (optional): The index of the current element being processed in the array
        // - array (optional): The array myFilter() was called upon
        callback(item, index, arr) ? newArr.push(item) : newArr;
    });
    return newArr;
}

console.log("Default filter");
console.log(array.filter((x, index, arr) => x % 2 === 0));

console.log("\nCustom filter");
console.log(myFilter(array, (x, index, arr) => x % 2 === 0));

console.log("\n\n");

/**
 * @function
 * mySome: tests whether at least one element in the array passes the test implemented by the provided Function
 * 
 * @param {Array} Array to perform the operation on
 * @param {callback} Function to test for each element
 * 
 * @returns {boolean} true if the callback function returns a truthy value for at least one element in the array. Otherwise, false
 */
function mySome(arr, callback)
{
    let hasSome = false;

    arr.forEach((item, index, arr) =>
    {
        // Callback can have 3 parameters:
        // - element: The current element being processed in the array
        // - index (optional): The index of the current element being processed in the array
        // - array (optional): The array mySome() was called upon
        if(callback(item, index, arr)) hasSome = true;
    });
    return hasSome;
}

console.log("Default some");
console.log("Is there a 2: " + array.some(x => x === 2));

console.log("\nCustom some");
console.log("Is there a 2: " + mySome(array, x => x === 2));

console.log("\n\n");