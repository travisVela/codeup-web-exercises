(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var names = ['Travis', 'Mike', 'Marcus', 'Jeremy'];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log('\n');
    console.log('array length');
    console.log('========');
    console.log('\n');

    console.log('The number of elements in the names array is '+ names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log('\n');
    console.log('logged individually');
    console.log('========');
    console.log('\n');

    console.log('The name of each index 1 is ' + names[0]);
    console.log('The name of each index 2 is ' + names[1]);
    console.log('The name of each index 3 is ' + names[2]);
    console.log('The name of each index 4 is ' + names[3 ]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    console.log('\n');
    console.log('for loop');
    console.log('========');
    console.log('\n');

    for (var i = 0; i < names.length; i++) {
        console.log('The name at index ' + i + ' is ' + names[i]);
    }


    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    console.log('\n');
    console.log('forEach');
    console.log('========');
    console.log('\n');

    names.forEach(function(name) {
        console.log('Here is a name in names ' + name);
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    console.log('\n');
    console.log('functions');
    console.log('========');
    console.log('\n');

    function first(array) {
        return array[0];
    }
    function second(array) {
        return array[1];
    }
    function last(array) {
        return array[array.length - 1];

    }
    console.log('The frist name in the array is ' + first(names));
    console.log('The secind name in the array is ' + second(names));
    console.log('The last name in the array is ' + last(names));
})();
