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

- For development, you will need Node.js and a javascript package manager, npm, installed in your environement.
- You will also need to install all dependent npm packages used in the project, to do so use:
```
  $ npm install all
```

## Running the project

- Run the following command:

 ```
$ npm start
```
- Call the following endpoint on your local host:

```
http://localhost:3000/languages/getTrendingLanguagesInRepos
```

## What to expect

You will recieve a data list in JSON format including:

- Language
- Number of repositories using the language
- A list of repositories (as objects) using the language


## Credits

You can find more about the coding challenge [here](https://github.com/gemography/backend-coding-challenge/blob/master/README.md)
