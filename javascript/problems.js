/**
 * Problem #1
 *
 * Finish defining the "sum" function below by returning the total of an
 * arbitrary number of numeric arguments.
 *
 * Each argument should be a Number.
 */
function sum() {
    // Write your solution to Problem #1 below this
}



/**
 * Problem #2
 *
 * Finish defining the "forEach" function below by iterating over the
 * "collection" and calling the "iteratee" for each item in the "collection".
 *
 * The "collection" should be either an Object or an Array.
 * The "iteratee" should be a Function.
 *
 * The "iteratee" should be called once for each item in the "collection", and
 * should be called with two arguments. The first argument the "iteratee" should
 * be called with is the value of an item in the "collection", and the second
 * argument should be the index or key from the "collection" that corresponds
 * to that value.
 */
function forEach(collection, iteratee) {
    // Write your solution to Problem #2 here
}



/**
 * Problem #3
 *
 * Finish defining the function "count" below by printing the numbers, starting
 * with 1, up to and including the provided "limit".
 *
 * The "limit" should be a Number.
 *
 * For multiples of three, print "Fizz" instead of the number.
 * For multiples of five, print "Buzz" instead of the number.
 * For multiples of both three and five, print "FizzBuzz" instead of the number.
 * For the last number, print "Done" instead of the number.
 *
 * (Feel free to use "document.write" or "console.log" to print.)
 */
function count(limit) {
    // Write your solution to Problem #3 here
}



/**
 * Problem #4
 * 
 * Given the following Arrays, "stores" and "sales", update the "hasSale"
 * property of each store in the "stores" Array to the Boolean "true" if the
 * store has a sale shown in the "sales" Array.
 */
var stores = [
        {
            id: 1,
            name: "Bob's Mowers",
            hasSale: false
        },
        {
            id: 2,
            name: "John's Bike Barn",
            hasSale: false
        },
        {
            id: 3,
            name: "Josh's Lemonade",
            hasSale: false
        },
        {
            id: 4,
            name: "Kevin's Disc Bar",
            hasSale: false
        },
        {
            id: 5,
            name: "Tom's Guitars",
            hasSale: false
        }
    ],
    sales = [
        {
            id: 1,
            start: '05-01',
            end: '05-06',
            store: {
                id: 2,
                name: "John's Bike Barn"
            }
        },
        {
            id: 2,
            start: '08-25',
            end: '08-31',
            store: {
                id: 4,
                name: "Kevin's Disc Bar"
            }
        }
    ];

// Write your solution to Problem #4 here



/**
 * Problem #5
 *
 * Define 2 new constructor functions, "Rectangle" and "Circle". Each new
 * constructor should inherit from the "Shape" constructor.
 *
 * The "Circle" constructor should take 1 parameter which should be set as 
 * both the height and width.
 *
 * Each new constructor should define it's own "getArea" method which should
 * return the appropriate area. (For "Circle", assume that height and width
 * represent the diameter of the the circle.)
 *
 * Objects created by the "Circle" constructor should return "This is a circle"
 * when the "getType" method is called on it. Similarly objects created with
 * the "Rectangle" constructor should return "This is a rectangle" when the
 * "getType" method is called.
 */
function Shape(width, height) {
    this.width = width;
    this.height = height;
    this.type = 'shape';
}

Shape.prototype.getType = function() {
    return 'This is a ' + this.type;
};

// Write your solution to Problem #5 here



/**
 * Problem #6
 *
 * Finish defining the "toCamelCase" function below by returning a new object
 * that has "camel case" keys instead of "snake case" keys.
 *
 * The object being returned should have the same number of keys and values as 
 * the "snakeCaseObject". The object being returned should only have
 * "camel case" keys.
 *
 * The "snakeCaseObject" should be an Object.
 *
 * Snake case: example_of_snake_case
 * Camel case: exampleOfCamelCase
 */
function toCamelCase(snakeCaseObject) {
    // Write your solution to Problem #6 here
}
