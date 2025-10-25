//   //--------------------------------List filter---------------------------------------
// import React from "react";
// function List({ items, filterFn }) {
//     console.log("List rendered");
//     const filtered = items.filter(filterFn);
//     return (
//        <ul>
//           {filtered.map((item, index) => (
//             <li key={index}>{item}</li>
//           ))}
//        </ul>
//     );
// }
// export default React.memo(List);


//   //--------------------------------Theme Button---------------------------------------
// import React from "react";
// function ThemeButton({ toggleTheme }) {
//     console.log("ThemeButton rendered");
//     return (
//       <button
//          onClick={toggleTheme}
//          style={{
//             padding: "10px 20px",
//             borderRadius: "8px",
//             cursor: "pointer",
//             marginTop: "20px",
//          }}
//         >
//             Toggle Theme
//         </button> 
//     );
// }
// export default React.memo(ThemeButton);


//   //---------------------------------Todo Item-----------------------------------------
// import React from "react";
// function TodoItem({ todo, onDelete }) {
//     console.log("TodoItem rendered", todo.id);
//     return (
//       <li
//         style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             marginBottom: "8px",
//             background: "#333",
//             padding: "8px 12px",
//             borderRadius: "8px",
//         }}
//         >
//             <span>{todo.text}</span>
//             <button onClick={() => onDelete(todo.id)}>❌ Delete</button>
//         </li>
//     );
// }
// export default React.memo(TodoItem);


//  //------------------------------Create a Counter-----------------------------------
// import React from "react";
// function ChildCounter({ increment, decrement }) {
//     console.log("Child rendered");
//     return (
//         <div>
//             <button onClick={increment} style={{ padding: "8px 16px" }}>
//                 Increment
//             </button>
//              <button onClick={decrement} style={{ padding: "8px 16px" }}>
//                 Decrement
//             </button>
//         </div>
//     );
// }
// export default React.memo(ChildCounter);


