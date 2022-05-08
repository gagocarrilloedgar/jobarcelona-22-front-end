import React from "react";
import "./App.css";
import CardDescription from "./components/atoms/CardDescription/CardDescription";
import CardTag from "./components/atoms/CardTag/CardTag";
import CardTitle from "./components/atoms/CardTitle/CardTitle";

function App() {
  return (
    <div className="App">
      <CardTitle>Esto es un título</CardTitle>
      <CardDescription>Esto es una descripción</CardDescription>
      <CardTag>Tag 1</CardTag>
    </div>
  );
}

export default App;
