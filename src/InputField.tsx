import React from "react";

interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleAdd: (e: React.FormEvent) => void
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
    return (
        <form onSubmit={handleAdd}>
            <input placeholder='Ex. Do homework' onChange={(e) => {setTodo(e.target.value)}}></input><button>Add task</button>
        </form>
    )
}

export default InputField