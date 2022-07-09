# Learning Web Dev : ANGULAR

# 2022 02 08 | START

This is where I am learning Angular JS. I'll write notes and things I want to remember within this Readme. The course I'm working through is through Udemy called: Angular - The Complete Guide (2022 Edition) by Maximilian Schwarzmuller. First item to remember is: Installing Angular CLI by typing in the terminal: <br />
`sudo npm install -g @angular/cli`<br />
To build angular app within the folder of choice:<br />
`ng new name-of-app --no-strict`<br />
When asked if you want to add Angular routing, choose YES! <br />
Then, cd into your app folder. From there, start the server with:<br />
`ng serve`<br />
Afterwards, you'll be asked if you want to share data with google... NO <br />
This will start the server and a boilerplate html doc can be seen at localhost:4200<br /> <br />
To use Bootstrap through npm, type (locally, not globally): <br />
`npm install --save bootstrap@3` <br />
Then, within the angular.json file, you need to "styles" array (within the architect build obj). Within this, you will point to "node_modules/bootstrap/dist/css/bootstrap.min.css" !

---
