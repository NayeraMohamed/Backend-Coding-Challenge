# Backend-Coding-Challenge

## About The Coding Challenge

- Develop a REST microservice that list the languages used by the 100 trending public repos on GitHub.
- For every language, you need to calculate the attributes below 👇:
    - Number of repos using this language
    - The list of repos using the language

Trending repositories simply translates to fetching the most starred repos created in the last 30 days ( from now ).

## Built With

* [Node.js](https://nodejs.org/en/)
* [Express - Node.js web framework](https://expressjs.com/)


## Getting Started

## Prerequisites

- For development, you will need Node.js, Express.js and a javascript package manager, npm, installed in your environement.
- To install all dependent npm packages, use:
```
  $ npm-install-all
```

## Running the project

- Run the following command:

 ```
$ npm start
```
- call the following endpoint on your local host:

```
http://localhost:3000/languages/getTrendingLanguagesInRepos
```

## What to expect

You will recieve a data array in JSON format including:

- language
- number of repositories using the language
- an array of repositories (as objects) using the language


## Credits

You can find more about the coding challenge [here](https://github.com/gemography/backend-coding-challenge/blob/master/README.md)
