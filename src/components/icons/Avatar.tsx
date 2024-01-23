import Image, { StaticImageData } from "next/image";

export const Avatar = ({ index, path }: { index?: string, path: StaticImageData }) => {
  return (
    <div className="rounded-full" key={index}>
      <Image src={path} alt="A" />
    </div>
  );
};
