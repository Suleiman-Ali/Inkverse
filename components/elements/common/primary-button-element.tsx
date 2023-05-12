interface PrimaryButtonElementProps {
  text: string;
  onClick: () => void;
}

export default function PrimaryButtonElement({
  text,
  onClick,
}: PrimaryButtonElementProps) {
  return (
    <button
      onClick={onClick}
      className="self-center bg-black text-white text-base px-10 py-2 rounded-sm shadow hover:-translate-y-1 hover:shadow-md transition-all"
    >
      {text}
    </button>
  );
}
