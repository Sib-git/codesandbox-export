import { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "smilling",
  "😲": "disbelief",
  "😔": "sad",
  "🥡": "takeoutbox",
  "❤️": "love",
  "😑": "annoyance"
};

export default function App() {
  var [meaning, setMeaning] = useState("");
  var emojiisWeKnow = Object.keys(emojiDictionary);
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Inside outtt</h1>

      <input onChange={emojiInputHandler}></input>
      <h2>{meaning}</h2>
      <h3> emoji we know </h3>
      {emojiisWeKnow.map(function (emoji) {
        return (
          <span style={{ fontSize: "2rem", padding: "0.5rem" }} key={emoji}>
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
