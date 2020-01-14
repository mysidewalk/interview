# Data Engineer

## Prompt
Prepare a csv table of the 90th percentile total response times (time it takes for a unit to arrive "On Scene" from the moment the call is "Received" at the 911 watch center) by month by Emergency Response District ("Battalion") for the last 12 months in San Francisco. Once the table is prepared, visualize the month over month 90th percentile response times by Emergency Response District appropriately. [Data Source Here](data.sfgov.org/Public-Safety/Fire-Department-Calls-for-Service/nuek-vuh3).

## Assessment Guidelines:
* Only 1 submission will be scored, completing additional problems is not encouraged for the purposes of this assessment.
* Submissions will be scored by members of our development team who will be unaware of the author’s identity, resume, or background; they will have access to no information or documentation besides that included in the forked repo.
* The solution must be programmatic and driven by included source code you have written. Excel, Tableau, PowerBI, Dreamweaver, Flash, or any other application driven solution to this prompt are inappropriate for this submission.
* Scoring criteria consists of 4 considerations of equal weight:
  * Runnability/Deployment: was the assessor able to get the solution to run? were the steps to do so clear, concise, and convenient?
  * Functionality: does the solution solve the stated problem?
  * Readability: is the solution's code and documentation stylistically, idiomatically, and structurally sound? Does its structure, naming, and commenting make it easy to read?
  * Analysis/Visualization: is the included data visualization appropriate, clear, and useful?
* Scoring certain elements of Functionality and Testing depends on the runnability of the solutions.
* The mySidewalk development team is most familiar with python, R, javascript, postgres, mongodb, linux, docker (preferably taking advantage of docker-machine and docker-compose), and Sass. We welcome submissions using different technologies but must admit, quality of assessment may suffer slightly so we recommend extraordinary care be taken by the solution author to write their solution in a readable manner and provide the best setup instructions possible. The hardware being used to assess all submissions will be a macbook pro so if the author’s solution involves Windows specific technology, achieving a good score from the assessment will be difficult or impossible.
* If your solution involves persistence, use flat files, sqlite (or another self contained/embedded database) or a completely scripted setup (a tested Docker setup is realistically the only thing we would recommend in this case). We will not attempt to re-construct your database from a description or multi-step instructions (i.e. if setup is simply to execute a bash script or a docker command 👍, if it's more involved 👎).