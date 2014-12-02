/* Class definition
 * Define a class, 'Foo', with a class level attribute 'bar',
 * an instance level variable 'baz',
 * and a method 'biz' that takes one
 * argument and simply returns the value of that argument.
 */
 
 function question1() {
	var Foo = null;
	// Define class Foo here
	
	return Foo;
 }
 
 /* Regex and String sanitization
 * write a function that takes a single input and uses
 * replace to remove all non-alphanumeric characters 
 * from that input
 * for example 'a@b$c^d!1,2.3/4' => 'abcd1234'
 */
function question2(inputString)
{
	var result = "";
	// put the function here
	
	return result;
}

/*
 * Define a function that prints the numbers from 1 to 100. 
 * For multiples of three print "Fizz" instead of the number
 * and for multiples of five print "Buzz". For numbers which
 * are multiples of both three and five print "FizzBuzz".
 */
function question3()
{
	// implement function body here, no need to return a value,
    // "document.write" statements will work fine
	
    return;
}

/* 
 * Argument handling
 * Write a function that takes an arbirary number of numeric arguments
 * and return the sum of those arguments
 */
function question4()
{
	var sum = null;
	// define the sum function here
	
	return sum;
}

/*
 * Using the predefined list, "test_list", group the list
 * into new lists by the first letter of each item in the list.
 * Your final solution should return a list of lists whose members
 * all have the same first letter.
 * (Feel free to use underscore or another preferred library for this kind of processing)
 */
function question5()
{
	var test_list = ['alligator', 'bear', 'cat', 'crocodile', 'beaver', 'ape', 'bee', 'coati', 'aardvark'];
	var grouped_list = null;
	// group the list by first letter here
	
   	return grouped_list;
} 

/*
 * map & reduce
 * In text processing, letters and combinations of letters are
 * often analyzed using numerical interpretations. Given a rule for
 * calculating the numerical "total value" of a string, wherein each letter of the string is worth
 * its ascii value (i.e. letter.charCodeAt(0) for each letter) and then summed, use map & reduce
 * methodology to calculate the "total value" of each string in the array "names", sum the "total values",
 * and then calculate the average.
 * (Feel free to use underscore or another preferred library for this kind of processing)
 */
 function question6()
 {
	var averageTotalValue = null;
	var names = ["David", "Jimmy", "Matt", "Andy", "Nick", "Nathan", "Andrea", "Stephen", "Justin", "Emily", "Hannah"];
	// apply your map and reduce strategy here

	return averageTotalValue;
 }
