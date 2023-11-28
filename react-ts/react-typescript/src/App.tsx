import { useState } from "react";
import "./App.css";
import Posts from "./components/Posts";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>

      <div>
        {" "}
        <Posts />
      </div>
    </>
  );
}

export default App;
// import { useEffect, useRef, useState } from "react";

// function App() {
//   const [input, setInput] = useState("");
//   const count = useRef(1);

//   useEffect(() => {
//     count.current + 1;
//   });

//   return (
//     <div>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />
//       <hr />
//       <div>you have rendered "{input}"</div>
//       <div>Rendered {count.current}</div>
//     </div>
//   );
// }

// export default App;
