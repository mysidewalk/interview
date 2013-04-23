using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Linq.Expressions;
using System.Text.RegularExpressions;

namespace CSharpQuestions
{
    class Hard
    {
        // Problem 1:
        // Using the predefined list, "testList", group the list
        // into new lists by the first letter of each item in the list.
        // Your final solution should return a list of lists whose members
        // all have the same first letter.
        public List<List<string>> ProblemOne()
        {
            var testList = new List<string> { "alligator", "bear", "cat", "crocodile", "beaver", "ape", "bee", "coati", "aardvark" };
            List<List<string>> results = null;
            // Populate grouped lists as decribed here
            return results;
        }

        // Problem 2:
        // Given an expression of func of TInstanceType, TReturnType, create a function that will return the name of
        // the method called in expressions of the form:  x => x.ExampleMethod()
        // Note: in the example, x is an instance of TInstanceType, ExampleMethod is a function returning a value of
        // TReturnType, and your method should return the string, "ExampleMethod"
        public string ProblemTwo<T, U>(Expression<Func<T, U>> expression)
        {
            var result = "";
            // Find the name of the example method accessed here
            return result;
        }

        // Problem 3:
        // Given a CamelCase string containing only the letters [a-zA-Z],
        // create and return a string with spaces between the changes in case.
        // In the special case of multiple capital letters in a row (sometimes wrongly done to indicate abbreviation),
        // a space is to be placed between the second-to-last and last capital letter in a row.
        // Example: given the input string "NoMirrorBitmap", return "No Mirror Bitmap",
        // given the input string "SATScore", return "SAT Score"
        public string ProblemThree(string source)
        {
            var result = "";
            // 
            return result;
        }
    }
}
