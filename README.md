# Redux-To-Do-List-Project-in-React

# Redux To-Do List Project

## Overview

This project demonstrates a simple to-do list application using React and Redux. It showcases the core principles of Redux, including actions, reducers, store, and connecting Redux to React components.

---

## Key Redux Concepts

### Actions
Actions define what should happen in the application. They represent the intention to add, remove, or otherwise modify data in the store. In this project, we use actions to:
- **Add a To-Do**: When a user adds a new task, an action is dispatched to add this to the list.
- **Remove a To-Do**: When a user deletes a task, an action is dispatched to remove it from the list.

### Reducers
Reducers specify how actions modify the application's state. A reducer takes the current state and an action, then returns a new state based on the action type. In this project, our reducer handles two actions:
- **ADD_TODO**: Adds a new item to the to-do list.
- **REMOVE_TODO**: Removes a specific item from the to-do list.

### Store
The store is the central hub that holds the application's state. It provides access to the state and allows us to dispatch actions to update the state. In our project:
- The store is created using the `createStore` function and is connected to the app using the `Provider` component.

### Dispatch
Dispatch is a function that sends actions to the reducers, allowing them to update the state. When a user interacts with the UI (e.g., adding or removing a to-do), the app dispatches an action to update the state accordingly.

### React-Redux Hooks: `useSelector` and `useDispatch`
- **useSelector**: Allows components to access and select specific pieces of the Redux state. In this project, `useSelector` is used to retrieve the current to-do list from the Redux store.
- **useDispatch**: Allows components to dispatch actions to modify the state. In this project, `useDispatch` is used to dispatch `addTodo` and `removeTodo` actions.

---

## Installation and Usage

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install

   ## Folder Structure

The project follows this folder structure:

- **`src/store.js`**: Configures the Redux store to manage the application's global state.
- **`src/reducers`**: Contains reducers to manage state transformations in response to dispatched actions.
- **`src/actions`**: Defines actions that represent what needs to happen in the app (e.g., adding or removing to-do items).
- **`src/components`**: Contains React components like `AddTodo` and `TodoList` that interact with the Redux store to display and update the to-do list.

---

Each file and folder plays a specific role in setting up and managing the application state using Redux.

