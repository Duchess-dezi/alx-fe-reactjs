import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "./TodoList";

describe("TodoList Component", () => {
    test("renders the todo list with initial todos", () => {
        render(<TodoList />);

        // Check if the initial todos are rendered
        expect(screen.getByText("Learn React")).toBeInTheDocument();
        expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
    });

    test("adds a new todo when form is submitted", () => {
        render(<TodoList />);

        // Get input field and add button
        const input = screen.getByTestId("todo-input");
        const addButton = screen.getByTestId("add-todo-button");

        // Type new todo and submit
        fireEvent.change(input, { target: { value: "Write Tests" } });
        fireEvent.click(addButton);

        // Check if the new todo is added
        expect(screen.getByText("Write Tests")).toBeInTheDocument();
    });

    test("toggles a todo's completion status", () => {
        render(<TodoList />);

        const todoItem = screen.getByText("Learn React");

        // Click to toggle completion
        fireEvent.click(todoItem);

        // Check if the text has line-through (completed)
        expect(todoItem).toHaveStyle("text-decoration: line-through");

        // Click again to un-toggle
        fireEvent.click(todoItem);
        expect(todoItem).toHaveStyle("text-decoration: none");
    });

    test("deletes a todo item", () => {
        render(<TodoList />);

        const deleteButton = screen.getByTestId("delete-1"); // Delete "Learn React"
        fireEvent.click(deleteButton);

        // Check if the item is removed
        expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
    });
});
