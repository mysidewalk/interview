# Frontend Engineer

## Prompt
Using the following GeoJSON layers: ([kc-neighborhoods.json](kc-neighborhoods.json), [kc-tracts.json](kc-tracts.json)), create a webpage to fetch the raw files and appropriately visualize them together on a map, along with an interactive chart of their commuter population attributes. We use [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/api/) and [Highcharts](https://www.highcharts.com/) for our map and chart visualizations, but feel free to use any libraries or APIs that you prefer. Do your best, within reason, to make the layout and design of the experience device responsive and WCAG 2.0 AA compliant.

## Assessment Guidelines:
* We will score 1 submission. Completing extra problems is not encouraged for the purposes of this assessment.
* The solution must be programmatic and driven by your included source code. Application driven solutions to this prompt are not appropriate. (For example Excel, Tableau, PowerBI, Dreamweaver, Flash)
* Members of our engineering team will score submissions. They will be unaware of the author’s identity, resume, or background. They will have no access to information or documentation besides the submission.
* Scoring consists of 4 considerations of equal weight:
  * Runnability/Deployment: was the assessor able to get the solution to run? Were the steps to do so clear, concise, and convenient?
  * Functionality: does the solution solve the stated problem?
  * Readability: is the solution's code and documentation stylistically, idiomatically, and structurally sound? Does its structure, naming, and commenting make it easy to read?
  * Testing: does the solution contain tests verifying its functionality? Is the test coverage right? Are the tests a help or hindrance for theoretical refactoring and maintenance?
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
