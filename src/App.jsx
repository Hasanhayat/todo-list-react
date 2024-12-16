import { useState } from "react";
import "./App.css";

function App() {
  const [lists, setLists] = useState([]);
  const [inputVal, setInputVal] = useState("");

  const addItem = (e) => {
    e.preventDefault();

    setLists((prev) => [...prev, inputVal]);
    setInputVal("");
  };

  const removeItem = (index) => {
    let newArr = [...lists];
    newArr.splice(index, 1);
    setLists(newArr);
  };
  return (
    <div className="App">
      <h1 className="heading">Todo List</h1>
      <form onSubmit={addItem}>
        <input
          placeholder="ITEM"
          type="text"
          value={inputVal}
          onChange={(event) => {
            setInputVal(event.target.value);
          }}
        />
        <button>ADD ITEM</button>
      </form>

      <div className="items">
        {lists.map((ele, i) => {
          return (
            <div className="item">
              <p>{ele}</p>{" "}
              <button
                onClick={() => {
                  removeItem(i);
                }}
              >
                DELETE
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
