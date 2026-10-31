// "use client"
// import React from 'react'
// import Header from './components/Header'
// import TaskForm from './components/TaskForm'
// import TaskList from './components/TaskList'

// const page = () => {
//   return (
//     <div>
//       <Header />
//       <TaskForm />
//       <TaskList/>
//       <tailwindcss></tailwindcss>
//     </div>
//   )
// }

// export default page;


// "use client";

// import { useState } from "react";
// import Header from "./components/Header";
// import TaskForm from "./components/TaskForm";
// import TaskList from "./components/TaskList";

// export default function Page() {
//   const [tasks, setTasks] = useState([]);

//   const addTask = (text) => {
//     const newTask = {
//       id: Date.now(),
//       text: text,
//     };

//     setTasks((prevTasks) => [...prevTasks, newTask]);
//   };

//   const deleteTask = (id) => {
//     setTasks((prevTasks) =>
//       prevTasks.filter((task) => task.id !== id)
//     );
//   };

//   return (
//     <main className="min-h-screen bg-slate-50">

//       <Header />

//       <section className="py-4">

//         <TaskForm onAddTask={addTask} />

//         <TaskList
//           tasks={tasks}
//           onDeleteTask={deleteTask}
//         />

//       </section>

//     </main>
//   );
// }



"use client";

import { useState, useEffect } from "react";

import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

export default function Page() {

  const [tasks, setTasks] = useState([]);
  const [isDark, setIsDark] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load saved data when the application starts
  useEffect(() => {

    const savedTasks = localStorage.getItem("tasks");
    const savedTheme = localStorage.getItem("darkMode");

    if (savedTasks) {
      try {
        const parsedTasks = JSON.parse(savedTasks);

        if (Array.isArray(parsedTasks)) {
          setTask(parsedTasks);
        }
      } catch {
        console.error("Could not load saved tasks.");
      }
    }

    if (savedTheme !== null) {
      (savedTheme === "true");
    }

    (true);

  }, []);

  // Save tasks whenever they change
  useEffect(() => {

    if (!isLoaded) return;

    localStorage.setItem("tasks", JSON.stringify(tasks));

  }, [tasks, isLoaded]);

  // Save theme preference
  useEffect(() => {

    if (!isLoaded) return;

    localStorage.setItem("darkMode", JSON.stringify(isDark));

  }, [isDark, isLoaded]);

  // Add task
  const addTask = (text, deadline) => {

    const newTask = {
      id: Date.now() + Math.random(),
      text,
      deadline,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);

  };

  // Delete task
  const deleteTask = (id) => {

    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );

  };

  // Mark task as completed or pending
  const toggleTask = (id) => {

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );

  };

  // Edit task
  const editTask = (id, newText, newDeadline) => {

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              text: newText,
              deadline: newDeadline,
            }
          : task
      )
    );

  };

  // Toggle dark mode
  const toggleDarkMode = () => {

    setIsDark((prev) => !prev);

  };

//   return (

//     <main className={`min-h-screen transition-colors duration-300 ${
//       isDark ? "bg-slate-950" : "bg-slate-50"
//     }`}>

//       <Header
//         isDark={isDark}
//         toggleDarkMode={toggleDarkMode}
//       />

//       <TaskForm
//         onAddTask={addTask}
//         isDark={isDark}
//       />

//       <TaskList
//         tasks={tasks}
//         onDeleteTask={deleteTask}
//         onToggleTask={toggleTask}
//         onEditTask={editTask}
//         isDark={isDark}
//       />

//     </main>

//   );

// }


return (
  <main className={`min-h-screen transition-colors duration-300 ${
    isDark ? "bg-slate-950" : "bg-slate-50"
  }`}>

    <Header
      isDark={isDark}
      toggleDarkMode={toggleDarkMode}
    />

    <section className="max-w-5xl mx-auto px-5 pt-10">

      <div className="mb-8">

        <p className="text-blue-600 font-semibold text-sm mb-2">
          YOUR WORKSPACE
        </p>

        <h2 className={`text-3xl md:text-4xl font-bold ${
          isDark ? "text-white" : "text-slate-800"
        }`}>
          Manage your day.
        </h2>

        <p className="text-slate-500 mt-2">
          Organize your tasks and stay productive.
        </p>

      </div>

    </section>

    <TaskForm
      onAddTask={addTask}
      isDark={isDark}
    />

    <TaskList
      tasks={tasks}
      onDeleteTask={deleteTask}
      onToggleTask={toggleTask}
      onEditTask={editTask}
      isDark={isDark}
    />

  </main>
);

}

