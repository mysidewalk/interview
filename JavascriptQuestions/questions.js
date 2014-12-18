/* Problem #1
 *
 * Define a function, 'getTotal', that takes an arbitrary number of numeric arguments and returns
 * the sum of those arguments.
 */
var getTotal;

// Write your solution to Problem #1 below this



/* Problem #2
 *
 * Define a function, 'sortCreatures', that groups the predefined Array, 'creatures', into new
 * Arrays by the first letter of each item in the Array. Your final solution should return an Array
 * of Arrays whose members all have the same first letter.
 * (Feel free to use underscore or another preferred library for this kind of processing)
 */
var sortCreatures;

var creatures = ['alligator', 'bear', 'cat', 'crocodile', 'beaver', 'ape', 'bee', 'coati',
    'aardvark'];

// Write your solution to Problem #2 below this



/* Problem #3
 *
 * Define a function, 'countTo', that accepts one argument, 'limit', that will be a Number. The
 * function should print the numbers from 1 to 'limit'. For multiples of three print
 * 'Fizz' instead of the number and for multiples of five print 'Buzz'. For numbers which are
 * multiples of both three and five print 'FizzBuzz'.
 * (Use 'document.write' to print the results.)
 */
var countTo;

// Write your solution to Problem #3 below this



/* Problem #4
 * 
 * Given two Arrays of objects, that have at least one overlapping property, reduce them so that
 * a third Array, 'organizationsResult', includes the list of all organizations, and for every
 * organization that is included in the 'selectedOrganizations' Array, set the 'selected' property
 * of that organization to true.
 * (Feel free to use underscore or another preferred library for this kind of processing)
 */
var organizations = [
    {id: 1, name: 'Bob\'s Mowers', selected: false},
    {id: 2, name: 'John\'s Bike Barn', selected: false},
    {id: 3, name: 'Josh\'s Lemonade', selected: false},
    {id: 4, name: 'Kevin\'s Disc Bar', selected: false},
    {id: 5, name: 'Thomas\'s Guitars', selected: false},
];

var selectedOrganizations = [
    {id: 10, organization: {id: 2, name: 'John\'s Bike Barn'}},
    {id: 11, organization: {id: 4, name: 'Kevin\'s Disc Bar'}},
];

var organizationsResult = [];

// Write your solution to Problem #4 below this



/* Problem #5
 *
 * Given the prototype, Shape, that has 2 methods and 3 properties, create two additional
 * prototypes, Rectangle and Circle, that inherit from Shape. Each should not modify the inherited
 * properties, but override the getArea() method to make sure it returns the correct area.
 * Additionally, for the Circle prototype override the getType() method to return
 * 'I am a circle!' instead of the normal value, which the Rectangle should still return.
 * (For the Circle, use the 'width' or 'height' property to represent the diameter)
 */
var Shape = function(width, height) {
    this.width = width;
    this.height = height;
    this.type = 'Fill this in';
};

Shape.prototype.getArea = function() { return 0; };
Shape.prototype.getType = function() { return 'This is a ' + this.type; };

// Write your solution to Problem #5 below this



/* Problem #6
 *
 * With a given Object, 'snakeKeys', transform the object's keys from 'snake_case' into 'camelCase'.
 * The result, 'camelCaseResult', should be an Object with only camel case keys, whose values have
 * not been modified.
 */
var snakeKeys = {
    'image_types': ['jpg', 'jpeg', 'png', 'gif'],
    'requires_description': false,
    'the_number_one': 1,
    'the_string_image': 'image',
};

var camelCaseResult = {};

// Write your solution to Problem #6 below this


