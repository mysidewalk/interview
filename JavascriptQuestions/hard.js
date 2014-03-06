/* 
 * Argument handling
 * Write a function that takes an arbirary number of numeric arguments
 * and return the sum of those arguments
 */
function question1()
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
 */
function question2()
{
	var test_list = ['alligator', 'bear', 'cat', 'crocodile', 'beaver', 'ape', 'bee', 'coati', 'aardvark'];
	var grouped_list = [];
	var groups = {};
	// group the list by first letter here
	for ( var i = 0; i < test_list.length; i ++ )
	{
		var item      = test_list[ i ];
		var firstChar = item.charAt( 0 );
		if(groups[firstChar]!=undefined){
			groups[ firstChar ].push( item );
		}else{
			groups[firstChar] = [];
		}
	}
	for(var key in groups) {
	    if(groups.hasOwnProperty(key)) {
	        grouped_list.push(groups[key].sort());
	    }
	}
	console.log(grouped_list);
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
 */
 function question3()
 {
	var averageTotalValue = null;
	var names = ["David", "Jimmy", "Matt", "Andy", "Nick", "Nathan", "Andrea", "Stephen", "Justin", "Emily", "Hannah"];
	var mapCallback = function(element, index, context) {
		var total = 0;
		for(var i=0; i<element.length;i++){
			total+=(element[i].charCodeAt(0) - 64)
		}
		return total;
	};
	var reduceCallback = function(previousValue, currentValue, index, context) { 
		averageTotalValue +=currentValue;
	};
	//call map and reduce on the array to calculate the sum of the words
    names.map(mapCallback).reduce(reduceCallback,0);
    //the average is the total divided by the number of items.
	averageTotalValue = (averageTotalValue/names.length);
	return averageTotalValue;
 }
