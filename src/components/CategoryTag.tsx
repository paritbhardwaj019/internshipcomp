interface Props {
  title: string;
}

export default function CategoryTag({ title }: Props) {
  return (
    <button className="font-graphik font-semibold text-[12px] py-[3px] px-4 rounded-[50px] bg-[#EEEEEE] my-6 tracking-[0.48px] h-[1.5rem] flex justify-center items-center">
      <span>{title.toUpperCase()}</span>
    </button>
  );
}
