# mySidewalk Inc Coding Assessment

## Submission Guidelines:
* Of the following problems, choose the 2 that best align with your skillset and desired role at mySidewalk.
* Prepare programs (code, tests, and resources that will run on their own under the circumstances described in the problem and fulfill the informal requirements of the problem statement) for these 2 problems in a fork of this repo.
* Submit a link to your fork in an email to careers@mysidewalk.com, subject line: “Code Submission”.

## Assessment Guidelines:
* Only 2 submissions will be scored, completing additional problems is not encouraged for the purposes of this assessment.
* Submissions will be scored by members of our development team who will be unaware of the author’s identity, resume, or background; they will have access to no information or documentation besides that included in the forked repo.
* Each submission will be scored on 4 criteria of equal weight:
  * Runnability/deployment: was the assessor able to get the solution to run? were the steps to do so clear, concise, and convenient?
  * Functionality: does the solution solve the stated problem?
  * Readability: is the solution stylistically, idiomatically, and structurally sound? does its structure, naming, and commenting make it easy to read?
  * Testing: does the solution contain tests verifying its functionality? is the test coverage just right? are the tests a help or hindrance for theoretical refactoring and maintenance?
* Scoring certain elements of Functionality and Testing depends on the runnability of the solutions.
* The mySidewalk development team is most familiar with python, node, javascript, postgres, mongodb, linux, docker (preferably taking advantage of docker-machine and docker-compose), vagrant, and Sass. We welcome submissions using different technologies but must admit, quality of assessment may suffer slightly so we recommend extraordinary care be taken by the solution author to write their solution in a readable manner and provide the best setup instructions possible. The hardware being used to assess all submissions will be a macbook pro so if the author’s solution involves windows technology, achieving a good score from the assessment will be an especially difficult exercise.
* If you are answering a question that requires persistence, your choices in order of likelihood that they will run for the assessor, are: a complete docker[-compose] or vagrant setup, a flat file, a sqlite database, a postgres or mongodb connection string you provide the facility to easily configure and setup scripts for (along with documentation), anything else (extremely high risk the assessor will not be able to run it).

## Level of Effort Guidelines:
* Each problem is designed to take an experienced developer around 1-2 hours to prepare a program, tests, and setup documentation/assets; however, everyone is different and your mileage may vary.
* Our team fully embraces open source technologies and frameworks for a number of reasons, not the least of which is that you can solve problems faster with them. We highly recommend you use appropriate frameworks wherever possible to solve and deploy solutions to your selected problems.
* Some problems may have specific presentation requirements, such as a frontend interface in a web browser. If the presentation requirements do not match your skillset and desired role, pick a different question. If there are no specific presentation requirements you can discern, a command line or RESTful API interface is likely a perfectly acceptable solution (so long as you include documentation on how to use it).
* Assume any text or strings mentioned may contain unicode characters.

## Integrity Guidelines
Software development at mySidewalk is a collaborative endeavor and engineers here often survey other examples to come up with the best solution. That said: if you derive any part of your solution from another author’s submission or receive help from another individual working through your solution, you need to:
* Disclose this with appropriate inline comments and documentation
* Improve significantly upon the work you derived from or the approach a colleague helped you with

## Problems:
* The user has a file that is made up of short (less than 1000 character) strings, each on a different line (assume any common character or character combination that means a newline to someone might be used interchangeably in this file). Most of these strings will be preceded by numbers, i.e. “2 Steaks”, “10 Chicken Wings”, “343GuiltySparks”. Accept the file from the user and return them a file with the same items sorted first by the numeric value of any leading number (2 < 10 < 343) and then alphabetically for the rest of the string.
* The user wants to visualize the following geojson layers ([1](https://github.com/mysidewalk/interview/blob/master/assets/kc-neighborhoods.json), [2](https://github.com/mysidewalk/interview/blob/master/assets/kc-tracts.json)) together on a map along with a chart of their commuter population attributes in an interactive manner.
* The user wishes to securely store secret messages for later reading. The user needs to create an account consisting of at least a username and password (the password should be stored securely; not, for example, in plaintext or a reversible hash). After authenticating the user can submit a secret message (large amount of text to be stored securely; not, for example, in plaintext but by necessity in an encryption / hash that is reversible for later display) or see the most recently submitted secret message in plaintext.
* The user wishes to submit “reviews” consisting of a location/business name and a text body tied to a location which may be either a plaintext address or a geographic point described by a latitude and longitude pair (whatever projection you prefer). If the “review” is submitted using an address, geocode this address to a point. Persist these “reviews” and allow the user to submit a bounding which for which to return/display all current “reviews” which fall within this bounding box. Your solution should be able to return results in a timely manner even when querying thousands of reviews.

## Fequently Asked Questions
* "I'm applying for an internship/specific in my focus/strapped for time! Am I really expected to prepare 2 whole programs?" - Do your best! It's our belief that it's a huge benefit to current and potential employees to screen thoroughly, and that takes some investment. There's also a range of items you can work on and 4 criteria in which you can score points.
