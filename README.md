# Redux-Todo-Jest-Testing
Testing a component, actions and reducer with Jest

# Redux Todo Jest Testing

Testing a component, actions and reducer with Jest

## Getting Started  

Download Starter Files starter_files.zip (83 KB)
To get started you will need to download the attached starter files and run the following commands from within the `starter_files` directory:

* `yarn install`

* `yarn start`

* `yarn test` (from another terminal window pointed at the `starter_files` directory)

> Notice the test written in `starter_files/src/App.test.js` passed: "`PASS src/App.test.js`* "

Create 3 new files:

* `starter_files/src/components/Todo.test.js`

* `starter_files/src/actions.test.js`

* `starter_files/src/reducer.test.js`

## Assignment  

* Write a snapshot test for the Todo component within src/components/Todo.test.js.

* Write a unit test for all 3 action creators within src/actions.test.js.

  * `createTodo`

  * `toggleTodo`

  * `filterTodos`

Write a unit test for all 3 action types that can be passed to the reducer within `src/reducer.test.js`.

  * `CREATE_TODO`

  * `TOGGLE_TODO`

  * `FILTER_TODOS`

> Make sure to import all of the needed dependencies into each test file

## Outcome  

You should have at least 8 passing tests when finished

* 1 from `src/App.test.js`

* 1 from `src/components/Todo.test.js`

* 3 from `src/actions.test.js`

* 3 from `src/reducer.test.js`

There should also be a new `src/components/__snapshots__` folder and within that folder a new file: `Todo.test.js.snap`.
