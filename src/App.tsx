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
      <Button
        value={count}
        shape="rounded"
        className="mx-auto"
        onClick={() => setCount(count + 1)}
        bezel="light"
        px="xl"
      />
    </>
  );
}

export default App;
