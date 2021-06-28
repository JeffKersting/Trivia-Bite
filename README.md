# Trivia Bite
A Trivia App

### Contributors
- Jeff Kersting: [github profile](https://github.com/JeffKersting/)|[linkedIn](https://www.linkedin.com/in/jeff-kersting/)


#### Compete with friends in daily trivia quizzes.
- **API** built with Node, Express, postgreSQL, Knex and Google Login.
- **WebApp** built with React 
- Written in ES6+ using Babel + Webpack


## Features
- User group creation
- New questions daily


### Desktop
GIF HERE


## Client File Structure 
  
- Add file structure mockup here

## Server File Structure 
 
- Add file structure mockup here

## Setup and Running
- Prerequisites
  - Node
  - postgreSQL

- Create officetrivia database
  - In terminal: 
      `psql`
      `CREATE DATABASE officetrivia;`
      `\q`

- Clone repo `git clone git@github.com:JeffKersting/officeTrivia`

- Configurations
  - ADD `/db/knexfile.js` for database setup (see details below)

<details>
  <Summary>Add This To You Database.JSON file</summary>
    <code>
      {
        development: {
          client: 'pg',
          connection: {
            host: 'localhost',
            database: 'officetrivia',
        },
        pool: {
          min: 2,
          max: 10
        },
        migrations: {
          tableName: 'knex_migrations'
        }
      }
  </code>
</details>

- Switch to `db` directory 
  - In terminal:
    `cd officeTrivia/db`
    `knex migrate:latest`

- Development
  - Run `npm run dev`

## Challenges & Wins
### Challenges
- **Working with timeouts in react** There was a challenge getting React components to render correctly while keeping a running timer. Additionally, properly submitting a user score under various circumstances (user has zero points and runs out of time, user refreshes page during quiz, etc.)

- **Autonomously updating the database** Having never approached cron jobs, there was a research and discovery phase to updating the database periodically (update questions and reset user scores every 24 hours). Once cron dependency was discovered, the process was made much easier.

- **Switching between FE and BE development as issues arose** There were times when the workflow would change abruptly, switching from front-end development to backend when new features or updates were required. This would tend to slow down momentum. 

### Wins/Reflections
- **Building a full stack application** 

- **Implementing proper backend file structure** Previous projects that have used express/postgreSQL have been extremely lightweight. Having never used routes and service layers in a node environment, it was rewarding to research and implement a cleaner file structure. 


## Future Development
- Add unit testing with Jest, and end-to-end testing with Cypress.
- Implement continuous integration (circleCI).
- Add ability to choose categories for Trivia, allowing for quizzes of one category.
- Allow users to invite friends from within the application.

## Author
<table>
    <tr>
        <td> Jeff Kersting <a href="https://github.com/JeffKersting">GH</a></td>
    </tr>
   <td><img src="https://avatars.githubusercontent.com/u/69732297?v=4" alt="Jeff Kersting" width="150" height="auto" /></td>
</table>
