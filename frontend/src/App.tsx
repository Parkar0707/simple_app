import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    fetch("https://your-vercel-backend-url.vercel.app/")
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(console.error);
  }, []);

  return (
    <div className="App">
      <h1>{message || "Loading..."}</h1>
    </div>
  );
}

export default App;
