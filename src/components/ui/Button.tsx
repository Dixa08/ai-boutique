interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary";
}

export default function Button({
  text,
  variant = "primary",
}: ButtonProps) {
  return (
    <button
      className={`px-7 py-3 rounded-full font-semibold transition ${
        variant === "primary"
          ? "bg-purple-600 hover:bg-purple-700 text-white"
          : "border border-gray-700 hover:bg-gray-900 text-white"
      }`}
    >
      {text}
    </button>
  );
}