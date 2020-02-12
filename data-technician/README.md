# Data Technician

## Prompt
You will use records of calls for service from the San Francisco Fire Department. Limit your work to the most recently available 12 months of data. Prepare a CSV table of the 90th percentile Response Times by month by "Battalion". Once prepared, write up a short (3-5 sentences or bullet points) summary of how you prepared this table. Next write up a short (3-5 sentences or bullet points) summary of how you would make this task trivial to repeat every day by yourself or another data professional.
-  Response Times: time it takes for a unit to arrive "On Scene" from the moment the call is "Received" at the 911 watch center
- "Battalion": the column name used to refer to SF's Emergency Response District
- [Data Source Here](https://data.sfgov.org/Public-Safety/Fire-Department-Calls-for-Service/nuek-vuh3).

## Assessment Guidelines:
* We will score 1 submission. Completing extra problems is not encouraged for the purposes of this assessment.
* Application driven solutions to this prompt are acceptable (For example Excel, QGIS, Tableau, PowerBI, Dreamweaver, Flash). However, programmatic solutions are preferred (For example, Python, Javascript, R). If you submit a programmatic solution, include your source code. 
* Members of our engineering team will score submissions. They will be unaware of the author’s identity, resume, or background. They will have no access to information or documentation besides the submission.
* Scoring consists of 3 considerations of equal weight:
  * Concept: does the solution accomplish the task described in the prompt?
  * Accuracy: does the solution provide accurate numbers?
  * Documentation: does the solution include documentation that is easy to read, free from errors, and clear?
  * Repeatability: does the provided summary of repeating the task outline a sensible path toward making the task trivial to repeat?
* The mySidewalk team is familiar with:
  * Languages: Python, JavaScript, SQL, R, Sass
  * Databases: PostgresSQL, MongoDB, SQLite
  * Operating Systems: CoreOS, Linux, macOS
  * Virtualization Systems: Docker (docker-machine and docker-compose preferred)
* Quality of assessment may suffer for other submissions. You should make extra effort to provide instructions and write clearly in this case. We use MacBook Pros to assess all submissions. Windows specific submissions will make a good score difficult. Microsoft Access is a nonstarter on MacBook Pros - do not use it as a method of solving the prompt.
* If your solution involves persistence use:
  * flat files
  * SQLite (or another self contained/embedded database)
  * a completely scripted setup (Docker recommended)
* We will not re-construct your database from a description or multi-step instructions. If setup is simply to execute a bash script or a docker command 👍. If it's more involved 👎.
