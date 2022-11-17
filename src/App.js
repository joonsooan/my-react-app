import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("I always run");
  useEffect(() => {
    console.log("I run only once");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 4) {
      console.log("I run when 'keyword' is changed");
    }
  }, [keyword]);
  useEffect(() => {
    console.log("I run when button is clicked");
  }, [counter]);
  useEffect(() => {
    console.log("I run when keyword and counter changes");
  }, [counter, keyword]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Me!</button>
    </div>
  );
}

export default App;
