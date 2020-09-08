import React from "react";
import "./styles.css";

import Counter from "./components/Counter";
import List from "./components/List";

export default function App() {
  return (
    <div className="App">
      <List list={["A", "B", "C"]} render={(item) => <h2>{item}</h2>} />
      <Counter>{(x) => x.count}</Counter>
    </div>
  );
}
