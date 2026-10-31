// import React from 'react'
// import { useState } from 'react';

// function TaskForm() {
//   const [task, setTask] = useState("");
//   const [tasks, setTasks] = useState([]);

//   const addTask = () => {
//     if (!task.trim()) return;
//     const newTask = { id: Date.now(), text: task };
//     setTasks(prev => [...prev, newTask]);
//     setTask("");
//   };

//   const deleteTask = (id) => {
//     setTasks(prev => prev.filter(t => t.id !== id));
//   };

//   return (
//     <div class = "form-container">
//       <div class = "form-input">
//       <input value={task} onChange={e => setTask(e.target.value)} placeholder="Add a new task..." />
//       <button onClick={addTask}><span>+</span>Add</button>
//       </div>
//       <div>
//       <ul>
//         {tasks.map(t => (
//           <li key={t.id}>
//             {t.text} <button onClick={() => deleteTask(t.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//       </div>
//     </div>
    
//   );
  
// }

// <div class ="list-container">
//   <input type="checkbox" />
//   <p key={t.id}> {t.text} <button onClick={() => deleteTask(t.id)}>Delete</button>
// </p>
// </div>


// export default TaskForm
// "use client"
// import { useState } from "react";

// function TaskList() {
//   const [task, setTask] = useState("");
//   const [tasks, setTasks] = useState([]);

//   const addTask = () => {
//     if (!task.trim()) return;

//     const newTask = {
//       id: Date.now(),
//       text: task.trim()
//     };

//     setTasks(prev => [...prev, newTask]);
//     setTask("");
//   };

//   const deleteTask = (id) => {
//     setTasks(prev => prev.filter(t => t.id !== id));
//   };

//   return (
//     <div className="min-h-screen bg-slate-100 flex justify-center items-center p-4">

//       <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">

//         {/* Heading */}
//         <h1 className="text-3xl font-bold text-slate-800 text-center mb-2">
//           My Task List
//         </h1>

//         <p className="text-slate-500 text-center mb-6">
//           Organize your daily activities
//         </p>

//         {/* Input Section */}
//         <div className="flex gap-2 mb-6">

//           <input
//             type="text"
//             value={task}
//             onChange={e => setTask(e.target.value)}
//             placeholder="Enter a new task..."
//             className="flex-1 min-w-0 border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
//           />

//           <button
//             onClick={addTask}
//             className="bg-blue-600 text-white font-semibold px-5 py-3 rounded-lg hover:bg-blue-700 active:scale-95 transition"
//           >
//             Add
//           </button>

//         </div>

//         {/* Task List */}
//         <ul className="space-y-3">

//           {tasks.map(t => (
//             <li
//               key={t.id}
//               className="flex justify-between items-center gap-3 bg-slate-50 border border-slate-200 p-4 rounded-lg hover:shadow-md transition"
//             >

//               <span className="text-slate-700 font-medium break-word">
//                 {t.text}
//               </span>

//               <button
//                 onClick={() => deleteTask(t.id)}
//                 className="bg-red-500 text-white text-sm px-3 py-2 rounded-md hover:bg-red-600 active:scale-95 transition shrink-0"
//               >
//                 Delete
//               </button>

//             </li>
//           ))}

//         </ul>

//         {/* Empty State */}
//         {tasks.length === 0 && (
//           <p className="text-center text-slate-400 py-6">
//             No tasks yet. Add your first task!
//           </p>
//         )}

//         {/* Task Counter */}
//         <div className="mt-6 pt-4 border-t border-slate-200 text-center">

//           <p className="text-sm text-slate-500">
//             Total Tasks: <span className="font-bold text-blue-600">{tasks.length}</span>
//           </p>

//         </div>

//       </div>

//     </div>
//   );
// }

// export default TaskList;




// "use client";

// import { useState } from "react";

// const TaskForm = ({ onAddTask }) => {
//   const [task, setTask] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!task.trim()) return;

//     onAddTask(task.trim());
//     setTask("");
//   };

//   return (
//     <div className="w-full max-w-3xl mx-auto px-4 mt-8">

//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100"
//       >

//         <label className="block text-slate-700 font-semibold mb-3">
//           Add a New Task
//         </label>

//         <div className="flex flex-col sm:flex-row gap-3">

//           <input
//             type="text"
//             value={task}
//             onChange={(e) => setTask(e.target.value)}
//             placeholder="What needs to be done?"
//             className="flex-1 min-w-0 px-4 py-3 border border-slate-200 rounded-lg outline-none text-slate-700 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
//           />

//           <button
//             type="submit"
//             className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-200 active:scale-95"
//           >
//             + Add Task
//           </button>

//         </div>

//       </form>

//     </div>
//   );
// };

// export default TaskForm;



// "use client";

// import { useState } from "react";

// const TaskForm = ({ onAddTask, isDark }) => {
//   const [task, setTask] = useState("");
//   const [deadline, setDeadline] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!task.trim()) return;

//     onAddTask(task.trim(), deadline);

//     setTask("");
//     setDeadline("");
//   };

//   return (
//     <div className="w-full max-w-3xl mx-auto px-4 mt-8">

//       <form
//         onSubmit={handleSubmit}
//         className={`p-5 md:p-6 rounded-2xl shadow-sm border transition-colors ${
//           isDark
//             ? "bg-slate-800 border-slate-700"
//             : "bg-white border-slate-100"
//         }`}
//       >

//         <label className={`block font-semibold mb-3 ${
//           isDark ? "text-white" : "text-slate-700"
//         }`}>
//           Add a New Task
//         </label>

//         <div className="flex flex-col gap-3">

//           <input
//             type="text"
//             value={task}
//             onChange={(e) => setTask(e.target.value)}
//             placeholder="What needs to be done?"
//             className={`w-full px-4 py-3 rounded-lg border outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition ${
//               isDark
//                 ? "bg-slate-900 border-slate-700 text-white placeholder:text-slate-500"
//                 : "bg-white border-slate-200 text-slate-700 placeholder:text-slate-400"
//             }`}
//           />

//           <div className="flex flex-col sm:flex-row gap-3">

//             <input
//               type="date"
//               value={deadline}
//               onChange={(e) => setDeadline(e.target.value)}
//               className={`flex-1 px-4 py-3 rounded-lg border outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition ${
//                 isDark
//                   ? "bg-slate-900 border-slate-700 text-white"
//                   : "bg-white border-slate-200 text-slate-700"
//               }`}
//             />

//             <button
//               type="submit"
//               className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition active:scale-95"
//             >
//               + Add Task
//             </button>

//           </div>

//         </div>

//       </form>

//     </div>
//   );
// };

// export default TaskForm;


"use client";

import { useState } from "react";

const TaskForm = ({ onAddTask, isDark }) => {

  const [task, setTask] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.trim()) return;

    onAddTask(task.trim(), deadline);

    setTask("");
    setDeadline("");
  };

  return (
    <section className="w-full max-w-5xl mx-auto px-5 mt-8">

      <form
        onSubmit={handleSubmit}
        className={`rounded-2xl border p-6 shadow-sm transition-colors ${
          isDark
            ? "bg-slate-900 border-slate-800"
            : "bg-white border-slate-200"
        }`}
      >

        <div className="mb-5">

          <h2 className={`text-lg font-bold ${
            isDark ? "text-white" : "text-slate-800"
          }`}>
            Create a new task
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Add something you want to accomplish today.
          </p>

        </div>

        <div className="flex flex-col md:flex-row gap-3">

          {/* Task Input */}
          <div className="flex-1">

            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="What needs to be done?"
              aria-label="Task description"
              className={`w-full px-4 py-3.5 rounded-xl border outline-none transition focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 ${
                isDark
                  ? "bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                  : "bg-slate-50 border-slate-200 text-slate-700 placeholder:text-slate-400"
              }`}
            />

          </div>

          {/* Deadline Input */}
          <div className="md:w-48">

            <input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              aria-label="Task deadline"
              className={`w-full px-4 py-3.5 rounded-xl border outline-none transition focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 ${
                isDark
                  ? "bg-slate-800 border-slate-700 text-white"
                  : "bg-slate-50 border-slate-200 text-slate-700"
              }`}
            />

          </div>

          {/* Add Button */}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-blue-500/20 transition duration-200"
          >
            + Add Task
          </button>

        </div>

      </form>

    </section>
  );
};

export default TaskForm;

