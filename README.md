# TodoEXP - front-end

## About 
TodoEXP is a project developed by Arceo, Jadman, Juan for the courses SOFDESG and LBYCPD2 under the supervisions of Engr. Illahi and Engr. Ligutan respectively. 

## How to run the project
The project utilizes React, the open-source project by Facebook, as its Javascript framework. Therefore, to run it, the following things must be installed in the computer:

- NodeJS

Before running, be sure to run `npm install` to refresh the dependencies. From there, run `npm start` to start the development server of react. From there, the front-end of the server should be running. 

By default, the program connects toward a Google Cloud Compute Instance at the IP `34.126.112.11`. Therefore, if the Google Cloud Compute Instance is running, the user will not have to bother with running the back-end locally. 

## How to run local back-end?
When running TodoEXP locally, there are two main components that must be installed:

- Java
- PostgreSQL

This PostgreSQL should have a database cluster that contains a database called `todoexpdev`. Without it, the back-end will simply crash at an instant. 
