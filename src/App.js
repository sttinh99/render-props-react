import React from "react";
import "./styles.css";

import Counter from "./components/Counter";
import List from "./components/List";
import NumberProvider from "./components/NumberProvider";
import NumberContext from "./contexts/NumberContext";

const data = ["A", "B", "C"];

//provider consumer

export default function App() {
  return (
    <NumberProvider>
      <div className="App">
        <NumberContext.Consumer>
          {({ number, updateNumber }) => (
            <div>
              <h2>{number}</h2>
              <button onClick={updateNumber}>Update number</button>
            </div>
          )}
        </NumberContext.Consumer>
        <List list={data} render={(item) => <h2>{item}</h2>} />
        <Counter>{(x) => x.count}</Counter>
      </div>
    </NumberProvider>
  );
}
