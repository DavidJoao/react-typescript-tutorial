import React, { useState } from 'react';
import './App.css';
import InputField from './InputField';
import { Todo } from './model'


const App: React.FC = () => {

let tasks: string[] = ['David'];
const [ todo, setTodo ] = useState<string>('')
const [ todos, setTodos ] = useState<Todo[]>([])

const handleAdd = (e: React.FormEvent) => {
  e.preventDefault()

  if(todo){
    setTodos([...todos, {id: Date.now(), todo: todo, isDone: false}])
  }
}

  return (
    <div className="App">
      <h1>Tasks:</h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <ul>
        {tasks.map((item) => {
          return (
            <div style={{display:'flex', flexDirection:'row', margin:'0 auto'}}>
              <li style={{margin:'0 auto', listStyle:'none'}}>{item}</li><button>x</button>
            </div>
          )})}
      </ul>
    </div>
  );
}
export default App;
