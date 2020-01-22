# Data Engineer

## Prompt
You will use records of calls for service from the San Francisco Fire Department. Limit your work to the most recently available 12 months of data. Prepare a CSV table of the 90th percentile Response Times by month by "Battalion". Once prepared, visualize the monthly 90th percentile response times by "Battalion" appropriately.
-  Response Times: time it takes for a unit to arrive "On Scene" from the moment the call is "Received" at the 911 watch center
- "Battalion": the column name used to refer to SF's Emergency Response District
- [Data Source Here](https://data.sfgov.org/Public-Safety/Fire-Department-Calls-for-Service/nuek-vuh3).

## Assessment Guidelines:
* We will score 1 submission. Completing extra problems is not encouraged for the purposes of this assessment.
* The solution must be programmatic and driven by your included source code. Application driven solutions to this prompt are not appropriate. (For example Excel, Tableau, PowerBI, Dreamweaver, Flash)
* Members of our engineering team will score submissions. They will be unaware of the author’s identity, resume, or background. They will have no access to information or documentation besides the submission.
* Scoring consists of 4 considerations of equal weight:
  * Runnability/Deployment: was the assessor able to get the solution to run? Were the steps to do so clear, concise, and convenient?
  * Functionality: does the solution solve the stated problem?
  * Readability: is the solution's code and documentation stylistically, idiomatically, and structurally sound? Does its structure, naming, and commenting make it easy to read?
  * Analysis/Visualization: is the included data visualization appropriate, clear, and useful?
* Scoring Functionality and Testing depends on the runnability of the submission.
* The mySidewalk development team is familiar with:
  * Languages: Python, JavaScript, SQL, R, Sass
  * Databases: PostgresSQL, MongoDB, SQLite
  * Operating Systems: CoreOS, Linux, macOS
  * Virtualization Systems: Docker (docker-machine and docker-compose preferred)
* Quality of assessment may suffer for other submissions. You should make extra effort to provide instructions and write clearly in this case. We use MacBook Pros to assess all submissions. Windows specific submissions will make a good score difficult.
* If your solution involves persistence use:
  * flat files
  * SQLite (or another self contained/embedded database)
  * a completely scripted setup (Docker recommended)
* We will not re-construct your database from a description or multi-step instructions. If setup is simply to execute a bash script or a docker command 👍. If it's more involved 👎.
