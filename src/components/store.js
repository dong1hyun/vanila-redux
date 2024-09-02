import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "../lib/counterSlice"

const store = configureStore({
    reducer: {
        toDos: toDoReducer
    }
})

export default store;