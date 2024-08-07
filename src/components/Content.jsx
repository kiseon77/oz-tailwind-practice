export default function Content({ content }) {
  return (
    <div className="flex flex-col items-start gap-[5px]">
      <img
        src={content.img}
        alt={content.title}
        className="w-[300px] rounded-[10px] mb-[3px]"
      />
      <span className="text-xs text-yellow border border-yellow py-1 px-[5px] rounded-[3px]">
        모집중
      </span>
      <div className="text-lg font-semibold">{content.title}</div>
      <p className="text-xs text-gray">{content.subtitle}</p>
    </div>
  );
}
