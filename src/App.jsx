import "./App.css";
import { useState } from "react";
import { Toggle } from "./componeents/Toggle";
import useLocalStorage from "use-local-storage";

export const App = () => {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);
  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      
      <h1 className="title">Hello </h1>
      <div className="box">
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae beatae fugit ratione molestiae? Iste, itaque cum? Possimus, ducimus! Fugiat, illum!</h2>
      </div>
    </div>
  );
};
