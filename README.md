# Project: Animal Trading Card | Revisited with React

### Open the page

[Click here](https://cristianozitarosa.github.io/animalTradingCardReact/)

### Brief introduction

The first project for the Udacity nanodegree is the Animal Trading Card.
This is a simple project to practice HTML and CSS and consists in a card displaying a picture of an animal (student's choice) and a few interesting facts of the subject. The student needs to fit the project's requirements as size, code quality, specific styles on certain elements.

The last part of the Udacity nanodegree is related to the practice of React, with 2 projects to complete by using it.
So this is the idea, why not merge the first simple project with the last part of the nanodegree?
It really does not need React but, how to make it show simple as usual but at the same time empower it under the hood just for fun and practice?
What result will it bring back?

### Required functionalities (from the basic project's rubric):

- The text is italicized for the animal’s interesting fact;
- The labels are bolded for the animal’s list items;
- The dots are removed from the animal's list items;
- Uses border around animal’s name, image, and information (interesting fact, list items, and description);
- Uses border around animal’s information;
- Uses spacing between animal’s name, image, and information;
- Card width should be fixed and include the spacing around the image (Since image is 300px wide, card should be 300px + spacing on either side. Card should not expand with the browser window);
- The image’s alt is relevant to the choosen animal.

### Extra functionalities:

As mentioned, at a first sight, the card looks exactly as the original one [available here](https://github.com/CristianoZitarosa/animalTradingCards).

As a personal note I want to say again that the style is simple and clean according to the original purpose of the project, it is not meant to shock you but just to inform you. This style has been loved by a lot of people from students to reviewers.
To preserve the original style, no visual indications about the following features are provided to the user in the app apart of this README.

- It is available more than 1 card (no limits for the max) to read;
- Change card by left or right arrows key;
- The card is built thinking to the reusability of components;
- Everything rendered in HTML (from elements to properties) is no more hardcoded, there is a card collection where it is stored everything related to a specific card. The user just needs to add/remove/edit a card from there. Everything will follow accordingly.

### How to run this app:

Steps needed to run this application:
* Download/clone this project's repository from github;
* To have npm installed, [go here to download](https://www.npmjs.com/);
* After npm is installed open a terminal and `cd` into the project's folder (reach the path of the project into the terminal;
* In the terminal use the command `npm install` to install it in the project;
* To start the server in the terminal use the command: `npm start`;
* If everything is correct, your browser(**) will launch the application at: `http://localhost:3000`.

(**) *Please note, your browser could be not compatible with features on this project, please be sure to get it updated and to use a modern browser*.

### Set the behavior of the server at the starting:

__If your wish is to open the application in the default browser, do not care of the following.__
As mentioned in the previous point, starting the server, the application will be automatically launched in the default browser.

If you wish to prevent this default behavior or to change the browser where the application is launched (*for example I used Chrome Canary for the development instead of my default browser*) please refer to the `.env` file in the root of the application.

Open it in the editor and choose an option.
At the moment both options are left commented (a commented string in the `.env` file is identified by the character `#`).
Leaving it unchanged, it will be followed the default behavior after the server is started.
If your wish is to use a different browser,find and insert the path to launch the browser on your system in place of the string `{INSERT_THE_PATH_HERE}`.

### Credits:

- Image Credits:
   - greenfinch: http://www.seenature.org.uk/see-nature-news/the-greenfinch/
   - common blackbird: http://www.nidoingiardino.com/merlo/
   - sparrow: seen on several websites

- Descriptions Credits:
  Mostly from Wikipedia but also from sources of images

  **Help me to give credits, if you know more contact me.**


### License:

MIT License

Copyright (c) 2018 Cristiano Zitarosa

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
