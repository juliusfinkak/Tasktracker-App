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
//     <div>
//       <input
//         value={task}
//         onChange={e => setTask(e.target.value)}
//         placeholder="New task"
//       />

//       <button onClick={addTask}>Add</button>

//       <ul>
//         {tasks.map(t => (
//           <li key={t.id}>
//             {t.text}
//             <button onClick={() => deleteTask(t.id)}>
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TaskList;



// "use client";

// const TaskList = ({ tasks, onDeleteTask }) => {
//   return (
//     <div className="w-full max-w-3xl mx-auto px-4 mt-8 mb-10">

//       <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 md:p-6">

//         {/* Header */}
//         <div className="flex justify-between items-center mb-6">

//           <h2 className="text-xl font-bold text-slate-800">
//             My Tasks
//           </h2>

//           <span className="bg-blue-50 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full">
//             {tasks.length} Tasks
//           </span>

//         </div>

//         {/* Task List */}
//         {tasks.length > 0 ? (

//           <ul className="space-y-3">

//             {tasks.map((task) => (
//               <li
//                 key={task.id}
//                 className="flex justify-between items-center gap-3 p-4 bg-slate-50 border border-slate-100 rounded-xl hover:border-blue-200 hover:shadow-sm transition"
//               >

//                 <span className="text-slate-700 font-medium break-words">
//                   {task.text}
//                 </span>

//                 <button
//                   onClick={() => onDeleteTask(task.id)}
//                   className="shrink-0 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
//                 >
//                   Delete
//                 </button>

//               </li>
//             ))}

//           </ul>

//         ) : (

//           <div className="text-center py-10">

//             <p className="text-slate-400 text-4xl mb-3">
//               ✓
//             </p>

//             <h3 className="text-slate-700 font-semibold">
//               No tasks yet!
//             </h3>

//             <p className="text-slate-400 text-sm mt-2">
//               Add a new task to get started.
//             </p>

//           </div>

//         )}

//         {/* Footer */}
//         <div className="mt-6 pt-4 border-t border-slate-100">

//           <p className="text-sm text-slate-500 text-center">
//             You have{" "}
//             <span className="font-bold text-blue-600">
//               {tasks.length}
//             </span>{" "}
//             {tasks.length === 1 ? "task" : "tasks"} in your list.
//           </p>

//         </div>

//       </div>

//     </div>
//   );
// };

// export default TaskList;


// "use client";

// import { useState } from "react";

// const TaskList = ({
//   tasks,
//   onDeleteTask,
//   onToggleTask,
//   onEditTask,
//   isDark
// }) => {

//   const [filter, setFilter] = useState("all");
//   const [editingId, setEditingId] = useState(null);
//   const [editText, setEditText] = useState("");
//   const [editDeadline, setEditDeadline] = useState("");

//   // Filter tasks
//   const filteredTasks = tasks.filter((task) => {
//     if (filter === "pending") return !task.completed;
//     if (filter === "completed") return task.completed;
//     return true;
//   });

//   // Start editing
//   const startEditing = (task) => {
//     setEditingId(task.id);
//     setEditText(task.text);
//     setEditDeadline(task.deadline || "");
//   };

//   // Save edited task
//   const saveEdit = (id) => {
//     if (!editText.trim()) return;

//     onEditTask(id, editText.trim(), editDeadline);
//     setEditingId(null);
//   };

//   const cardStyle = isDark
//     ? "bg-slate-800 border-slate-700"
//     : "bg-white border-slate-100";

//   const textStyle = isDark
//     ? "text-white"
//     : "text-slate-800";

//   return (
//     <div className="w-full max-w-3xl mx-auto px-4 mt-8 mb-10">

//       <div className={`rounded-2xl shadow-sm border p-5 md:p-6 transition-colors ${cardStyle}`}>

//         {/* Header and Counter */}

//         <div className="flex flex-wrap justify-between items-center gap-3 mb-6">

//           <h2 className={`text-xl font-bold ${textStyle}`}>
//             My Tasks
//           </h2>

//           <div className="flex gap-2 text-xs font-semibold">

//             <span className="bg-blue-50 text-blue-600 px-3 py-2 rounded-full">
//               Total: {tasks.length}
//             </span>

//             <span className="bg-green-50 text-green-600 px-3 py-2 rounded-full">
//               Done: {tasks.filter(t => t.completed).length}
//             </span>

//           </div>

//         </div>

//         {/* Filters */}

//         <div className="flex flex-wrap gap-2 mb-6">

//           {["all", "pending", "completed"].map((item) => (

//             <button
//               key={item}
//               onClick={() => setFilter(item)}
//               className={`px-4 py-2 rounded-lg text-sm font-semibold capitalize transition ${
//                 filter === item
//                   ? "bg-blue-600 text-white"
//                   : isDark
//                     ? "bg-slate-700 text-slate-300 hover:bg-slate-600"
//                     : "bg-slate-100 text-slate-600 hover:bg-slate-200"
//               }`}
//             >
//               {item}
//             </button>

//           ))}

//         </div>

//         {/* Task List */}

//         {filteredTasks.length > 0 ? (

//           <ul className="space-y-3">

//             {filteredTasks.map((task) => (

//               <li
//                 key={task.id}
//                 className={`p-4 rounded-xl border transition ${
//                   isDark
//                     ? "bg-slate-900 border-slate-700"
//                     : "bg-slate-50 border-slate-100 hover:border-blue-200"
//                 }`}
//               >

//                 {editingId === task.id ? (

//                   /* Edit Mode */

//                   <div className="space-y-3">

//                     <input
//                       type="text"
//                       value={editText}
//                       onChange={(e) => setEditText(e.target.value)}
//                       className={`w-full p-3 rounded-lg border outline-none focus:ring-2 focus:ring-blue-500 ${
//                         isDark
//                           ? "bg-slate-800 border-slate-600 text-white"
//                           : "bg-white border-slate-200 text-slate-700"
//                       }`}
//                     />

//                     <input
//                       type="date"
//                       value={editDeadline}
//                       onChange={(e) => setEditDeadline(e.target.value)}
//                       className={`w-full p-3 rounded-lg border outline-none ${
//                         isDark
//                           ? "bg-slate-800 border-slate-600 text-white"
//                           : "bg-white border-slate-200 text-slate-700"
//                       }`}
//                     />

//                     <div className="flex gap-2">

//                       <button
//                         onClick={() => saveEdit(task.id)}
//                         className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700"
//                       >
//                         Save
//                       </button>

//                       <button
//                         onClick={() => setEditingId(null)}
//                         className="bg-slate-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-slate-600"
//                       >
//                         Cancel
//                       </button>

//                     </div>

//                   </div>

//                 ) : (

//                   /* Normal Task Display */

//                   <div className="flex flex-wrap justify-between items-center gap-3">

//                     <div className="flex items-start gap-3 flex-1 min-w-0">

//                       <input
//                         type="checkbox"
//                         checked={task.completed}
//                         onChange={() => onToggleTask(task.id)}
//                         className="w-5 h-5 mt-1 accent-blue-600 cursor-pointer shrink-0"
//                       />

//                       <div className="min-w-0">

//                         <p className={`font-medium wrap-break-word ${
//                           task.completed
//                             ? "line-through text-slate-400"
//                             : textStyle
//                         }`}>
//                           {task.text}
//                         </p>

//                         {task.deadline && (

//                           <p className={`text-xs mt-2 ${
//                             isDark
//                               ? "text-slate-400"
//                               : "text-slate-500"
//                           }`}>
//                             Deadline: {task.deadline}
//                           </p>

//                         )}

//                         {task.completed && (

//                           <span className="text-xs text-green-500 font-semibold">
//                             Completed
//                           </span>

//                         )}

//                       </div>

//                     </div>

//                     <div className="flex gap-2">

//                       <button
//                         onClick={() => startEditing(task)}
//                         className="bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-lg text-sm font-semibold transition"
//                       >
//                         Edit
//                       </button>

//                       <button
//                         onClick={() => onDeleteTask(task.id)}
//                         className="bg-red-50 text-red-500 hover:bg-red-500 hover:text-white px-3 py-2 rounded-lg text-sm font-semibold transition"
//                       >
//                         Delete
//                       </button>

//                     </div>

//                   </div>

//                 )}

//               </li>

//             ))}

//           </ul>

//         ) : (

//           <div className="text-center py-10">

//             <p className="text-4xl mb-3">✓</p>

//             <h3 className={`font-semibold ${textStyle}`}>
//               {tasks.length === 0
//                 ? "No tasks yet!"
//                 : "No tasks found!"}
//             </h3>

//             <p className="text-slate-400 text-sm mt-2">
//               {tasks.length === 0
//                 ? "Add your first task to get started."
//                 : "Try selecting another filter."}
//             </p>

//           </div>

//         )}

//       </div>

//     </div>
//   );
// };

// export default TaskList;



"use client";

import { useState } from "react";

const TaskList = ({
  tasks,
  onDeleteTask,
  onToggleTask,
  onEditTask,
  isDark
}) => {

  const [filter, setFilter] = useState("all");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const [editDeadline, setEditDeadline] = useState("");

  const completedCount = tasks.filter(t => t.completed).length;
  const pendingCount = tasks.length - completedCount;

  const filteredTasks = tasks.filter(task => {
    if (filter === "pending") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const startEditing = (task) => {
    setEditingId(task.id);
    setEditText(task.text);
    setEditDeadline(task.deadline || "");
  };

  const saveEdit = (id) => {
    if (!editText.trim()) return;

    onEditTask(id, editText.trim(), editDeadline);
    setEditingId(null);
  };

  const isOverdue = (deadline) => {
    if (!deadline) return false;

    const [year, month, day] = deadline.split("-").map(Number);
    const deadlineDate = new Date(year, month - 1, day);
    const today = new Date();

    today.setHours(0, 0, 0, 0);

    return deadlineDate < today;
  };

  const cardStyle = isDark
    ? "bg-slate-900 border-slate-800"
    : "bg-white border-slate-200";

  const textStyle = isDark
    ? "text-white"
    : "text-slate-800";

  return (

    <section className="w-full max-w-5xl mx-auto px-5 mt-8 pb-12">

      {/* Statistics Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">

        <div className={`p-5 rounded-2xl border ${cardStyle}`}>
          <p className="text-sm text-slate-500 font-medium">
            Total Tasks
          </p>

          <h3 className={`text-3xl font-bold mt-2 ${textStyle}`}>
            {tasks.length}
          </h3>

          <p className="text-xs text-blue-500 mt-2">
            All your activities
          </p>
        </div>

        <div className={`p-5 rounded-2xl border ${cardStyle}`}>
          <p className="text-sm text-slate-500 font-medium">
            Completed
          </p>

          <h3 className="text-3xl font-bold text-green-500 mt-2">
            {completedCount}
          </h3>

          <p className="text-xs text-green-500 mt-2">
            Tasks finished
          </p>
        </div>

        <div className={`p-5 rounded-2xl border ${cardStyle}`}>
          <p className="text-sm text-slate-500 font-medium">
            Pending
          </p>

          <h3 className="text-3xl font-bold text-orange-500 mt-2">
            {pendingCount}
          </h3>

          <p className="text-xs text-orange-500 mt-2">
            Tasks remaining
          </p>
        </div>

      </div>


      {/* Task Container */}

      <div className={`rounded-2xl border shadow-sm p-5 md:p-7 ${cardStyle}`}>

        {/* Heading */}

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-7">

          <div>
            <h2 className={`text-xl font-bold ${textStyle}`}>
              My Tasks
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Manage your daily activities.
            </p>
          </div>

          <span className="text-sm text-blue-500 font-semibold bg-blue-500/10 px-4 py-2 rounded-full w-fit">
            {tasks.length} Total
          </span>

        </div>


        {/* Filter Buttons */}

        <div className="flex flex-wrap gap-2 mb-6">

          {["all", "pending", "completed"].map(item => (

            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold capitalize transition ${
                filter === item
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                  : isDark
                    ? "bg-slate-800 text-slate-400 hover:bg-slate-700"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {item}
              {item === "all" && ` (${tasks.length})`}
              {item === "pending" && ` (${pendingCount})`}
              {item === "completed" && ` (${completedCount})`}
            </button>

          ))}

        </div>


        {/* Tasks */}

        {filteredTasks.length > 0 ? (

          <ul className="space-y-3">

            {filteredTasks.map(task => (

              <li
                key={task.id}
                className={`p-4 md:p-5 rounded-xl border transition duration-200 ${
                  isDark
                    ? "bg-slate-800/70 border-slate-700 hover:border-blue-500/50"
                    : "bg-slate-50 border-slate-100 hover:border-blue-200 hover:shadow-sm"
                }`}
              >

                {editingId === task.id ? (

                  /* Edit Task */

                  <div className="space-y-3">

                    <input
                      type="text"
                      value={editText}
                      onChange={e => setEditText(e.target.value)}
                      className={`w-full p-3 rounded-lg border outline-none focus:border-blue-500 ${
                        isDark
                          ? "bg-slate-900 border-slate-700 text-white"
                          : "bg-white border-slate-200 text-slate-700"
                      }`}
                    />

                    <input
                      type="date"
                      value={editDeadline}
                      onChange={e => setEditDeadline(e.target.value)}
                      className={`w-full p-3 rounded-lg border outline-none ${
                        isDark
                          ? "bg-slate-900 border-slate-700 text-white"
                          : "bg-white border-slate-200 text-slate-700"
                      }`}
                    />

                    <div className="flex gap-2">

                      <button
                        onClick={() => saveEdit(task.id)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-semibold"
                      >
                        Save Changes
                      </button>

                      <button
                        onClick={() => setEditingId(null)}
                        className="bg-slate-500 hover:bg-slate-600 text-white px-5 py-2 rounded-lg text-sm font-semibold"
                      >
                        Cancel
                      </button>

                    </div>

                  </div>

                ) : (

                  /* Task Display */

                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">

                    <div className="flex items-start gap-4 min-w-0 flex-1">

                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => onToggleTask(task.id)}
                        aria-label={`Mark ${task.text} as ${task.completed ? "pending" : "completed"}`}
                        className="w-5 h-5 mt-1 accent-blue-600 cursor-pointer shrink-0"
                      />

                      <div className="min-w-0">

                        <h3 className={`font-semibold wrap-break-word ${
                          task.completed
                            ? "line-through text-slate-400"
                            : textStyle
                        }`}>
                          {task.text}
                        </h3>

                        <div className="flex flex-wrap gap-2 mt-2">

                          {task.completed ? (

                            <span className="text-xs font-semibold text-green-500 bg-green-500/10 px-2.5 py-1 rounded-full">
                              ✓ Completed
                            </span>

                          ) : (

                            <span className="text-xs font-semibold text-orange-500 bg-orange-500/10 px-2.5 py-1 rounded-full">
                              ● Pending
                            </span>

                          )}

                          {task.deadline && (

                            <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                              !task.completed && isOverdue(task.deadline)
                                ? "text-red-500 bg-red-500/10"
                                : "text-blue-500 bg-blue-500/10"
                            }`}>
                              { !task.completed && isOverdue(task.deadline)
                                ? "⚠ Overdue: "
                                : "📅 Due: "
                              }
                              {task.deadline}
                            </span>

                          )}

                        </div>

                      </div>

                    </div>


                    {/* Action Buttons */}

                    <div className="flex gap-2 sm:justify-end">

                      <button
                        onClick={() => startEditing(task)}
                        className="flex-1 sm:flex-none px-4 py-2 rounded-lg text-sm font-semibold text-blue-600 bg-blue-500/10 hover:bg-blue-600 hover:text-white transition"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => onDeleteTask(task.id)}
                        className="flex-1 sm:flex-none px-4 py-2 rounded-lg text-sm font-semibold text-red-500 bg-red-500/10 hover:bg-red-500 hover:text-white transition"
                      >
                        Delete
                      </button>

                    </div>

                  </div>

                )}

              </li>

            ))}

          </ul>

        ) : (

          /* Empty State */

          <div className="text-center py-16">

            <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-500/10 flex items-center justify-center text-3xl mb-4">
              📝
            </div>

            <h3 className={`font-bold text-lg ${textStyle}`}>
              {tasks.length === 0
                ? "Your task list is empty"
                : "No tasks found"}
            </h3>

            <p className="text-sm text-slate-500 mt-2">
              {tasks.length === 0
                ? "Start by adding your first task."
                : "Try selecting a different filter."}
            </p>

          </div>

        )}

      </div>


      {/* Footer */}

      <p className="text-center text-xs text-slate-500 mt-6">
        Stay consistent. Small steps lead to big results.
      </p>

    </section>

  );
};

export default TaskList;

