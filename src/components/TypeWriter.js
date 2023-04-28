import { useTyping } from "@/hooks/useTyping";

export default function TypeWriter({ toType, textSize, color }) {
  const { text, ariaText, phase } = useTyping(toType);

  return (
    <span
      className={`${color} text-${textSize} ${
        phase === "Typing" || phase === "Deleting" ? "cursor-typing" : "cursor"
      }`}
      aria-label={`${ariaText}`}
    >
      {text}
    </span>
  );
}
