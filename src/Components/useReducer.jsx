//   //-----------------------------------Counter App------------------------------------
// import React, { useReducer } from "react";
// const initialState = 0
// const reducer = (state, action) => {
//     switch(action) {
//         case "increment":
//             return state + 1;
//         case "decrement":
//             return state - 1;
//         case "reset":
//             return initialState;
//         default:
//             return state;           
//     }
// };
// function Counter() {
//     const [count, dispatch] = useReducer(reducer, initialState);
//     return (
//         <div>
//             <div>Count : {count}</div>
//             <button onClick={() => dispatch("increment")}>Increment</button>
//             <button onClick={() => dispatch("decrement")}>Decrement</button>
//             <button onClick={() => dispatch("reset")}>Reset</button>
//         </div>
//     );
// }
// export default Counter;



// import React, { useReducer } from "react";
// const initialState = { count: 0 };
// function reducer(state, action) {
//     switch (action.type) {
//         case "increment":
//             return { count: state.count + action.payload };
//         case "decrement":
//             return { count: state.count - action.payload };
//         case "reset":
//             return initialState;
//         default:
//             return state;            
//     }
// }
// function CounterApp() {
//     const [state, dispatch] = useReducer(reducer, initialState);
//     return (
//         <div style={{ textAlign: "center", marginTop: "50px" }}>
//             <h1>Count : {state.count}</h1>
//             <button onClick={() => dispatch({ type: "increment", payload: 1 })}>+1</button>
//             <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>-1</button>
//             <button onClick={() => dispatch({ type: "increment", payload: 5 })}>+5</button>
//             <button onClick={() => dispatch({ type: "decrement", payload: 5 })}>-5</button>
//             <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
//         </div>
//     );
// }
// export default CounterApp;



//   //-------------------------------Todo App-------------------------------------
// import React, { useReducer, useState } from "react";
// const initialState = [];
// const reducer = (state, action) => {
//     switch(action.type) {
//         case "ADD_TODO":
//             return [
//                 ...state,
//                 { id: Date.now(), text: action.payload, completed: false },
//             ];
//         case "REMOVE_TODO":
//             return state.filter((todo) => todo.id !== action.payload);
//         case "TOGGLE_TODO":
//             return state.map((todo) => 
//               todo.id === action.payload
//                 ? { ...todo, completed: !todo.completed } 
//                    : todo
//             );
//           default:
//             return state;      
//     }
// };
// export default function Todo() {
//     const [todos, dispatch] = useReducer(reducer, initialState);
//     const [text, setText] = useState("");
//     const handleAdd = () => {
//         if(text.trim() === "") return;
//         dispatch({ type: "ADD_TODO", payload: text });
//         setText("");
//     };
//     return (
//         <div style={{ textAlign: "center", marginTop: "40px" }}>
//             <h1>📝 Todo List</h1>
//            <input 
//              type="text"
//              value={text}
//              onChange={(e) => setText(e.target.value)}
//              placeholder="Enter a task..."
//            />
//            <button onClick={handleAdd}>Add</button>
//            <ul style={{ listStyle: "none", padding: 0 }}>
//              {todos.map((todo) => (
//                 <li key={todo.id} style={{ marginTop: "10px" }}>
//                     <span
//                       onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
//                       style={{
//                         textDecoration: todo.completed ? "line-through" : "none",
//                         cursor: "pointer",
//                         marginRight: "10px",
//                       }}
//                     >
//                         {todo.text}
//                     </span>
//                     <button
//                       onClick={() => dispatch({ type: "REMOVE_TODO", payload: todo.id })} 
//                     >
//                         ❌
//                     </button>   
//                 </li>
//               ))}
//            </ul>  
//         </div>
//      );
//  }


//  //---------------------------------Toggle Theme------------------------------------------
// import React, { useReducer } from "react";
// const initialState = { theme: "light" };
// const reducer = (state, action) => {
//    switch(action.type) {
//       case "TOGGLE_THEME":
//          return {
//            theme: state.theme === "light" ? "dark" : "light",
//         };
//         default: 
//           return state;
//    }
// };
// export default function ThemeToggle() {
//     const[state, dispatch] = useReducer(reducer, initialState);
//     const toggleTheme = () => {
//         dispatch({ type: "TOGGLE_THEME" });
//     };
//     const isLight = state.theme === "light";
//     const styles = {
//         backgroundColor: isLight ? "#fff" : "#333",
//         color: "isLight" ? "#000" : "#fff",
//         height: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//     };
//     return (
//         <div style={styles}>
//             <h1 style={{ color: "gray"}}>{isLight ? "🌞 Light Mode" : "🌙 Dark Mode"}</h1>
//             <button onClick={toggleTheme}>Toggle Theme</button>
//         </div>
//     );
// }


//  //-------------------------------------FormInput--------------------------------------
// import React, { useReducer } from "react";
// const initialState = {
//     name: "",
//     email: "",
// };
// const reducer = (state, action) => {
//     switch(action.type) {
//         case "UPDATE_NAME":
//             return { ...state, name: action.payload };
//         case "UPDATE_EMAIL":
//             return { ...state, email: action.payload };
//         case "RESET":
//             return initialState;
//         default:
//             return state;            
//     }
// };
// export default function FormInput() {
//     const [state, dispatch] = useReducer(reducer, initialState);
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert(`Name: ${state.name}\nEmail: ${state.email}`);
//         dispatch({ type: "RESET" });
//     };
//     return (
//         <div style={{ textAlign: "center", marginTop: "40px" }}>
//             <h1>📝 Form Input using useReducer</h1>
//            <form onSubmit={handleSubmit}>
//              <div style={{ marginBottom: "10px" }}>
//                 <input
//                   type="text"
//                   placeholder="Enter Name"
//                   value={state.name}
//                   onChange={(e) => 
//                     dispatch({ type: "UPDATE_NAME", payload: e.target.value })
//                   }
//                 />  
//              </div>
//              <div style={{ marginBottom: "10px" }}>
//                 <input 
//                   type="email"
//                   placeholder="Enter Email"
//                   value={state.email}
//                   onChange={(e) => 
//                     dispatch({ type: "UPDATE_EMAIL", payload: e.target.value })
//                   }
//                 />
//              </div>
//              <button type="submit">Submit</button>
//            </form> 
//            <h3>👤 Preview:</h3>
//            <p>Name: {state.name}</p>
//            <p>Email: {state.email}</p>
//         </div>
//     );
// }


//   //------------------------------------Shopping Cart----------------------------------
// import React, { useReducer, useState } from "react";    
// const initialState = [];
// const reducer = (state, action) => {
//     switch(action.type) {
//         case "ADD_ITEM":
//             return [...state, { id: Date.now(), name: action.payload }];
//         case "REMOVE_ITEM":
//             return state.filter((item) => item.id !== action.payload);
//         case "CLEAR_CART":
//             return [];
//         default:
//             return state;            
//     }
// };  
// export default function Cart() {
//     const [cart, dispatch] = useReducer(reducer, initialState);
//     const [itemName, setItemName] = useState("");
//     const handleAdd = () => {
//         if(itemName.trim() === "")return;
//         dispatch({ type: "ADD_ITEM", payload: itemName });
//         setItemName("");
//     };
//     return (
//         <div style={{ textAlign: "center", marginTop: "40px" }}>
//             <h1>🛒 Shopping Cart</h1>
//             <input 
//               type="text"
//               placeholder="Enter item name..."
//               value={itemName}
//               onChange={(e) => setItemName(e.target.value)}
//             />
//             <button onClick={handleAdd}>Add Item</button>
//             <button onClick={() => dispatch({ type: "CLEAR_CART" })}>Clear Cart</button> 
//             <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
//                 {cart.length === 0 ? (
//                     <p>🛍️ Cart is empty</p>
//                 ) : (
//                     cart.map((item) => (
//                         <li key={item.id} style={{ marginTop: "10px" }}>
//                             {item.name}
//                             <button 
//                               style={{ marginLeft: "10px" }}
//                               onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}
//                             >
//                                 ❌ Remove
//                             </button>  
//                         </li>
//                     ))
//                 )}
//             </ul>
//              <h3>Total Items: {cart.length}</h3> 
//         </div>
//     );
// } 


//   //----------------------------------Login Status-----------------------------------
// import React, { useReducer } from "react";
// const initialState = { isLoggedIn: false };
// const reducer = (state, action) => {
//     switch(action.type) {
//         case "LOGIN":
//             return { isLoggedIn: true };
//         case "LOGOUT":
//             return { isLoggedIn: false };
//         default:
//             return state;        
//     }
// };
// export default function LoginStatus() {
//     const [state, dispatch] = useReducer(reducer, initialState);
//     return (
//         <div style={{ textAlign: "center", marginTop: "50px" }}>
//             <h1>🔐 Login Status using useReducer</h1>
//             {state.isLoggedIn ? (
//                 <div>
//                    <h2>Welcome back! 👋</h2> 
//                    <button onClick={() => dispatch({ type: "LOGOUT" })}>Logout</button>
//                 </div>   
//             ) : (
//                 <div>
//                     <h2>Please log in</h2>
//                     <button onClick={() => dispatch({ type: "LOGIN" })}>Login</button>
//                 </div>    
//              )}
//         </div>
//     );
// }


//   //-----------------------------------MultiCounter----------------------------------
// import React, { useReducer } from "react";
// const initialState = [
//     { id: 1, count: 0 },
//     { id: 2, count: 0 },
// ];
// const reducer = (state, action) => {
//     switch (action.type) {
//         case "INCREMENT":
//             return state.map((counter) => 
//               counter.id === action.payload
//                 ? { ...counter, count: counter.count + 1 }
//                 : counter
//             );
//         case "DECREMENT":
//             return state.map((counter) => 
//               counter.id === action.payload
//                 ? { ...counter, count: counter.count - 1}
//                 : counter
//             );
//         case "RESET":
//             return state.map((counter) => ({ ...counter, count: 0 }));
//         default: 
//             return state;            
//     }
// };
// export default function MultiCounter() {
//     const [counters, dispatch] = useReducer(reducer, initialState);
//     return (
//         <div style={{ textAlign: "center", marginTop: "40px" }}>
//             <h1>🔢 Multiple Counters using useReducer</h1>
//             {counters.map((counter) => (
//                 <div key={counter.id} style={{ marginBottom: "15px" }}>
//                    <h3>Counter {counter.id}: {counter.count}</h3>
//                    <button onClick={() => dispatch({ type: "INCREMENT", payload: counter.id })}>
//                      ➕ 
//                    </button>
//                    <button onClick={() => dispatch({ type: "DECREMENT", payload: counter.id })}>
//                      ➖
//                    </button>
//                 </div>   
//              ))}
//              <button onClick={() => dispatch({ type: "RESET"})} style={{ marginTop: "20px" }}>
//                 🔁 Reset All
//              </button>
//         </div>
//     );
// }

// import React, { useReducer, useState } from "react";
// const initialState = 0
// const reducer = (state, action) => {
// switch (action) {
//     case "increment":
//         return state + 1;
//     case "decrement":
//         return state - 1;
//     default:
//         return state;    
// }
// }
// function Counter() {
//     const [count, dispatch] = useReducer(reducer, initialState);
//     return (
//         <div>
//             <h2>Count: {count}</h2>
//             <button onClick={() => dispatch("increment")}>Increment</button>
//             <button onClick={() => dispatch("decrement")}>Decrement</button>
//         </div> 
//     );
// }
// export default Counter;


// import React, { useReducer, useState} from "react";
// const initialState = "Enter Your Name"
// const reducer = (state, action) => {
//     switch(action)  {
//         case "name1":
//             return state = "Hasna"; 
//         case "name2":
//             return state = "Sulthana";    
//     }
// }
// function Name() {
//     const [name, dispatch] = useReducer(reducer, initialState);
//     return (
//         <div>
//             <h1>Name: {name}</h1>
//             <button onClick={() => dispatch("name2")}>Sulthana</button>
//             <button onClick={() => dispatch("name1")}>Hasna</button>
//         </div>
//     );
// }
// export default Name;



//  //----------------------------------------Todo App-------------------------------------
// import React, { useReducer, useState } from "react";
// const initialState = [];
// function reducer (state, action) {
//     switch(action.type) {   
//         case "Add_Todo":
//             return [...state, { id: Date.now(), text: action.payload }];
//         case "Delete_Todo":
//             return state.filter((todo) => todo.id !== action.payload);
//         default:
//             return state;        
//     }
// }
// function TodoApp() {
//     const [todos, dispatch] = useReducer(reducer, initialState);
//     const [input, setInput] = useState("");
//  function handleAdd() {
//         if(input.trim() === "") return;
//         dispatch({ type: "Add_Todo", payload: input });
//         setInput("");
//     }
//  function handleDelete(id) {
//         dispatch({ type: "Delete_Todo", payload: id });
//     }
//     return (
//         <div style={{ textAlign: "center", marginTop: "40px" }}>
//             <h2>Todo App</h2>
//             <input
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               placeholder="Enter..." 
//             />
//             <button onClick={handleAdd}>Add</button> 
//             <ul style={{ listStyle: "none", padding: 0 }}>
//               {todos.map((todo) => (
//                 <li key={todo.id}>
//                    {todo.text}
//                   <button onClick={() => handleDelete(todo.id)}> ❌ </button>  
//                 </li>   
//                ))}
//             </ul> 
//         </div>
//     );
// }
// export default TodoApp;







// import React, { useReducer, useState } from "react";
// const initialState = "Enter Name"
// const reducer = (state, action) => {
//     switch(action) {
//         case "name1":
//             return state = "Sulthana";
//         case "name2":
//             return state = "Misriya";      
//     };
// };

// function Name() {
//     const [name, dispatch] = useReducer(reducer, initialState);
//     return (
//         <div>
//             <div>Name : {name} </div>
//             <button onClick={() => dispatch("name1")}>Sulthana</button>
//             <button onClick={() => dispatch("name2")}>Misriya</button>
//         </div>
//     );
// }
// export default Name;












