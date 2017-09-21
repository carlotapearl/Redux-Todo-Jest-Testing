import React from 'react';
import renderer from 'react-test-renderer';
import Todo from "./Todo";

test('Todo renders correctly', () => {
    const tree = renderer.create(
        <Todo todo={{text: "Test", id: 1, done: false}} />
    ).toJSON(); //converts it to JSON
    expect(tree).toMatchSnapshot(); //checks if it matches
});
