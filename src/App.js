import "./styles.css";
import Counter from "./components/counter";
import Button from "./components/Button";
import React from "react";

export default function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div className="App">
      <Counter count={count} />
      <Button
        text="INC"
        // count = {count}
        click={() => {
          setCount(count + 1);
          // alert("increased");
        }}
      />
      <Button
        text="DEC"
        count={count}
        click={() => {
          setCount(count - 1);
          // alert("decreased");
        }}
      />
      <Button
        text="Reset"
        // count = {count}
        click={() => {
          setCount(0);
          // alert("decreased");
        }}
      />
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
