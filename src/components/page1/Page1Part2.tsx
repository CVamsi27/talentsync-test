import Image from "next/image";
import image21 from "../../../public/images/image-21.png";
import { Mic } from "lucide-react";

export const Page1Part2 = () => {
  return (
    <div className="border-blue-200 bg-blue-100 border-2 rounded-md col-span-5 col-start-7 grid grid-cols-3 gap-4 p-4 drop-shadow-2xl">
      {Array.from({ length: 6 }).map((_, index) => (
        <div className="rounded-md bg-red-300" key={index}>
          <Image src={image21} alt="A" />
        </div>
      ))}
      <div className="col-span-3 m-4 flex justify-center">
      {Array.from({ length: 6 }).map((_, index) => (
        <div className="rounded-full border-1 bg-white p-2 mx-3 my-2 text-blue-600" key={index}>
          <Mic/>
        </div>
      ))}
      </div>
    </div>
  );
};
