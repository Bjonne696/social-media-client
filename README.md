@@ -0,0 +1,55 @@
<h1>WORKFLOW</h1>

![Workflow](https://bjonne696.github.io/social-media-client/actions/workflows/pages.yml/badge.svg)
- [Deploy static content to Pages](https://bjonne696.github.io/social-media-client/actions/workflows/pages.yml)

![Workflow](https://github.com/NoroffFEU/social-media-client/actions/workflows/tests.yml/badge.svg)
- [Deploy unit test](https://github.com/NoroffFEU/social-media-client/actions/workflows/tests.yml)

![Workflow](https://github.com/NoroffFEU/social-media-client/actions/workflows/e2e.yml/badge.svg)
- [Deploy e2e tests](https://github.com/NoroffFEU/social-media-client/actions/workflows/e2e.yml)


# Description


The Workflow repository enhances the efficiency of development workflows by incorporating scripts and actions dedicated to ensuring code quality. 
By utilizing development tools, we ensure that the code adheres to established standards for linting and semantic integrity. 
To avert potential problems, tests are conducted prior to committing any code to the main branch.

# Content


- **Code Quality Assurance:** Ensure your code's consistency and syntax correctness with ESlint.

- **Deployment Preparation:** Transform source files into deployable outputs.

- **Real-time Development Feedback:** Monitor changes in files and observe immediate impacts.

- **Comprehensive Code Testing:** Rigorously validate your code's functionality through unit and e2e tests.


- **Unit & E2E Testing:** Thoroughly test the code to ensure functionality.

# How to Install

  1. Clone repository
  2. bash `npm install`


# Instructions to get started

Scripts provided for linting, building, initiating, or testing the project include:

- **Lint the code:** `npm run lint`

- **Build the project:** `npm run build`

- **Start the development server:** `npm run start`

- **Testing:**

   - Unit test `npm run run-test`

   - E2E test `npm run e2e-test-client`

   - Or do browser e2e tests `npm run exec-cypress`

# License

This project is using the ISC license.
