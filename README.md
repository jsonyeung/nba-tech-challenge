# Front-End Developer Challenge - NBA Directory

The NBA Directory is a simple web app built in Angular 13 that:

1. Lists All NBA Teams
1. Provides a detailed view of a team including Players

### Run the Angular App

In the root directory, run:

- `npm install`
- `npm start`

You can validate the app is up and running by navigating to ``http://localhost:4200``.

There are two RESTful mock endpoints available to you:
- `GET` : `http://localhost:8080/teams/` - Lists a high level view of all the teams.
- `GET` : `http://localhost:8080/players/` - Lists a high level view of all the players in the league.

These mocks are stored in the `app/mock` folder. For this exercise there will be no need to touch this folder.

### Lint the Angular App
To fix common linting issues, run `npm run -- --fix`

## Challenges:

1. Improve the page to provide the city & division of the teams. 

1. When clicking a team, provide team details including logo and members (players) on the team.

1. Provide a way to display all players and sort them by height or weight.

1. Can you think of ways to improve either the front-end or back-end of this application?

## Future Improvements:
- **Development**
    -  Grouping teams by division is currently done on the front-end. Move this responsibility onto the back-end by grouping during the DB querying process (assuming we have control over the endpoints).
    - Instead of filtering the entire player list based on `teamId` on the front-end, add query params on the back-end to fetch.
    - Cache common HTTP requests [Observables](https://dev.to/angular/how-to-cache-http-requests-in-angular-5c8i)
    - Add tests for front-end components & back-end endpoints to catch bugs and improve code confidence.
    - Set up a CI pipeline to automate the linting, testing, and building process.
    - Squash commits to clean git history.
   

- **Usability and UI/UX**
  - Instead of loading all players at once, a solution would be to load and display a subset of the players, only loading more when the user scrolls down via [infinite scrolling](https://ngx-easy-table.eu/#/infinite-scroll-server).
  - Add UI error handling if data fails to load (i.e. HTTP request fails)
  - Preload any data before loading the component to prevent the flash of empty content on the homepage
