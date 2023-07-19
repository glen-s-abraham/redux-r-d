import { createAction, createReducer } from "@reduxjs/toolkit";

//Actions
export const addTask = createAction("ADD_TASK");
export const removeTask = createAction("REMOVE_TASK");
export const completeTask = createAction("COMPLETE_TASK");

//Reducers
let id = 1; 
export const reducer = createReducer([], {
  [addTask.type]: (state, action) => {
    state.push({
      id: id++,
      task: action.payload.task,
      completed: false,
    });
  },
  [removeTask.type]: (state, action) => {
    const index = state.findIndex(({ id }) => id === action.payload.id);
    state.splice(index,1)
  },
  [completeTask.type]: (state, action) => {
    const index = state.findIndex(({ id }) => id === action.payload.id);
    state[index].completed = true 
  },
});

