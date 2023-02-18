import { useEffect, useState } from "react";
/** 
 * 
@param {string[]} words
*/

const TYPE_MS = 150;
const PAUSE_MS = 2000;
const DELETE_MS = 50;

export const useTyping = (words = [""]) => {
  const [phase, setPhase] = useState("Typing");
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    switch (phase) {
      case "Typing": {
        const nextTyped = words[index].slice(0, text.length + 1);
        if (nextTyped === text) {
          setPhase("Paused");
          return;
        }
        const typed = setTimeout(() => {
          setText(nextTyped);
        }, TYPE_MS);
        return () => clearTimeout(typed);
      }
      case "Deleting": {
        if (!text) {
          const nextIndex = index + 1;
          setPhase("Typing");
          setIndex(words[nextIndex] ? nextIndex : 0);
          return;
        }
        const remainingTyped = words[index].slice(0, text.length - 1);
        const toDelete = setTimeout(() => {
          setText(remainingTyped);
        }, DELETE_MS);
        return () => clearTimeout(toDelete);
      }
      case "Paused":
      default:
        const timeDelete = setTimeout(() => {
          setPhase("Deleting");
        }, PAUSE_MS);
        return () => clearTimeout(timeDelete);
    }
  }, [text, words, phase, index]);

  return { text, ariaText: words[index], phase };
};
