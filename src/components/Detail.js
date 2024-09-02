import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"

export default function Detail() {
    const {id} = useParams();
    const toDos = useSelector(state => state);
    console.log(toDos)

    const toDo = toDos.find(toDo => {
        return toDo.id == id
    });
    console.log(toDo);
    return <div>
        {toDo.text}
    </div>
}