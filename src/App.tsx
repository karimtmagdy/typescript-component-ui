import { useState } from "react";
//  import { Button } from 'typescript-component-ui'
import "./App.css";

// import { Button } from "./components";
import { Button } from "../lib/components";
import React from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-500">Vite + React</h1>
      <div className="card">
        <Button
          value={count}
          shape="rounded"
          onClick={() => setCount(count + 1)}
          bezel="light"
          size="xl"
        />
      </div>
    </>
  );
}

export default App;
