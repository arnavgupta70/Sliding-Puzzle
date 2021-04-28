import React, { useState, useEffect } from "react";
import Board from "./gameboard";

function App() {
  // eslint-disable-next-line
  const [imgUrl, setImgUrl] = useState("")

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.has("img")) {
      setImgUrl(urlParams.get("img"))
    }
  }, [])

  return (
    <div className="App">
      <h1>Sliding Puzzle using React</h1>
      <Board/>
    </div>
  );
}

export default App;