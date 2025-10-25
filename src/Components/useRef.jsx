//   //-----------------------------------Count Re-renders--------------------------------
// import React, { useState, useRef, useEffect } from "react";
// function RenderCounter() {
//     const [text, setText] = useState("");
//     const renderCount = useRef(0);
//     useEffect(() => {
//         renderCount.current = renderCount.current + 1;
//     });
//     return (
//         <div style={{ textAlign: "center", marginTop: "50px" }}>
//             <input 
//               type="text"   
//               value={text}
//               onChange={(e) => setText(e.target.value)}
//               placeholder="Type something..."
//               style={{ padding: "8px", width: "200px" }}
//             />
//             <h3>Render Count: {renderCount.current}</h3>  
//         </div>
//     );
// }
// export default RenderCounter;


//  //-------------------------------Stopwatch Timer------------------------------------
// import React, { useRef, useState } from "react";
// function Stopwatch() {
//     const [time, setTime] = useState(0);
//     const timerRef = useRef(null);
//     const [running, setRunning] = useState(false);
//     const startTimer = () => {
//         if (!running) {
//             setRunning(true);
//             timerRef.current = setInterval(() => {
//                 setTime((prev) => prev + 1);
//             }, 1000);
//         }
//     };
//     const stopTimer = () => {
//         clearInterval(timerRef.current);
//         setRunning(false);
//     };
//     const resetTimer = () => {
//         clearInterval(timerRef.current);
//         setRunning(false);
//         setTime(0);
//     };
//     return (
//         <div style={{ textAlign: "center", marginTop: "50px" }}>
//             <h2>⏱️ Simple Stopwatch (useRef Example)</h2>
//             <h1>{time} sec</h1>
//           <button onClick={startTimer} style={{ margin: "5px" }}>
//             Start
//           </button>   
//           <button onClick={stopTimer} style={{ margin: "5px" }}>
//             Stop
//           </button>
//           <button onClick={resetTimer} style={{ margin: "5px"}}>
//             Reset
//           </button>
//         </div>
//     );
// }
// export default Stopwatch;


//   //--------------------------------Video player controls--------------------------
// import React, { useRef, useState } from "react";
// function VideoPlayer() {
//     const videoRef = useRef(null);
//     const [isPlaying, setIsPlaying] = useState(false);
//     const handlePlayPause = () => {
//         if (isPlaying) {
//             videoRef.current.pause(); 
//         } else {
//             videoRef.current.play();
//         }
//         setIsPlaying(!isPlaying);
//     };
//     return (
//         <div style={{ textAlign: "center", marginTop: "50px" }}>
//             <h2>🎬 useRef Video Player Example</h2>
//             <video
//               ref={videoRef}
//               width="400"
//               style={{ borderRadius: "10px" }}
//               src="https://www.w3schools.com/html/mov_bbb.mp4"
//             />
//             <div style={{ marginTop: "10px" }}>
//                 <button onClick={handlePlayPause}>
//                     {isPlaying ? "pause" : "play"}
//                 </button>
//             </div>
//         </div>
//     );
// }
// export default VideoPlayer;


//  //--------------------------------Scroll to Bottom-----------------------------------
// import React, { useRef } from "react";
// function ChatBox() {
//     const messages = [
//         "Hey 👋",
//         "How are you?",
//         "React hooks are fun!",
//         "useRef helps us acces DOM elements",
//         "Scroll down to see more messages 😄",
//         "This message is 6",
//         "This message is 7",
//         "This message is 8",
//         "This message is 9",
//         "This is the last message 🚀"
//     ];
//     const bottomRef = useRef(null);
//     const scrollToBottom = () => {
//         bottomRef.current.scrollIntoView({ behaviour: "smooth" });
//     };
//     return (
//         <div style={{ textAlign: "center", marginTop: "40px" }}>
//             <h2>💬 useRef Scroll to Bottom Example</h2>
//           <div 
//             style={{
//                 height: "200px",
//                 width: "300px",
//                 margin: "auto",
//                 overflowY: "scroll",
//                 border: "2px solid #ccc",
//                 borderRadius: "10px",
//                 padding: "10px",
//             }}
//             >
//                 {messages.map((msg, i) => (
//                     <p key={i}>{msg}</p>
//                 ))}
//                 <div ref={bottomRef}></div>
//             </div>
//             <button
//               onClick={scrollToBottom}
//               style={{
//                 marginTop: "10px",
//                 padding: "8px 16px",
//                 borderRadius: "8px",
//                 cursor: "pointer",
//               }}
//             >
//                 Scroll to Bottom
//             </button>  
//         </div>
//     );
// }
// export default ChatBox;

