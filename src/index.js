import { addTask, completeTask, fetchTodo, removeTask } from "./store/tasks";
import { store } from "./store/configureStore";

store.subscribe(()=>{
    console.log("Updated",store.getState());
})

store.dispatch(addTask("test task"))
console.log(store.getState());
store.dispatch(completeTask(1));
store.dispatch(removeTask(1));
store.dispatch(fetchTodo())
console.log(store.getState());