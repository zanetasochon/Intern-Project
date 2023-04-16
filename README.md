# OpenX Intern Project

This project is a solution to the OpenX intern project, which involves retrieving data from the following API endpoints:

Users: https://fakestoreapi.com/users

Carts: https://fakestoreapi.com/carts/?startdate=2000-01-01&enddate=2023-04-07

Products: https://fakestoreapi.com/products

The program has the following features:

1. Retrieves user, product, and shopping cart data from the API endpoints,

2. Creates a data structure containing all available product categories and the total value of products of a given category,

3. Finds a cart with the highest value, determines its value and the full name of its owner,
4. Finds the two users living furthest away from each other.

## Project

Link to the app: [Intern Project](https://intern-project-openx.netlify.app)

## Project Author

This project was created by [Żaneta Sochoń](https://github.com/zanetasochon).

## Tools / techniques

The project is built using Vite, a tool for fast and efficient web application development, and TypeScript, a programming language that provides static typing. This makes the project safer and more reliable.

Dependencies are defined in the "dependencies" and "devDependencies" sections of the package.json file. The most important dependencies include:

Vite: a tool for fast web app development using modern technologies like ECMAScript Modules and React.

Typescript: a programming language that provides static typing, resulting in a safer and more reliable project.

React: a library for building user interfaces.

Axios: a library for making HTTP requests.

React-query: a library for easy data management in React.

Geo-position.ts: a library that allows for easy retrieval of geolocation information.

## Getting Started

#### Prerequisites

To run the project locally, you will need the following installed on your machine:

- Node.js
- NPM package manager

## Installation

1. Clone the repository to your local machine,

2. Open a terminal and navigate to the project folder,

3. Install the required dependencies by running npm install.

## Running the project

1. Open a terminal in the project folder
   Run:

```bash
npm run dev
```

to start the project

2. Open a web browser and navigate to http://localhost:5173 to view the site

## Building the project

To build the project for production, run:

```bash
npm run build
```

The production-ready files will be placed in the dist folder.

## Testing

Unit tests were implemented using Jest, while end-to-end tests were implemented using Cypress.

The unit tests can be run using the

```bash
npm test
```

and end-to-end tests:

```bash
npm run cypress:open
```

commands, respectively.

## 🤝 Contributing

Contributions to the project are welcome! Please feel free to submit a pull request if you would like to make any improvements or additions.
