// expect error import order
import { StrictMode, useState, useEffect } from "react";
import "./main.css";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("count is", count); // expect warning console.log
  }, []); // expect warning exhaustive-deps

  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>Test {count}</button>
    </div>
  );
}
