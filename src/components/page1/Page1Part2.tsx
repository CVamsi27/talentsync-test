import Image from "next/image";
import Page1Image1 from "../../../public/images/Page1Image1.png";
import Page1Image2 from "../../../public/images/Page1Image2.png";
import Page1Image3 from "../../../public/images/Page1Image3.png";
import Page1Image4 from "../../../public/images/Page1Image4.png";
import Page1Image5 from "../../../public/images/Page1Image5.png";
import Page1Image6 from "../../../public/images/Page1Image6.png";
import { MessageCircle, Mic, Settings, Smile, Tv, Video } from "lucide-react";

export const Page1Part2 = () => {
  return (
    <div className="border-blue-200 bg-blue-100 border-2 rounded-md col-span-5 col-start-7 grid grid-cols-3 gap-4 p-4 drop-shadow-2xl">
      <div className="rounded-md bg-red-300">
        <Image src={Page1Image1} alt="A" />
      </div>
      <div className="rounded-md bg-purple-300">
        <Image src={Page1Image2} alt="A" />
      </div>
      <div className="rounded-md bg-green-300">
        <Image src={Page1Image3} alt="A" />
      </div>
      <div className="rounded-md bg-violet-300">
        <Image src={Page1Image4} alt="A" />
      </div>
      <div className="rounded-md bg-yellow-400">
        <Image src={Page1Image5} alt="A" />
      </div>
      <div className="rounded-md bg-pink-400">
        <Image src={Page1Image6} alt="A" />
      </div>
      <div className="col-span-3 mx-4 my-2 flex justify-center">
        <div className="rounded-full border-1 bg-white p-2 mx-3 my-2 text-blue-600">
          <Mic />
        </div>
        <div className="rounded-full border-1 bg-white p-2 mx-3 my-2 text-blue-600">
          <Video />
        </div>
        <div className="rounded-full border-1 bg-white p-2 mx-3 my-2 text-blue-600">
          <Tv />
        </div>
        <div className="rounded-full border-1 bg-white p-2 mx-3 my-2 text-blue-600">
          <Smile />
        </div>
        <div className="rounded-full border-1 bg-white p-2 mx-3 my-2 text-blue-600">
          <MessageCircle />
        </div>
        <div className="rounded-full border-1 bg-white p-2 mx-3 my-2 text-blue-600">
          <Settings />
        </div>
      </div>
    </div>
  );
};
