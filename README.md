# React typescript template

## What this project is

This is both a Typescriopt React UI, and a very lightweight node server. The UI make a single API call to the server, as an example of conditionally rendering HTML elements as we wait for HTTP requests.

# Prerequisites

- Node 12x installed

# Quickstart

- In the root directory, run

```bash
git clone https://github.com/willissa2121/react-ts-template.git
cd react-typescript-template/server
npm i
node server.js
```

- Now, in a seperate terminal in the root directory, run

```bash
cd react-typescript-template/ui
npm i
npm run start
```

- The application UI will serve at http://localhost:3000
- The application server will server at http://localhost:5000

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `usage with docker`

In the terminal with the Dockerfile in the root directory.

```bash
docker build . -t <IMAGE_NAME>
```

. = runs the dockerfile in the current root directory
-t = Tags your image.

After the image has built.

```bash
docker run --name <CONTAINER_NAME> -d -p 3000:3000 <IMAGE_NAME>
```

-d = Runs as a detached head, doesnt take over your terminal.
-p = maps the external port available to your server/browswer to the internal port. In your case, the second port will always be 3000.
--name = adds a pliantext name for the container that will host the image. If you remove the --name flag a random container name will be generated
