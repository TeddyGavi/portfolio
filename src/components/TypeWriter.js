import { useTyping } from "@/hooks/useTyping";

export default function TypeWriter({ toType, textSize }) {
  const { text, ariaText, phase } = useTyping(toType);

  return (
    <span
      className={`text-white text-${textSize} ${
        phase === "Typing" || phase === "Deleting" ? "cursor-typing" : "cursor"
      }`}
      aria-label={ariaText}
    >
      {text}.
    </span>
  );
}
