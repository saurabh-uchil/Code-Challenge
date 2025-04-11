# 🧪 Take Home Challenge

Build a React + Node.js application that renders a customer's energy accounts and allows a user to make a credit card payment.

### 💡 Our guidance
- You may choose whichever technology stack and libraries you are comfortable with.
- This challenge covers both backend and frontend but **feel free to only focus on the area you are more comfortable with**.
    - If you only wish to showcase the frontend then feel free to use mocks to simulate the backend calls.
    - If you wish only wish to showcase the backend then please provide tests or swagger documentation to simulate its use.
- We believe a modern developer workflow should make use of the best tools available so feel free to use AI tools but be prepared to discuss the end solution and be familiar with the entire codebase.
- We value your time and as such we will pay attention to code quality and design decisions not completeness of the exercise.  This challenge is to serve as a basis to have a further conversation. We recommend you spend no more than 4 hours on this challenge. Feel free to add comments instead of implementation where you feel there would be room for future improvement or you ran out of time.
- Typescript is essential within our platform and will make your code much more robust and as such we would encourage you to leverage and showcase your typescript knowledge.
- Please ensure your code compiles, and include instructions for running it. Ideally, a simple `yarn start` or  `npm start` command for both the backend and frontend should suffice.
- Whilst we absolutely rely on great test coverage within our platform it is not a requirement for this challenge.

### 🎨 Frontend Acceptance Criteria (ACs)

Build a single react page that renders a list of a customers energy accounts.
- ✅ Fetch energy accounts from the backend.
- ✅ The accounts should be rendered in a Card UI format stacked on top of each other and centered on the page.
- ✅ The account balance should change color based on the value:
    - Positive: **green**
    - Negative: **red**
    - Zero: **grey**
- ✅ Implement a filter for filtering accounts by energy type.
- ✅ Clicking on the "Make a Payment" button should open a modal with:
    - title
    - credit card details
    - balance
    - A "Pay" button
- ✅ Clicking the "Pay" button should submit the credit card details to the backend, and on success, show a “Payment Successful” view with a close button.

Example card:<br/>
<img src="./example-ui/example-card.png" alt="card-example" width="640"/>


Example payment modal<br/>
<img src="./example-ui/example-modal.png" alt="modal-example" width="640"/>

### Backend Acceptance Criteria (ACs)

Build out a simple Node.js API.
- ✅ Implement an endpoint to fetch energy accounts
- ✅ Implement an endpoint to process a credit card payment.
- ✅ Mock downstream data sources for energy accounts + credit card processor. See: [Example mocks](./example-mocks/api-example.ts)


### 💎 What We Value

- Well-modularised, robust and clearly-written code.
- Maintainability. Another team member should be able to easily work with your code after you've finished.
- Good State management and code layout.
- Solid understanding of react lifecycles , events and data fetching.
- Solid understanding of styling technologies + technologies.
- Solid understanding of modern react design principles and best practise.
- Solid understanding of modern Node.js best practises.
- Solid understanding of API design.
- Solid understanding of TypeScript.
- Solid understanding of security principles.

### 🚀 Presenting your code

You may either:

- Create a branch and submit a PR to the provided repository, **or**
- Present your codebase during the next technical interview on your local machine.