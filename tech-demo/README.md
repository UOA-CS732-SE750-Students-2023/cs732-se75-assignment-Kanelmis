# Data Visualization Tech Demo

Welcome to our Data Visualization Hackathon Demo! Our team  aims developing an online hackathon platform to support individuals in managing and participating in projects. And for this tech-demo, I primarily focuses on demonstrating the capabilities of our chosen visualization library, along with sample UI components library that can be integrated into the platform. The demo will cover the following aspects:

1. **Visualization Library**: An introduction to the selected visualization library, its features, and capabilities.
2. **Sample Data Set**: A curated data set that represents typical user engagement and platform data.
3. **Data Visualizations**: A showcase of various data visualizations that can be created to cater t analyistist’s requirement.
4. **UI Components**: A presentation of potential UI components that created by open source UI libarary which can be integrated into your platform for seamless data visualization and analysis.



As the team manager, I oversee the entire project and ensure that everything runs smoothly. My role involves working closely with both frontend and backend developers to achieve the project's goals.That’s is why this demo covers both frontend and the backend libraries. 

# Major Libraries Used

Data visualization libraries. Used Line, Pie, Bar Chart and Data Grid in this tech demo. To give visualization of the analyist data winthin the platform.

## Visuliazation Library

### @nivo

Used Line, Pie, Bar Chart in this tech demo. 

To add 

```
yarn add @Nivo/core
```

![截屏2023-04-10 下午10.38.33](../../../../../Documents/Typora/Images/截屏2023-04-10 下午10.38.33.png)

### @mui/x-data-grid

Provide a grid view of data to help admin to look into the detail of the hacakthon and this will bind with the hackathon management section. 

![截屏2023-04-10 下午10.38.38](../../../../../Documents/Typora/Images/截屏2023-04-10 下午10.38.38.png)

## Supportive UI Library. 

### @react-pro-sidebar



Use the library specialised to create a side bar enhence the speed of the development  

### @mui/material

This library support the theme change which is already disabled in this demo. 



## 



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



# Debug

## Npm run not works

You'll need to use the `--legacy-peer-deps` flag to work around the error while we work on removing `react-motion` which is causing the error.

```
npm install --legacy-peer-deps
```

And run npm start again

```
npm start
```

