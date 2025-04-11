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
  const KeyWord = [ "if", "else", "return", "function", "class", "let",
    "var", "const", ];
  const Operators = [ "+", "-", "*", "/", "&&", "||", "=",
    "==", "===", "!", "?", "<", ">", "?", ];

  let savedWords = new Map();
  const types = new Map();
  const typeColor = (list, color) => {
    list.forEach(word => {
      types.set(word, color)
    });
  };

  function saveWord(word, type) {
    savedWords.set(word, (type == "func" ? "green" : "purple"));
    /* this function is not going to be here forever i`m just keeping it "simpler" for now 
    so i can finish the formatText function */
  };

  typeColor(Bool, "purple");
  typeColor(world, "purple");
  typeColor(numbers, "purple");
  typeColor(Adresses, "purple");
  typeColor(KeyWord, "pink");
  typeColor(Operators, "pink");

  const lines = text.split("\n");

  function setType(word, key) {
    if (!isNaN(key)) {
      return <span className="text-purple-400">{key}</span>;
    } else if (types.has(key)) {
      const color = types.get(key);
      return <span className={`text-${color}-400`}>{key}</span>;
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

    row.map((word, index) => {
      let currentWord = words[index];

      if (currentWord != " ") {
        if (savedWords.has(currentWord)) 
        {
          word = <span className={`text-${savedWords.get(currentWord)}-400`}>{currentWord}</span>;
        } 
        else if (wordTracker == "const" && currentWord != "const") 
        {
          word = <span className="text-purple-400">{currentWord}</span>;
          saveWord(currentWord, "const");
        } 
        else if (wordTracker !== null && currentWord == "(") 
        {
          row[index - 1] = (
            <span className={`text-green-400`}>{wordTracker}</span>
          );
        }

        row[index] = setType(word, currentWord);
        if (!Operators.includes(currentWord)) {
          wordTracker = currentWord;
        }
      }
    });
    return row;
  }

  return (
    <div className="font-mono whitespace-pre-wrap text-white mb-[30px]">
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
