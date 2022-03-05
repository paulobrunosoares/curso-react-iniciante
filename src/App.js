import React, { useState } from "react";
import "./styles.css";
import NavBar from "./components/NavBar/NavBar";
import TaskList from "./components/TaskLis/Tasklist";

let idAcc = 0;
const generatedId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    console.log("função sendo chamada em App");
    const newTask = {
      id: generatedId(),
      title,
      state
    };

    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };

  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };

  const daleteTask = (id) => {
    setTasks((existingTasks) => {
      return existingTasks.filter((task) => task.id !== id);
    });
  };

  return (
    <div className="App">
      <NavBar />
      {/* <ul className="lista">
        <li>Aprenderemos React</li>
        <li>Aprenderemos Componentes</li>
      </ul> */}
      <div className="container">
        <TaskList
          title="Pendente"
          onAddTask={addTask}
          taskState={"Pendente"}
          tasks={tasks.filter((t) => t.state === "Pendente")}
          onTaskUpdate={updateTask}
          onDeleteTask={daleteTask}
        />
        <TaskList
          title="Fazendo"
          onAddTask={addTask}
          taskState={"Fazendo"}
          tasks={tasks.filter((t) => t.state === "Fazendo")}
          onTaskUpdate={updateTask}
          onDeleteTask={daleteTask}
        />
        <TaskList
          title="Completa"
          onAddTask={addTask}
          taskState={"Completa"}
          tasks={tasks.filter((t) => t.state === "Completa")}
          onTaskUpdate={updateTask}
          onDeleteTask={daleteTask}
        />
      </div>
    </div>
  );
}
