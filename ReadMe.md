# Learning Web Dev : ANGULAR

## 2022 07 17 | Services and Subjects

Interesting article http://ncjamieson.com/understanding-subjects . Should read this after Tut. Also, there is a CLI command that auto generates services. This command is:

```
ng generate service folder/name-of-service
```

### 2135 | Setting Up Router

When you create a Angular app through the CLI, you will be asked if you want to set up the router. I always say yes. However, you can do this manually. To do this, you would want to go into the app.module.ts file and import the "RouterModule".

## 2022 07 16 | Task Tracker

Started another quick two hour tutorial by Brad Traversy. This is from his free crash course on Angular. The app we are building is a simple front end task tracker. While this course doesn't go into great depth, he does explain some things that the full Angular course has yet to teach. Sometimes that matters. You can go through a lesson with questions that you have, but there is no one to ask. You spend a lot of time researching those questions online or waiting till the end to see if the information is covered.

### 2145 | Font Awesome Angular

Found a great ng addition that allows us to have font awesome icons within the angular application using the following command: `ng add @fortawesome/angular-fontawesome` . More information can be found at the following website...

https://github.com/FortAwesome/angular-fontawesome

#### NOTE:

To install, You'll need to use the CLI:

```
npm i json-server
```

Afterwards, go to package.json to update the new package. Within this file, you'll need to add a new script (within the "scripts" portion): `"server": "json-server --watch db.json --port 5000"`. Also note that `--port 5000` changed the running port from what ever was default (3000) to 5000. Also NOTE: I had to change that to `5003` since the port was being used. Next you need to create the db.json file within the root... Once you have a JSON file with all the data, you can run the server using `npm run server` (or however you named it previously).

### 2240 | JSON Server

To finagle the backend portion of the task tracker application, we are going to use the JSON Server NPM. Here is the link:

https://www.npmjs.com/package/json-server

## 2022 07 14 | No Test

So the instructor says to use `ng g c new-app-name --spec false`. This actually does not work any more. The new way of CLI a new component is with `ng gc new-app-name --skip-tests=true`

## 2022 07 13 | Constructor

Found out about a shortcut in creating a model (and all it's constructors stuff):<br />

```
export class Ingredient {

  constructor(public name: string, public amount: number){}

}
```

## 2022 07 11 | Lesson Project

Looks like we are creating shopping cart and recipe app. For this app, we are going to need to structure the application to decide how components will need to be built. Here are the features: Shopping List and Recipe Book. For this, we will need a root component. Afterwards, we need a header component above these. Individual features for the shopping list include: shopping list, CRUD (create, add, edit, delete). The recipe book should also have a list, items, and details. For our models, we will need ingredient and recipe. Finally, all this stuff will be put into a new app (so, close out everything and rebuild)

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

### Added Note Later

can add `--spec false` to leave off the testing files

---
