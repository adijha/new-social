import React from "react";
import "./App.css";
import  axios  from "axios";

function App() {
  const getdata = params => {
    axios
      .get("/get")
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <h1>gogomaster</h1>
      <button onClick={getdata}> get data </button>
    </div>
  );
}

export default App;
