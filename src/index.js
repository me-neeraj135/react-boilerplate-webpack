/** @format */
import React from "react";
import ReactDOM from "react-dom/client";
import { username } from "./main";
import "../style/style.scss";

// const res = await promise;
// export { val };
// console.log(await new Promise(res => res(`hello await`)));

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  return <h1>hello {username}</h1>;
}

root.render(<App />);
