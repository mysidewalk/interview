/* Problem #1
 *
 * Given the prototype, Shape, that has 2 methods and 3 properties, create two additional
 * prototypes, Rectangle and Circle, that inherit from Shape. Each should not modify the inherited
 * properties, but override the getArea() method to make sure it returns the correct area.
 * Additionally, for the Circle prototype override the getType() method to return
 * 'I am a circle!' instead of the normal value, which the Rectangle should still return.
 */
var Shape = function(width, height) {
    this.width = width;
    this.height = height;
    this.type = 'Fill this in';
};

Shape.prototype.getArea = function() { return 0; };
Shape.prototype.getType = function() { return 'This is a ' + this.type; };

// Write your solution to Problem #1 below this



/* Problem #2
 * 
 * With a given Array of strings, 'ocdids', that follow the format detailed below, create a new
 * Array, 'ocdidsResult', containing objects with keys and values matching each segment of the
 * string. A segment is separated by the '/' (forward slash) character. You should also generate a
 * unique number to assign to the 'ocd-division' key. The keys and values should not include ':'
 * (colons), or '/' (forward slashes).
 * Format Example: 'ocd-division/[key]:[value]/[key]:[value]/[key]:[value]'
 */
var ocdids = [
    'ocd-division/country:us/state:mo/county:andrew/council_district:west',
    'ocd-division/country:us/state:mo/county:boone/council_district:2',
    'ocd-division/country:us/state:mo/county:dallas/council_district:north',
    'ocd-division/country:us/state:mo/place:kansas_city/council_district:1',
    'ocd-division/country:us/state:mo/place:st_louis/ward:28',
];

var ocdidsResult = [];

// Write your solution to Problem #2 below this



/* Problem #3
 *
 * Define a function, 'countTo', that accepts one argument, 'limit', that will be a Number. The
 * function should print the numbers from 1 to the passed in 'limit'. For multiples of three print
 * 'Fizz' instead of the number and for multiples of five print 'Buzz'. For numbers which are
 * multiples of both three and five print 'FizzBuzz'.
 * (Use 'document.write' to print the results.)
 */
var countTo;

// Write your solution to Problem #3 below this



/* Problem #4
 *
 * Define a function, 'getTotal', that takes an arbitrary number of numeric arguments and returns
 * the sum of those arguments.
 */
var getTotal;

// Write your solution to Problem #4 below this



/* Problem #5
 *
 * Define a function, 'sortCreatures', that groups the predefined Array, 'creatures', into new
 * Arrays by the first letter of each item in the Array. Your final solution should return an Array
 * of Arrays whose members all have the same first letter.
 * (Feel free to use underscore or another preferred library for this kind of processing)
 */
var sortCreatures;

var creatures = ['alligator', 'bear', 'cat', 'crocodile', 'beaver', 'ape', 'bee', 'coati',
    'aardvark'];

// Write your solution to Problem #5 below this



/* Problem #6
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

// Write your solution to Problem #6 below this