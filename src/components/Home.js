import { createAction } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToDo, deleteToDo } from "../lib/counterSlice";

function Home() {
    const toDos = useSelector(state => state.toDos);
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const onChange = (e) => {
        setText(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(addToDo(text));
    }
    const onDelClick = (id) => {
        dispatch(deleteToDo(id));
    }
    return <div>
        <h1>To Do</h1>
        <form onSubmit={onSubmit}>
            <input type="text" value={text} onChange={onChange} />
            <button>add</button>
        </form>
        <ul>
            {toDos.map((toDo, idx) => (
                <li key={idx} id={toDo.id}>
                    <Link to={`/${toDo.id}`}>
                        {toDo.text}
                    </Link>
                    <button onClick={() => onDelClick(toDo.id)}>del</button>
                </li>
            ))}
        </ul>
    </div>
}

export default Home;