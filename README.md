## What's your favourite GitHub language?  

#### An app which allows the user to enter their github username and will then return their 'favourite' coding language based on the frequency of language in their repos. It will also display the amount of projects they've created in that language. 

##### The app will return multiple languages if the user has an equal amounts of projects written in those languages. The app will return "None!" if the user does not have any languages registered on github and an error message if the username is not recognised. 

[Visit the app!](https://fave-github-language.netlify.com/)

![Imgur](https://i.imgur.com/kiDQaoH.png)
![Imgur](https://i.imgur.com/SQyRs0Q.png)
![Imgur](https://i.imgur.com/FOG6wsf.png)

### To use the app:

Locally:
 
 1. `git clone git@github.com:riannemcc/favourite-github-language.git`
 2. `cd favourite-github-language`
 3. `npm install`
 4. `npm start`
 
 ### To run the tests:
 
 1. `npm start`
 2. `npx cypress open`
 
 ### Tech stack  
 
 React  
 Cypress
 Enzyme  
 
 The app uses the GitHub API.  
 There is currently a mix of 'old' React and 'new' javascript, as I've found that a lot of the learning materials online are not using hooks. If I had more time, I would update all of the components to use the new React. Consideration would also have to be given to whether the app would be efficient if it was given a github profile with a huge number of repositories. 
 
 ![Imgur](https://imgur.com/eNUdwbh.jpg)
 Cypress tests passing.   
 
 
 
 
 
 
 
 
 ## React Documentation:
 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
