import reducer from './reducer';
import {createTodo, CREATE_TODO, toggleTodo, TOGGLE_TODO, filterTodos, FILTER_TODOS} from './actions';

describe("Testing each reducer", function () {
    test("CREATE_TODO", function () {
        const initialState = {todos: [], nextId: 1};
        const state = reducer(initialState, createTodo("Test"));
        expect(state.todos).toHaveLength(1);
        expect(state.todos[0]).toEqual({id: 1, done: false, text: "Test"});
    })

    test("TOGGLE_TODO", function() {
      const initialState = {todos: [], nextId: 1, filter: 'all'};
      let state = reducer(initialState, createTodo("Test"));
      state = reducer(state, toggleTodo(1));
      expect(state.todos[0].done).toEqual(true)
    })

    test("FILTER_TODOS", function() {
      const initialState = {todos: [], nextId: 1, filter: 'all'};
      let state = reducer(initialState, createTodo("Test"));
      state = reducer(state, toggleTodo(1));
      state = reducer(state, filterTodos('completed'));
      console.log(state.todos)
      expect(state.todos).toHaveLength(1);
    })
})
