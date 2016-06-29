# mySidewalk Inc Coding Assessment

##Question1:
The user has a file that is made up of short (less than 1000 character) strings, each on a different line (assume any common character or character combination that means a newline to someone might be used interchangeably in this file). Most of these strings will be preceded by numbers, i.e. “2 Steaks”, “10 Chicken Wings”, “343GuiltySparks”. Accept the file from the user and return them a file with the same items sorted first by the numeric value of any leading number (2 < 10 < 343) and then alphabetically for the rest of the string.

## Solution1:
I have written the program in Python. I have included the pytest. The program can be executed using the Dockerfile.

Files:
* Solution2/sorting.py : Is the python script
* Solution2/test_sorting.py : Is the pytest for sortin.py
* Solution2/input.txt : Is the input file for the python script. When the program prompts, the file name has to be entered.
* Solution2/output.txt : Is the output file after the sorting.
* Solution2/Dockerfile : Execute using the Dockerfile with the following commands.

Steps to run the program:
* Make changes input.txt, that will be the input file to the program.
* docker build -t sorting .
* docker run -it --name sorting-app sorting
  * Enter "input.txt"
* docker cp sorting-app:output.txt output.txt
* docker rm sorting-app
  * output.txt has the output.

Program Logic:
Hope the program is self explanatory

## Question3:
The user wants to visualize the following geojson layers (1, 2) together on a map along with a chart of their commuter population attributes in an interactive manner.

## Solution 3:

File:
Solution3/KansasCommutePopulation.html

Link: https://rawgit.com/malathykrish/interview/master/Solution3/KansasCommutePopulation.html

If you can't open the above link:
* Copy the link location of the HTML file
* Open a new browser and paste it
* Replace github.com to rawgit.com and remove the word "blob" from the URL
* Example :
  * https://github.com/<your user name>/<your repo>/blob/master/page.html
  * https://rawgit.com/<your user name>/<your repo>/master/page.html

Details in Page:
* Plots both the json datasets.
* Click the markers to see the commute population.
* Custom Lengend: Has the color codes for the percentile.
* If the data for a commute has background color:
  * Green - That mode of commute is greater than 66th percentile in the given dataset.
  * Orange - That mode of commute is lesser than 66th, but greater then 33rd percentile in the given dataset.
  * Red - That mode of commute is lesser than 33rd percentile in the given dataset.

There are few more TODO items for this problem:
* Should be able to drag/move the info window
* Compare between different regions.
* Should be able to close all info window

Program Logic:
* Other than just plotting the data, did some analysis over the entire data and tried to present the details in the minimum space with color codes.
* The percentile helps in analyzing which region has the highest,medium and lowest modes of commute.
  * For example, a region which has public transit as green color code, shows that, that region is one among the top 66th percentile where people use public transit.
