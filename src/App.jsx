//*******************************(useState, useEffect)*********************************/
// import React from "react";
// function App() {
//   return (
//     <div>
//       <
//     </div>
//   );
// }
// export default App;

//=======================================UseContext=======================================
//   //--------------------------UserContext(Context + Provider)----------------------
// import React, { useContext } from "react";
// import { UserProvider, UserContext } from "./Components/useContext";
// const Header = () => {
//   const { userName } = useContext(UserContext);
//   return <h2>Header: Welcome, {userName}!</h2>;
// };
// const Footer = () => {
//   const { userName } =useContext(UserContext);
//   return <h3>Footer: Logged in as {userName}</h3>;
// };
// const ChangeName = () => {
//   const { userName, setUserName } = useContext(UserContext);
//   return (
//     <button onClick={() => setUserName(userName === "Sulthana" ? "Udaifa" : "Sulthana")}>
//       Change User Name
//     </button>
//   );
// };
// function App() {
//   return (
//     <UserProvider>
//       <div style={{ textAlign: "center", marginTop: "50px" }}>
//         <Header />
//         <ChangeName />
//         <Footer />
//       </div>
//     </UserProvider>
//   );
// }
// export default App;

 
//    //----------------------------------Language Context------------------------------
// import React, { useContext } from "react";
// import { LanguageProvider, LanguageContext } from "./Components/useContext";
// const messages = {
//     en: { greeting: "Hello!", info: "Welcome to our site."},
//     ml: { greeting: "Namaskaaram!", info: "Nammude site ll swagatham."}, 
// };
// const Header = () => {
//     const { language } = useContext(LanguageContext);
//     return (
//         <header style={{ padding: "10px", backgroundColor: "#f5f5f5" }}>
//             <h2>{messages[language].greeting}</h2>
//         </header>
//     );
// };
// const Info = () => {
//     const { language } = useContext(LanguageContext);
//     return (
//         <p style={{ padding: "10px" }}>
//             {messages[language].info}
//         </p>
//     );
// };
// const ToggleButton = () => {
//     const { toggleLanguage } = useContext(LanguageContext);
//     return <button onClick={toggleLanguage}>Toggle Language</button>;
// };
// function App() {
//     return (
//         <LanguageProvider>
//             <div style={{ textAlign: "center", marginTop: "50px" }}>
//                 <Header />
//                 <Info />
//                 <ToggleButton />
//             </div>
//         </LanguageProvider>
//     );
// }
// export default App;


//   //---------------------------------------Counter Context--------------------------
// import React, { useContext } from "react";
// import { CounterProvider, CounterContext } from "./Components/useContext";
// const CounterDisplay = () => {
//     const { count } = useContext(CounterContext);
//     return <h2>Counter: {count}</h2>;
// };
// const CounterButtons = () => {
//     const { increment, decrement } = useContext(CounterContext);
//     return (
//         <div>
//             <button onClick={increment} style={{ marginRight: "10px" }}>Increment</button>
//             <button onClick={decrement}>Decrement</button>
//         </div>
//     );
// };
// function App() {
//     return (
//         <CounterProvider>
//             <div style={{ textAlign: "center", marginTop: "50px" }}>
//                 <CounterDisplay />
//                 <CounterButtons />
//             </div>
//         </CounterProvider>
//     );
// }
// export default App;


//  //----------------------------------Login Status-------------------------------
// import React, { useContext } from "react";
// import { AuthProvider, AuthContext } from "./Components/useContext";
// const Status = () => {
//     const { isLoggedIn } = useContext(AuthContext);
//     return <h2>Status: {isLoggedIn ? "Logged In ✅" : "Logged Out ❌"}</h2>;
// };
// const AuthButtons = () => {
//     const { login, logout, isLoggedIn } = useContext(AuthContext);
//    return (
//     <div>
//         {!isLoggedIn && <button onClick={login}>Login</button>}
//         {isLoggedIn && <button onClick={logout}>Logout</button>}
//     </div>
//    );
// };
// function App() {
//     return (
//         <AuthProvider>
//             <div style={{ textAlign: "center", marginTop: "50px" }}>
//                 <Status />
//                 <AuthButtons />
//             </div>
//         </AuthProvider>
//     );
// }
// export default App;


//   //------------------------------------useContext (single file)---------------------------
// import React, { createContext, useContext } from "react";
// const MyContext = createContext();
// function App() {
//     const name = "Sulthana";
//     const Child = () => {
//         const value = useContext(MyContext);
//         return <h2>Hello, {value}!</h2>;
//     };
//     return (
//         <MyContext.Provider value={name}>
//             <div style={{ textAlign: "center", marginTop: "50px" }}>
//                 <Child />
//             </div>
//         </MyContext.Provider>
//     );
// }
// export default App;


//   //------------------------------useContext with show/hide---------------------------
// import React, { createContext, useContext, useState } from "react";
// const ShowContext = createContext();
// function App() {
//     const [show, setShow] = useState(true);
//     const Message = () => {
//         const isVisible = useContext(ShowContext);
//         return isVisible ? <h2>Hello! I am visible 😄</h2> : null;
//     };
//     return (
//         <ShowContext.Provider value={show}>
//             <div style={{ textAlign: "center", marginTop: "50px" }}>
//                 <button onClick={() => setShow(!show)}>
//                     {show ? "Hide" : "Show"}
//                 </button>
//                 <Message />
//             </div>
//         </ShowContext.Provider>
//     );
// }
// export default App;


//=====================================useRef============================================
//   //--------------------------------Count Re-renders-----------------------------
// import React from "react";
// import RenderCounter from "./Components/useRef";
// function App() {
//     return (
//         <div>
//             <h2 style={{ textAlign: "center" }}>🧠 useRef Render Count Example.</h2>
//             <RenderCounter />
//         </div>
//     );
// }
// export default App;


//  //-------------------------------Stopwatch Timer------------------------------------
// import React from "react";
// import Stopwatch from "./Components/useRef";
// function App() {
//     return (
//         <div>
//             <Stopwatch />
//         </div>
//     );
// }
// export default App;


//  //------------------------------Video Player Controls------------------------------
// import React from "react";
// import VideoPlayer from "./Components/useRef";
// function App() {
//     return (
//         <div>
//             <VideoPlayer />
//         </div>
//     );
// }
// export default App;


//  //--------------------------------Scroll to Bottom-----------------------------------
// import React from "react";
// import ChatBox from "./Components/useRef";
// function App() {
//     return (
//         <div>
//             <ChatBox />
//         </div>
//     );
// }
// export default App;



//========================================useCallback==========================================
//   //--------------------------------List filter---------------------------------------
// import React, { useState, useCallback } from "react";
// import List from "./Components/useCallback";
// function App() {
//     const [search, setSearch] = useState("");
//     const items = ["apple", "banana", "grapes", "mango", "orange"];
//     const filterFn = useCallback(
//        (item) => item.toLowerCase().includes(search.toLowerCase()),
//        [search]
//     );
//     return (
//         <div style={{ textAlign: "center", marginTop: "50px" }}>
//             <h2>🔍 List Filter with useCallback</h2>
//             <input 
//               type="text"
//               placeholder="Search fruits..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               style={{ padding: "8px", width: "200px" }}
//             />
//             <List items={items} filterFn={filterFn} />  
//         </div>
//     );
// }
// export default App;


//   //--------------------------------Theme Button---------------------------------------
// import React, { useState, useCallback } from "react";
// import ThemeButton from "./Components/useCallback";
// function App() {
//     const [theme, setTheme] = useState("light");
//     const toggleTheme = useCallback(() => {
//         setTheme((prev) => (prev === "light" ? "dark" : "light"));
//     }, []);
//     const appStyle = {
//         backgroundColor: theme === "light" ? "#f5f5f5" : "#333",
//         color: theme === "light" ? "#333" : "#f5f5f5",
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         flexDirection: "column",
//     };
//     return (
//         <div style={appStyle}>
//             <h2>🎨 Theme Toggle with useCallback</h2>
//             <p>Current Theme: {theme}</p>
//             <ThemeButton toggleTheme={toggleTheme} />
//         </div>
//     );
// }
// export default App;


//   //---------------------------------Todo Item-----------------------------------------
// import React, { useState, useCallback } from "react";
// import TodoItem from "./Components/useCallback";
// function App() {
//     const [todos, setTodos] = useState([
//         { id: 1, text: "Learn React" },
//         { id: 2, text: "Practice Hooks" },
//     ]);
//     const addTodo = () => {
//         const newTodo = { id: Date.now(), text: `Task ${todos.length + 1}` };
//         setTodos((prev) => [...prev, newTodo]);
//     };
//     const deleteTodo = useCallback((id) => {
//         setTodos((prev) => prev.filter((todo) => todo.id !== id));
//     }, []);
//     return (
//         <div style={{ textAlign: "center", marginTop: "50px" }}>
//             <h2>📝 Todo App with useCallback</h2>
//             <button onClick={addTodo} style={{ marginBottom: "16px" }}>
//                 ➕ Add Todo
//             </button>
//             <ul style={{ listStyle: "none", padding: 0, width: "300px", margin: "0 auto" }}>
//                 {todos.map((todo) => (
//                     <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} />
//                 ))}
//             </ul>
//         </div>
//     );
// }
// export default App;


//  //------------------------------Create a Counter-----------------------------------
// import React, { useState, useCallback } from "react";
// import ChildCounter from "./Components/useCallback";
// function App() {
//     const [count, setCount] = useState(0);
//     const increment = useCallback(() => {
//         setCount((prev) => prev + 1);
//     }, []);
//     const decrement = useCallback(() => {
//         setCount((prev) => prev - 1);
//     }, []);
//     return (
//         <div style={{ textAlign: "center", marginTop: "50px" }}>
//             <h2>🧮 Counter with useCallback</h2>
//             <h3>Count : {count}</h3>
//             <ChildCounter increment={increment} decrement={decrement} />
//         </div>
//     );
// }
// export default App



//========================================Custom Hook==========================================
//   //-----------------------------------Counter-----------------------------------------
// import { useCounter } from "./Components/CustomHook";
// function App() {
//     const { count, increment, decrement, reset } = useCounter(0);
//     return (
//         <div style={{ textAlign: "center", padding: "30px" }}>
//             <h2>🧮 useCounter Custom Hook</h2>
//             <h1>{count}</h1>
//            <div style={{ marginTop: "20px" }}>
//               <button
//                 onClick={increment}  
//                 style={{ padding: "10px 15px", margin: "5px" }}
//               >
//                   ➕ Increment
//               </button>
//               <button
//                  onClick={decrement}
//                  style={{ padding: "10px 15px", margin: "5px" }}
//               >
//                     ➖ Decrement
//               </button>  
//               <button
//                  onClick={reset}
//                  style={{ padding: "10px 15px", margin: "5px" }}
//               >
//                 🔁 Reset
//               </button>  
//            </div> 
//         </div>
//     );
// }
// export default App;


//   //-----------------------------------Toggle-----------------------------------------
// import React from "react";
// import { useToggle } from "./Components/CustomHook";
// function App() {
//     const { value: isVisible, toggle, setTrue, setFalse } = useToggle(false);
//     return (
//         <div style={{ textAlign: "center", marginTop: "50px" }}>
//         <h2>🎛️ useToggle Custom Hook</h2>
//         <p>
//            Status: <strong>{isVisible ? "visible ✅" : "Hidden ❌"}</strong>  
//         </p>
//         <div>
//             <button onClick={toggle} style={{ margin: 5, padding: "10px 15px" }}>
//                 Toggle
//             </button>
//             <button onClick={setTrue} style={{ margin: 5, padding: "10px 15px" }}>
//                 Show
//             </button>
//             <button onClick={setFalse} style={{ margin: 5, padding: "10px 15px" }}>
//                 Hide
//             </button>
//         </div>
//           {isVisible && (
//             <div style={{ marginTop: 20, fontSize: 18 }}>
//                 🎉 This content is visible now!
//             </div>    
//           )}
//         </div>
//     );
// }
// export default App;




















// import React, { useContext } from "react";
// import { UserProvider, UserContext } from "./Components/useContext";
// const Header = () => {
//     const { userName } = useContext(UserContext);
//     return <h2>Welcome, {userName}</h2>
// };
// const Footer = () => {
//     const { userName } = useContext(UserContext);
//     return <h2>Logged in, {userName}</h2>
// };
// const ChangeName = () => {
//     const { userName, setUserName } = useContext(UserContext);
//     return (
//         <button onClick={() => setUserName(userName === "Zahra" ? "Bathool" : "Zahra")}>
//             Change Name
//         </button>
//     );
// };
// function App() {
//     return (
//        <UserProvider>
//         <div>
//             <Header />
//             <ChangeName />
//             <Footer />
//         </div>
//        </UserProvider>
//     );
// }
// export default App;




// import React, { useContext } from "react";
// import { UserProvider, UserContext } from "./Components/useContext";
// const Header = () => {
//     const {userName} = useContext(UserContext);
//     return <h2>Welcome {userName}</h2>
// };
// const Footer = () => {
//     const {userName} = useContext(UserContext);
//     return <h2>Logged in {userName}</h2>
// };
// const ChangeName = () => {
//     const {userName, setUserName} = useContext(UserContext);
//     return (
//         <button onClick={() => setUserName(userName === "Dua" ? "Mehak" : "Dua")}>
//             Change Name
//         </button>
//     );
// }
// function App() {
//     return (
//         <UserProvider>
//             <div>
//                 <Header />
//                 <ChangeName />
//                 <Footer />
//             </div>
//         </UserProvider>
//     );
// }
// export default App;





// import React, { useContext } from "react";
// import { AuthProvider, AuthContext } from "./Components/useContext";
// const Status = () => {
//     const { isLoggedIn } = useContext(AuthContext);
//     return <h2>Status: {isLoggedIn ? "Logged in" : "Logged out"}</h2>
// };
// const AuthButtons = () => {
//     const { login, logout, isLoggedIn } = useContext(AuthContext);
//     return (
//         <div>
//             {!isLoggedIn && <button onClick={login}>Login</button>}
//             {!isLoggedIn && <button onClick={logout}>Logout</button>}
//         </div>
//     );
// }
// function App() {
//     return (
//         <AuthProvider>
//             <div style={{ textAlign: "center", marginTop: "50px"}}>
//                 <Status />
//                 <AuthButtons />
//             </div>
//         </AuthProvider>
//     );
// }
// export default App;



// import React, { useContext } from "react";
// import { MessageProvider, MessageContext } from "./Components/useContext";
// const Status = () => {
//     const { ShowMessage } = useContext(MessageContext);
//     return <h2>Message is: {ShowMessage ? "Visible" : "Hidden"}</h2>;
// };
// const ToggleButtons = () => {
//     const { toggleMessage } = useContext(MessageContext);
//     return (
//         <div>
//             <button onClick={toggleMessage}>Hide / Show Message</button>
//         </div>
//     );
// };
// function App() {
//     return (
//         <MessageProvider>
//             <div style={{ textAlign: "center", marginTop: "50px" }}>
//                 <Status />
//                 <ToggleButtons />
//             </div>
//         </MessageProvider>
//     );
// }
// export default App;


// import React, { useContext } from "react";
// import { UserProvider, UserContext } from "./Components/useContext";
// const Header = () => {
//     const {userName} = useContext(UserContext);
//     return <h2>Welcome, {userName}</h2>
// }
// const Footer = () => {
//     const {userName} = useContext(userName);
//     return <h2>Logged in, {userName}</h2>
// }
// const ChangeName = () => {
//     const {userName, setUserName} = useContext(UserContext);
//     return (
//         <div>
//             <button onClick={() => setUserName(userName === "Sulthana" ? "Misriya" : "Sulthana")}>
//                 Change Name
//             </button>
//         </div>
//     );
// }
// function App() {
//     return (
//         <UserProvider>
//             <div>
//                 <Header />
//                 <ChangeName />
//                 <Footer />
//             </div>
//         </UserProvider>
//     );
// }
// export default App;


import React from "react";
import TodoApp from "./Components/useReducer";
function App() {
    return (
        <div>
            <TodoApp />
        </div>
    )
}
export default App;