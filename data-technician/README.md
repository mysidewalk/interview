# Data Technician

## Prompt
You will use records of calls for service from the San Francisco Fire Department. Limit your work to the most recently available 12 months of data. Prepare a CSV table of the 90th percentile Response Times by month by "Battalion". Once prepared, write up a short (3-5 sentences or bullet points) summary of how you prepared this table. Next write up a short (3-5 sentences or bullet points) summary of how you would make this task trivial to repeat every day.
-  Response Times: time it takes for a unit to arrive "On Scene" from the moment the call is "Received" at the 911 watch center
- "Battalion": the column name used to refer to SF's Emergency Response District
- [Data Source Here](https://data.sfgov.org/Public-Safety/Fire-Department-Calls-for-Service/nuek-vuh3).

## Assessment Guidelines:
* We will score 1 submission. Completing extra problems is not encouraged for the purposes of this assessment.
* Application driven solutions to this prompt are acceptable (For example Excel, QGIS, Tableau, PowerBI, Dreamweaver, Flash). We prefer programmatic solutions (For example, Python, Javascript, R). Programmatic solutions are much more reproducible and easier to anonymize. They will generally score higher. If you submit a programmatic solution, include your source code. 
* Members of our engineering team will score submissions. They will be unaware of the author’s identity, resume, or background. They will have no access to information or documentation besides the submission.
* Scoring consists of 3 considerations of equal weight:
  * Concept: does the solution do the task described in the prompt?
  * Accuracy: does the solution provide accurate numbers?
  * Documentation: is documentation easy to read, free from errors, and clear?
  * Repeatability: does the provided summary meet the repeatability requirements?
* The mySidewalk team is familiar with:
  * Languages: Python, JavaScript, SQL, R, Sass
  * Databases: PostgresSQL, MongoDB, SQLite
  * Operating Systems: CoreOS, Linux, macOS
  * Virtualization Systems: Docker (docker-machine and docker-compose preferred)
* Quality of assessment may suffer for other submissions. You should make extra effort to provide instructions in this case. We use MacBook Pros to assess all submissions. Windows specific submissions will make a good score difficult. Microsoft Access is a nonstarter on MacBook Pros - do not use it as a method of solving the prompt.
* If your solution involves persistence use:
  * flat files
  * SQLite (or another self contained/embedded database)
  * a completely scripted setup (Docker recommended)
* We will not re-construct your database from a description or multi-step instructions. If setup is to execute a bash script or a docker command 👍. If it's more involved 👎.
