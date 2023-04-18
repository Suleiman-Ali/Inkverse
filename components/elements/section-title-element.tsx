interface SectionTitleElementProps {
  text: string;
}

export default function SectionTitleElement({
  text,
}: SectionTitleElementProps) {
  return (
    <h2 className="text-black font-semibold text-lg md:text-xl">{text}</h2>
  );
}
