# Learning Web Dev : ANGULAR

## 2022 07 10 | Components

There is a lot in this day's lessons. ngIf, ngFor and so many other things I want to remember. I am saving through git each time I run through a lesson. After each lesson that doesn't build off the other, I need to delete code because it gets really crazy. As such, I feel like I can time-travel through the lesson's code using git to check that specific iteration. I'm not really sure if this will help in the future. What I do know, is I need to use everything I'm learning in a project for this to really sink in. Again, there is a ton of stuff here. It actually makes a lot of since to someone who learned to use JS, Java, and expression languages. Even the limited REACT lessons really fit into what I've been learning.

### 1000 | Assignment

1. Add button which say's 'display details'
2. Add a `<p>` with any content of your choice (e.g. 'secret password = tuna')
3. Toggle the display of the `<p>` with the button created in the first step
4. Log all button clicks in an array and output that array below the secret `<p>` (maybe log a timestamp or simply an incrementing number)
5. Starting at the 5th item, give all future log items a blue background (via ngStyle) and white color (ngClass)

## 2022 07 09 | Day 2

A lot completed? Not really. However, I have been learning a ton. A lot of stuff will need to be reviewed later. That is why I've committed a lot on git. This lets me time travel through several lessons when I need.

---

## 2022 07 08 | START

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

### 1015 | Neat CLI

First I want to hate CLI stuff, until it does some incredibly cool stuff. You can use `ng generate component name-of-component` to give you a folder with ALL the files you need for that component! You do need to be inside the app folder for this to work. BTW, that can be shorted to: <br />
`ng g c name-of-component`

---
