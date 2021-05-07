import React from "react";
import { useState } from "react";
import Header from "./Header";
import Movies from "./Movies";
import "./Movies.css";
import useIsOnline from "../hooks/useIsOnline";

function HomePage() {
  const [inputText, setInputText] = useState("");
  const [rate, setRate] = useState(0);

  const isOnline = useIsOnline();

  return (
    <div>
      <Header setInputText={setInputText} setRate={setRate} rate={rate} />
      {isOnline ? "Estás ONline" : "Estás OFFline"}
      <Movies inputText={inputText} rate={rate} />
    </div>
  );
}

export default HomePage;
