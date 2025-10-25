//---------------------------------Timer---------------------------------
// import React, { useEffect, useState } from "react";
// function Timer() {
//     const [seconds, setSeconds] = useState(0);
//    useEffect(() => {
//     const timer = setInterval(() => setSeconds((s) => s + 1), 1000);
//     return () => clearInterval(timer);
//    }, []);
//    return <h3>Time : {seconds}s</h3>; 
// }
// export default Timer;


//------------------------------------Fetch API using useEffect----------------------------
// import React, { useState, useEffect } from "react";
//  function Users() {
//     const [users, setUsers] = useState([]);
// useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => setUsers(data));
// }, []);
//  return (
//     <div>
//         <h2>User List:</h2>
//         <ul>
//             {users.map((user) => (
//                 <li key={user.id}>{user.name}</li>
//             ))}
//         </ul>
//     </div>
//    );
//  }
//  export default Users;


//---------------------------Auto Hide Message--------------------------------
// import React, { useState, useEffect } from "react";
// function AutoHideMessage() {
//     const [show, setShow] = useState(true);
//    useEffect(() => {
//     const timer = setTimeout(() => {
//         setShow(false);
//     }, 3000);
//     return () => clearTimeout(timer);
//    }, []);
//     return (
//         <div style={{ textAlign: "center", marginTop: "50px" }}>
//             {show ? <h2>Welcome Sulthana 🎉</h2> : <h2>Message Hidden 😅</h2>}
//         </div>
//     );
// }
// export default AutoHideMessage;


//---------------------------Fetch Posts using useEffect------------------------
// import React, { useState, useEffect } from "react";
// function FetchPosts() {
//     const [posts, setPosts] = useState([]);
//     const [loading, setLoading] = useState(true);
//    useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => res.json())
//       .then((data) => {
//         setPosts(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching posts:", error);
//         setLoading(false);
//       });
//    }, []);
//     return  (
//       <div style={{ padding: "20px" }}>
//         <h2>📄 Posts List</h2>
//        {loading ? (
//          <p>Loading posts... ⏳</p>
//        ) : (
//         <ul>
//           {posts.map((posts) => (
//              <li key={posts.id}>
//                <strong>{posts.title}</strong>
//              </li>
//             ))}
//           </ul>
//         )} 
//      </div>
//    );
// }
// export default FetchPosts;










// import React, { useEffect, useState } from "react";
// function Timer() {
//     const [seconds, setSeconds] = useState(0);
//    useEffect(() => {
//     const timer = setInterval(() => {
//         setSeconds((prev) => prev + 1);
//     }, 1000);
//     return () => clearInterval(timer);
//    }, []);
//    return (
//     <div>
//         <h2>⏳ Time : {seconds}s</h2>
//     </div>
//    ); 
// }
// export default Timer;



// import React, { useEffect, useState } from "react";
// function TimerWithControl() {
//     const [seconds, setSeconds] = useState(0);
//     const [isRunning, setIsRunning] = useState(true);
//    useEffect(() => {
//     if(!isRunning) return;
//     const timer = setInterval(() => setSeconds(prev => prev + 1), 1000);
//     return () => clearInterval(timer);
//    }, [isRunning]);
//    return (
//     <div style={{ marginLeft: "50px", padding: "20px" }}>
//         <h2>Time : {seconds}s</h2>
//         <button onClick={() => setIsRunning(true)}>START</button>
//         <button onClick={() => setIsRunning(false)}>STOP</button>
//         <button onClick={() => setSeconds(0)}>RESET</button>
//     </div>
//    );
// }
// export default TimerWithControl;



// import React, { useEffect, useState } from "react";
// function ShowHide() {
//     const [show, setShow] = useState(0);
//    useEffect(() => {
//     console.log("Show state:", show);
//    }, [show]);
//    return (
//     <div>
//         <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
//          {show && <h2>Please! Hide Message.</h2>}
//     </div>
//    ); 
// }
// export default ShowHide;



