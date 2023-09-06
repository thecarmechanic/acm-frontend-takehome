# About
As part of training for ACM's (school club) frontend dev team, I worked on this webpage that allows members to track which ACM Events.

This project utilizes [TypeScript](https://www.typescriptlang.org/docs/), [React](https://react.dev/), [Next.js](https://nextjs.org/docs).

The original starter code for the project can be viewed [here](https://github.com/acmucsd/acm-frontend-takehome).

## Process
The purpose of this challenge is to learn how to fetch and display data from an api, develope simple features on my own, and gain experience debugging and testing code. I was new toTypeScript and Next.js prior to this project.

First I had to fix 3 major bugs in the starter code:
1. The data from the api does not display at all
    - This was because the pre-written function that loaded the events was only instantiated, but not called
2. The user could not toggle between grid/list view
    - This was because the specific view for the buttons were not assigned
3. The checkbox allowing users to select an event to signal attendance was not working
    - The card component never updated, I wrote and onClick function to fix this

Then I added 2 features:
1. Pageination
    - To reduce tedious scrolling because all the events displayed on one page, I created a new component to count and display the page the user switched to and displayed it at the bottom of the page with arrow buttons to allow users to toggle back and forth
    - I set each page to display 25 events each, and counted them to make sure that events didn't repeat
2. Search
    - I created a search bar and wrote a function to filter events displayed on the page in real time according to what the user typed

## Reflection & Next Steps
This project taught me alot about web development, which is a very effective way to communicate information, and I'm excited to keep advancing my skills. If I revisit this project, here are a few more features that would be cool to explore are:
1. A dropdown box of recommended event search based on the letters the user types in the search bar (ex.google)
2. Filter events by groups (ie.attended or not, type-social,professional,cyber,ai,etc)
