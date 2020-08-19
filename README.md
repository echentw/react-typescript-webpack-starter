# React Typescript Webpack Starter

This is what I use to bootstrap any web project I work on / prototype.

## Bootstrapping this project
```
git clone https://github.com/echentw/react-typescript-webpack-starter
cd react-typescript-webpack-starter
npm install
```

## Run the app
You'll need two different terminal processes: one to build, and one to serve.

1. Run the webpack process to continuously listen for file changes and bundle code into the build/ directory.
```
npm start
```

2. (In a new terminal window) Run the development server.
```
npm run serve
```

3. The app should be available at http://localhost:5000.

## Build for production
```
npm run build
```
The code will be bundled and put into the build/ directory.
