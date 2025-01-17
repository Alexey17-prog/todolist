import './App.css'
import {TodolistItem} from "./TodolistItem.tsx";

export type Task = {
    id: number;
    title: string;
    isDone: boolean;
}

export const App = () => {

    const tasks1: Task[] = [
        { id: 1, title: 'HTML&CSS', isDone: true },
        { id: 2, title: 'JS', isDone: true },
        { id: 3, title: 'ReactJS', isDone: false },
    ]
    
    return (
        <div className="app">
            <TodolistItem title={'TodolistItem1'} tasks={tasks1}/>
        </div>
    )
}

export default App
