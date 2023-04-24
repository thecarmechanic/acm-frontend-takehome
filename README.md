# Instructions

Welcome to ACM Dev Team's frontend takehome challenge!

In this challenge, you'll need to fix certain bugs and implement some features with the starter code given to you.

Dev Team has created a webpage for members to track which ACM Events they've attended, but some of the code isn't working! It's up to you to help us fix our codebase!

Start by first cloning the GitHub repository to your local machine and make changes to it using VSCode or another editor. To view a preview of the webpage, follow the instructions below.

Once you're finished with the challenge, you're all set! Keep your changes on hand because we'll be discussing them during our interview and asking you to present/demo your code.

If you're unable to finish all of the tasks before your scheduled interview, no worries! We'll review the code you did write and go through some of the remaining exercises together.

### Prerequisites

- `node`
- `npm` or `yarn`

### Start the server

- Run `yarn install`
- Run `yarn dev`
- Open the app in http://localhost:3000/

or

- Run `npm install`
- Run `npm run dev`
- Open the app in http://localhost:3000/

### Special considerations

#### Technology

At ACM, we use Next.js + React + TypeScript in our codebase.

You are not required to know TypeScript, React, or Next.js before starting this challenge, but some familiarity with JavaScript/TypeScript or React may be helpful.

You're free to search up documentation and resources to help you with this takehome, but be sure that you understand how your solution works!
The following resources may be helpful for you:

- [TypeScript](https://www.typescriptlang.org/docs/)
- [React](https://react.dev/)
- [Next.js](https://nextjs.org/docs) - Knowledge of Next.js will not be necessary to complete this takehome.

#### Solution

- Solutions can be HTML, CSS, or TypeScript oriented, depending on the bug and your solution.
- Modify any file inside the `src` folder as long as the expected result is correct.

---

# Bug 1: Events aren't being loaded

**How to reproduce:**

1. Refresh/view the webpage.

**Expected:** Events from the Membership Portal API should be loaded in and displayed on the screen.

**Actual:** No events are loading in, so the screen is blank.

# Bug 2: Unable to toggle between grid/row view

**How to reproduce:**

1. Click on the grid/row icons on the right of the "All Past Events" bar.

**Expected:** Events preview change from row/grid view depending on which one is clicked.

**Actual:** Events preview stays stuck in grid mode no matter which icon is clicked.

# Bug 3: Events checkbox not working

**How to reproduce:**

1. Click on the checkbox attached to any event card

**Expected:** Clicking the checkbox toggles its value

**Actual:** Nothing happens

# Feature 1: Split events into separate pages

**Issue:** There are way too many event cards on the page at a time!

**Your Task:** Implement buttons that let you move between pages of results! Each page should store 25 events at a time. Left and right arrow icons are located under src/icons as [src/icons/LeftArrowIcon.tsx](src/icons/LeftArrowIcon.tsx) and [src/icons/RightArrowIcon.tsx](src/icons/RightArrowIcon.tsx) for you to use.

**Sample Design:** This component should be located at the bottom of the event tracker page.
![](public/page-selector.png)

# Feature 2: Choose your own adventure!

If you have extra time after completing the first 4 tasks, build something cool that you'd like to add to this application!

Feel free to get creative and add anything that you think enhances the usability or improves the user experience! Try to wow us with your frontend skills!
