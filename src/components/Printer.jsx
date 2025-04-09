import { useRef, useEffect } from "react";

export const TextArea = ({ code, text }) => {
  {
    /* this will be the component responsible for printing the formated text in the code container
and printing the text in the description area */
  }

  const Bool = ["true", "false"];
  const world = ["window", "document"];
  const numbers = ["Infinity", "NaN"];
  const Adresses = ["null", "undefined"];
  const KeyWord = [
    "if",
    "else",
    "return",
    "function",
    "class",
    "let",
    "var",
    "const",
  ];
  const Operators = [
    "+",
    "-",
    "*",
    "/",
    "&&",
    "||",
    "=",
    "==",
    "===",
    "!",
    "?",
    "<",
    ">",
    "?",
  ];

  const lines = text.split("\n");

  function setType(word, key) {
    if (Operators.includes(key)) {
      word = <span className="text-pink-400">{key}</span>;
    } else if (KeyWord.includes(key)) {
      word = <span className="text-pink-400">{key}</span>;
    } else if (Adresses.includes(word)) {
      word = <span className="text-purple-400">{word}</span>;
    } else if (world.includes(word)) {
      word = <span className="text-purple-400">{word}</span>;
    } else if (numbers.includes(word)) {
      word = <span className="text-purple-400">{word}</span>;
    } else if (Bool.includes(word)) {
      word = <span className="text-purple-400">{word}</span>;
    } else if (!isNaN(word)) {
      word = <span className="text-purple-400">{word}</span>;
    }
    return word;
  }

  {
    /* For now i'll leave it like this, it's not finished but i decided to do a code editor and use 
    it on the portifolio both as a project, and part of the logic for the printer component */
  }

  function formatText(text) {
    let row = text.split(/([\\\/;:'\"\t{}\[\]\(\).,\s])/g);
    let wordTracker = null;
    let words = row;
    let savedWords = {};

    row.map((word, index) => {
      let currentWord = words[index];
      let isSpace = currentWord == " " ? true : false;

      if (!isSpace) {
        if (currentWord in savedWords) {
          word = <span className="text-purple-400">{currentWord}</span>;
        } else if (wordTracker == "const" && currentWord != "const") {
          word = <span className="text-purple-400">{currentWord}</span>;
          savedWords[currentWord] = word;
        } else if (wordTracker !== null && currentWord == "(") {
          row[index - 1] = (
            <span className="text-green-400">{wordTracker}</span>
          );
        }

        row[index] = setType(word, words[index]);
        wordTracker = currentWord;
      }
    });
    return row;
  }

  return (
    <div className="font-mono whitespace-pre-wrap text-white">
      {lines.map(
        (line) =>
          (code && (
            <p className="text-[1.1rem] text-[var(--text-color)]">
              {formatText(line)}
            </p>
          )) || <p className="text-[1.3rem] text-[var(--text-color)]">{line}</p>
      )}
    </div>
  );
};
