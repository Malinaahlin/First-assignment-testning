/**
*@jest-environment jsdom
*/
import { Todo } from "../ts/models/Todo";
import * as mainFunctions from "./../ts/main";
import * as functions from "./../ts/functions"

test("should clear todos", () => {
    let spy = jest.spyOn(mainFunctions, "clearTodos").mockReturnValue();
    document.body.innerHTML =`
    <button type="button" id="clearTodos">Rensa lista</button>
    `
    mainFunctions.handleClear();
    document.getElementById("clearTodos")?.click();
    expect(spy).toHaveBeenCalled();
});

test("should create new Todo", () => {
    let spy = jest.spyOn(mainFunctions, "createNewTodo");
    document.body.innerHTML =`
    <form id="newTodoForm">
      <div>
        <input type="text" id="newTodoText" />
        <button>Skapa</button>
        <button type="button" id="clearTodos">Rensa lista</button>
      </div>
      <div id="error" class="error"></div>
    </form>
    `;
    mainFunctions.handleSubmit();
    (document.getElementById("newTodoForm") as HTMLFormElement).submit();
    expect(spy).toHaveBeenCalled();
});


test("should createHtml for todo", () => {
    let todo: Todo[] = [new Todo("New todo", false)];
    let spy = jest.spyOn(mainFunctions, "createHtml").mockReturnValue();
    let text = "New todo";

    mainFunctions.createNewTodo(text, todo);
    expect(spy).toHaveBeenCalled();
});


test("should be able to click", () => {
    let spy = jest.spyOn(mainFunctions, "createNewTodo").mockReturnValue();
    document.body.innerHTML = 
    `<form id="newTodoForm"><div>
    <input type="text" id="newTodoText" />
    <button>Skapa</button>
    </div></form>`;

    document.querySelector("button")?.click();
    expect(spy).toHaveBeenCalled();
});

test("should add class to div", () => {
    let errorText: string = "Error Message";
    let show: boolean = true;    
    document.body.innerHTML = `<div id="error" class="error"></div>`;
    
    mainFunctions.displayError(errorText, show);
    expect((document.getElementById("error") as HTMLDivElement).classList.length).toBe(1);
});

test("should remove class to div", () => {
    let errorText: string = "Error Message";
    let hide: boolean = false;
    document.body.innerHTML = `<div id="error" class="error"></div>`;

    mainFunctions.displayError(errorText, hide);
    expect((document.getElementById("error") as HTMLDivElement).innerHTML).toBe("");
});





