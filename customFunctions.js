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

/**
 * @function
 * myEvery: tests whether all elements in the array pass the test implemented by the provided function
 * 
 * @param {Array} Array to perform the operation on
 * @param {callback} Function to test for each element
 * 
 * @returns {boolean} true if the callback function returns a truthy value for every array element. Otherwise, false
 */
function myEvery(arr, callback)
{
    let hasEvery = true;

    arr.forEach((item, index, arr) =>
    {
        // Callback can have 3 parameters:
        // - element: The current element being processed in the array
        // - index (optional): The index of the current element being processed in the array
        // - array (optional): The array myEvery() was called upon
        if(!callback(item, index, arr)) hasEvery = false;
    });
    return hasEvery;
}

console.log("Default every");
console.log("Are all numbers less than 5: " + array.every(x => x < 5));
console.log("Are all numbers greater than 3: " + array.every(x => x > 3));

console.log("\nCustom every");
console.log("Are all numbers less than 5: " + myEvery(array, x => x < 5));
console.log("Are all numbers greater than 3: " + myEvery(array, x => x > 3));

console.log("\n\n");

/**
 * @function
 * myReduce: executes a reducer function (that you provide) on each element of the array, resulting in a single output value
 * 
 * @param {Array} Array to perform the operation on
 * @param {callback} Function to test for each element
 * @param {Number} (Optional) Initial value to start accumulating from
 * 
 * @returns {Number} the single value that results from the reduction
 */
function myReduce(arr, callback, initialValue)
{
    if(arr.length === 0) return initialValue;
    var accumulator;

    arr.forEach((item, index, arr) =>
    {
        if(index === 0) (initialValue !== undefined || null) ? accumulator = initialValue : accumulator = 0;
        // Callback can have 4 parameters:
        // - accumulator: The accumulated return values of callback. It is the accumulated value previously returned in the last invotation of the callback, or initialValue, if it was supplied
        // - currentValue: The current element being processed in the array
        // - index (optional): The index of currentValue being processed in the array
        // - array (optional): The array myReduce() was called upon
        accumulator = callback(accumulator, item, index, arr);
    });
    return accumulator;
}

console.log("Default reduce");
console.log("Sum of all values in array: " + array.reduce((count, current) =>
{
    count += current;
    return count;
}));

console.log("\nCustom reduce");
console.log("Sum of all values in array: " + myReduce(array, (count, current) =>
{
    count += current;
    return count;
}));

console.log("\n\n");

/**
 * @function
 * myIncludes: determines whether an array includes a certain value among its entries, returning true or false as appropriate
 * 
 * @param {Array} Array to perform the operation on
 * @param {Object} The value to search for
 * @param {Number} (Optional) The position in the array which to begin searching for valueToFind. Defaults to 0
 * 
 * @returns {Boolean} which is true if the value valueToFind is found within the array (or the part of the array indicated by the index fromIndex, if specified)
 */
function myIncludes(arr, valueToFind, fromIndex)
{
    let startingIndex = fromIndex === undefined ? 0 : fromIndex;

    for(let i = startingIndex; i < arr.length; i++)
    {
        if(valueToFind === arr[i]) return true;
    }
    return false;
}

console.log("Default includes");
console.log("Does the array include 3: " + array.includes(3));

console.log("\nCustom includes")
console.log("Does the array include 3: " + myIncludes(array, 3));

console.log("\n\n");