import React from "react";
import { useState } from "react";
import Header from "./Header";
import Movies from "./Movies";
import "./Movies.css";

function HomePage() {
  const [inputText, setInputText] = useState("");
  const [rate, setRate] = useState(0);

  return (
    <div>
      <Header setInputText={setInputText} setRate={setRate} rate={rate} />

      <Movies inputText={inputText} rate={rate} />
    </div>
  );
}

export default HomePage;
