# DevOps Engineer

## Prompt

Write a Dockerfile to create a docker image for the simple app contained in the `app` folder. Once you've built the image, please answer the following prompts: 
1. Run the container and verify that the app works. Briefly describe the process and the output.
* When I run the container it will activate the server which is set to listen on port 5000 at default in my code. From there it stays running waiting for requests through terminal curls or through a browser. In the terminal it will output the smiling emoji when curled and from the browser 

2. Is your solution ready for use in a production environment? Why?
* With some changes from flask to a WSGI server and adding a non-root user, I have made the service production ready. The only steps to add after this is setting it up in a kubernetes cluster and adding a health check monitor and load balancing which would be a nice side project in itself. 

## Assessment Guidelines:
* Members of our engineering team will score submissions. They will be unaware of the author’s identity, resume, or background. They will have no access to information or documentation besides the submission.
* Scoring consists of 4 considerations of equal weight:
  * Runnability: was the assessor able to get the solution to run?
  * Functionality: does the solution solve the stated problem?
  * Readability: is the solution's code and documentation stylistically, idiomatically, and structurally sound? Does its structure, naming, and commenting make it easy to read?
  * Best Practice: does the solution follow best practices?
* Scoring Functionality depends on the runnability of the submission.
