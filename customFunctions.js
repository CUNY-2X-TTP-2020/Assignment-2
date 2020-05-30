let array = [1, 2, 3, 4];

/**
 * @function
 * myEach: executes a provided function once for each array element
 * 
 * @param {Array} arr Array to perform the operation on
 * @param {Function} callback Function to execute on each element
 *
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
 * @param {Array} arr Array to perform the operation on
 * @param {Function} callback Function to execute on each element
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
 * @param {Array} arr Array to perform the operation on
 * @param {Function} callback Function to test each element of the array. Return true to keep the element, false otherwise
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
 * @param {Array} arr Array to perform the operation on
 * @param {Function} callback Function to test for each element
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
 * @param {Array} arr Array to perform the operation on
 * @param {Function} callback Function to test for each element
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
 * @param {Array} arr Array to perform the operation on
 * @param {Function} callback Function to test for each element
 * @param {Number} initialValue (Optional) Initial value to start accumulating from
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
 * @param {Array} arr Array to perform the operation on
 * @param {Object} valueToFind The value to search for
 * @param {Number} fromIndex (Optional) The position in the array which to begin searching for valueToFind. Defaults to 0
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

/**
 * @function
 * myIndexOf: returns the first index at which a given element can be found in the array, or -1 if it is not present
 * 
 * @param {Array} arr Array to perform the operation on
 * @param {Object} searchElement Element to locate in the array
 * @param {Number} fromIndex (Optional) The index to start the search at. If the index is greater than or equal to the array's length, -1 is returned, which means the array will not be searched
 * 
 * @returns {Number} the first index of the element in the array, -1 if not found
 */
function myIndexOf(arr, searchElement, fromIndex)
{
    let startingIndex = fromIndex === undefined ? 0 : fromIndex;

    for(let i = startingIndex; i < arr.length; i++)
    {
        if(searchElement === arr[i]) return i;
    }
    return -1;
}

console.log("Default indexOf");
console.log("Index of 4: " + array.indexOf(4));
console.log("Index of 5: " + array.indexOf(5));

console.log("\nCustom indexOf");
console.log("Index of 4: " + myIndexOf(array, 4));
console.log("Index of 5: " + myIndexOf(array, 5));

console.log("\n\n");

/**
 * @function
 * myPush: adds one or more elements to the end of an array and returns the new length of the array
 * 
 * @param {Array} arr Array to perform the operation on
 * @param {...Object} elements The element(s) to add to the end of the array
 * 
 * @returns {Number} The new length of the array
 */
function myPush(arr, ...elements)
{
    arr = new Array(...arr, ...elements); 
    return arr.length;
}

console.log("Default push");
console.log("Before pushing: " + array);
console.log("Length of new array: " + array.push(5, 6, 7, 8, 9));

array = [1, 2, 3, 4]

console.log("\nCustom push");
console.log("Before pushing: " + array);
console.log("Length of new array: " + myPush(array, 5, 6, 7, 8, 9));

console.log("\n\n");

/**
 * @function
 * myLastIndexOf: returns the last index at which a given elment can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex
 * 
 * @param {Array} arr Array to perform the operation on
 * @param {Object} searchElement Element to locate in the array
 * @param {Number} fromIndex (Optional) The index at which to start searching backwards. Defaults to (arr.length - 1). If the index is greater than or equal to the length of the array, the whole array will be searched
 * 
 * @returns {Number} the last index of the element in the array, -1 if not found
 */
function myLastIndexOf(arr, searchElement, fromIndex)
{
    let startingIndex = fromIndex === undefined ? arr.length - 1 : fromIndex;

    for(let i = startingIndex; i >= 0; i--)
    {
        if(searchElement === arr[i]) return i;
    }
    return -1;
}

let array2 = [2, 4, 6, 4, 2];

console.log("Default lastIndexOf");
console.log("Last index of 4: " + array2.lastIndexOf(4));
console.log("Last index of 4 starting from index 2: " + array2.lastIndexOf(4, 2));

console.log("\nCustom lastIndexOf");
console.log("Last index of 4: " + myLastIndexOf(array2, 4));
console.log("Last index of 4 starting from index 2: " + myLastIndexOf(array2, 4, 2));

console.log("\n\n");