import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Button } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="bg-green-500">Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Button value="Hello World" outline="red" />
      <Button
        value="Hello World"
        height="md"
        shape="square"
        px="xl"
        variant="japanese"
      />
      <Button
        value="Hello World"
        shape="rounded"
        px="xl"
        bezel="clematis"
        height="xl"
      />
      <Button
        value={count}
        shape="rounded"
        onClick={() => setCount(count + 1)}
        bezel="light"
        size="xl"
      />
    </>
  );
}

export default App;
