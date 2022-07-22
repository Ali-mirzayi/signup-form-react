import React from "react";
import { Link } from "react-router-dom";
import { SimpleCtx } from "../stateManagement/context";
import { useContext } from "react";

function Home() {
  const { values } = useContext(SimpleCtx);
  console.log(values);
  return (
    // <div className="App">
      <header className="App-header">
        <h1>Welcome to this page!</h1>
        <Link to="/signup" className="App-link">Signup</Link>
      </header>
    // </div>

  );
}

export default Home;