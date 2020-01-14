# Backend or Full-Stack Engineer

## Prompt
The user will provide files that are made up of short (less than 1000 character) strings, each on a different line (assume any common character or character combination that means a newline to someone might be used interchangeably in this file). Some of these strings will be preceded by numbers, i.e. “2 Steaks”, “10 Chicken Wings”, “343GuiltySparks”. Accept the file from the user and return them a file with the same items sorted first by the numeric value of any leading number (2 < 10 < 343) and then alphabetically for the rest of the string.

## Assessment Guidelines:
* Only 1 submission will be scored, completing additional problems is not encouraged for the purposes of this assessment.
* The solution must be programmatic and driven by included source code you have written. Excel, Tableau, PowerBI, Dreamweaver, Flash, or any other application driven solution to this prompt are inappropriate for this submission.
* Submissions will be scored by members of our development team who will be unaware of the author’s identity, resume, or background; they will have access to no information or documentation besides that included in the forked repo.
* Scoring criteria consists of 4 considerations of equal weight:
  * Runnability/Deployment: was the assessor able to get the solution to run? were the steps to do so clear, concise, and convenient?
  * Functionality: does the solution solve the stated problem?
  * Readability: is the solution's code and documentation stylistically, idiomatically, and structurally sound? Does its structure, naming, and commenting make it easy to read?
  * Testing: does the solution contain tests verifying its functionality? is the test coverage just right? are the tests a help or hindrance for theoretical refactoring and maintenance?
* Scoring certain elements of Functionality and Testing depends on the runnability of the solutions.
* The mySidewalk development team is most familiar with python, R, javascript, postgres, mongodb, linux, docker (preferably taking advantage of docker-machine and docker-compose), and Sass. We welcome submissions using different technologies but must admit, quality of assessment may suffer slightly so we recommend extraordinary care be taken by the solution author to write their solution in a readable manner and provide the best setup instructions possible. The hardware being used to assess all submissions will be a macbook pro so if the author’s solution involves Windows specific technology, achieving a good score from the assessment will be difficult or impossible.
* If your solution involves persistence, use flat files, sqlite (or another self contained/embedded database) or a completely scripted setup (a tested Docker setup is realistically the only thing we would recommend in this case). We will not attempt to re-construct your database from a description or multi-step instructions (i.e. if setup is simply to execute a bash script or a docker command 👍, if it's more involved 👎).