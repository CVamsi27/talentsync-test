import Image from "next/image";
import avatar from "../../../public/images/avatar.png";

export const Avatar = ({ index }: { index?: string }) => {
  return (
    <div className="rounded-full" key={index}>
      <Image src={avatar} alt="A" />
    </div>
  );
};
