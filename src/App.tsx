import React from "react";
import "./App.css";

import Card from "./components/molecules/Card/Card";

function App() {
  return (
    <div className="App">
      <Card
        description="Example description"
        tags={["Article", "More articles", "and..?"]}
        title="Example"
      />
    </div>
  );
}

export default App;
