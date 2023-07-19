//Action types
const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const COMPLETE_TASK = "COMPLETE_TASK";

//Actions
export const addTask = (task) => ({ type: ADD_TASK, payload: { task } });
export const removeTask = (id) => ({ type: REMOVE_TASK, payload: { id } });
export const completeTask = (id) => ({ type: COMPLETE_TASK, payload: { id } });
export const fetchTodo = () =>{
    return async (dispatch,getState)=>{
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const task = await res.json();
        dispatch(addTask(task.title));
    }
}

//Reducers
let id = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: ++id,
          task: action.payload.task,
          completed: false,
        },
      ];
    case REMOVE_TASK:
      return state.filter(({ id }) => id !== action.payload.id);

    case COMPLETE_TASK:
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            completed: true,
          };
        }
        return task;
      });
    default:
      return state;
  }
}
