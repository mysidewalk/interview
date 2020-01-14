# Backend or Full-Stack Engineer

## Prompt
The user will provide files that are made up of short (less than 1000 character) strings, each on a different line (assume any common character or character combination that means a newline to someone might be used interchangeably in this file). Some of these strings will be preceded by numbers, i.e. “2 Steaks”, “10 Chicken Wings”, “343GuiltySparks”. Accept the file from the user and return them a file with the same items sorted first by the numeric value of any leading number (2 < 10 < 343) and then alphabetically for the rest of the string.

## Assessment Guidelines:
* We will score 1 submission. Completing extra problems is not encouraged for the purposes of this assessment.
* The solution must be programmatic and driven by your included source code. Application driven solutions to this prompt are not appropriate. (For example Excel, Tableau, PowerBI, Dreamweaver, Flash)
* Members of our engineering team will score submissions. They will be unaware of the author’s identity, resume, or background. They will have no access no information or documentation besides the submission.
* Scoring consists of 4 considerations of equal weight:
  * Runnability/Deployment: was the assessor able to get the solution to run? were the steps to do so clear, concise, and convenient?
  * Functionality: does the solution solve the stated problem?
  * Readability: is the solution's code and documentation stylistically, idiomatically, and structurally sound? Does its structure, naming, and commenting make it easy to read?
  * Testing: does the solution contain tests verifying its functionality? Is the test coverage right? Are the tests a help or hindrance for theoretical refactoring and maintenance?
* Scoring Functionality and Testing depends on the runnability of the submission.
* The mySidewalk development team is familiar with:
  * Languages: python, javascript, SQL, R, Sass
  * Databases: postgres, mongodb, sqlite
  * Operating Systems: coreos, linux, macos
  * Virtualization Systems: docker (docker-machine and docker-compose preferred)
* Quality of assessment may suffer for other submissions. You should make extra effort to provide instructions and write clearly in this case. We use macbook pros to assess all submissions. Windows specific submissions will make a good score difficult.
* If your solution involves persistence use:
  * flat files
  * sqlite (or another self contained/embedded database) 
  * a completely scripted setup (docker recommended)
 * We will not attempt to re-construct your database from a description or multi-step instructions. If setup is simply to execute a bash script or a docker command 👍. If it's more involved 👎.