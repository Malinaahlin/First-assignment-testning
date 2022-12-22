/**
*@jest-environment jsdom
*/
import { IAddResponse } from "../ts/models/IAddResult";
import { addTodo, changeTodo, removeAllTodos } from "../ts/functions";
import { Todo } from "../ts/models/Todo";


test("should add new todo", () => {
    let todos: Todo[] = [];
    let text:  string = "New Todo";
    let response: IAddResponse = addTodo (text, todos);
    expect(response.success).toBe(true);
  });

test("should add todo to list", () => {
    let todos: Todo[] = [];
    let text: string = "";
    let response: IAddResponse = addTodo (text, todos);
    expect(response.success).toBe(false);
});

test("should change todo", () => {
  let todo: Todo = new Todo("Todo", false);
  changeTodo(todo);
  expect(todo.done).toBe(true);
});

test("should remove todos", () => {
  let todo: Todo[] = [new Todo("Todo", false)];
  removeAllTodos(todo);
  expect(todo.length).toBe(0);
});

test("should not add todo with less than 2 letters", () => {
  let todos: Todo[] = [];
  let text: string = "";
  let response: IAddResponse = addTodo (text, todos);
  expect(response.success).toBe(false);
});