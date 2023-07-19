import { addTask, completeTask, fetchTodo, removeTask } from "./store/tasks";
import { store } from "./store/configureStore";


store.subscribe(()=>{
    console.log("Updated",store.getState());
})

store.dispatch(addTask({task:"test task"}))
console.log(store.getState());
store.dispatch(completeTask({id:1}));
store.dispatch(removeTask({id:1}));

console.log(store.getState());