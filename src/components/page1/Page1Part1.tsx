import { Bot, Star } from "lucide-react";
import { Avatar } from "../icons/Avatar";
import { RatingStars } from "../icons/RatingStars";
export const Page1Part1 = () => {
  return (
    <div className="flex flex-col col-span-5">
      <div className="font-semibold text-5xl">
        Uniting the world, one video call at a time
      </div>
      <div className="mt-8 pr-40">
        Experience the future of communication with ClearLink - where
        crystal-clear video conferencing meets unparalleled simplicity.
      </div>
      <div className="flex gap-3 mt-10 items-center text-sm">
        <div className="bg-blue-600 text-white py-4 px-5 border-2 rounded-full">
          Start your free trial
        </div>
        <Bot className="text-blue-600" />
        <div className="text-blue-600">Discover AI assistant</div>
      </div>
      <div className="flex mt-10 items-center text-sm">
        <div className="flex ml-24 space-x-[-70px]">
          {Array.from({ length: 5 }).map((_, index) => (
            <Avatar key={index} />
          ))}
        </div>
        <div className="col-span-4 text-blue-600">
          <div className="flex flex-col ml-12 items-start text-sm">
            <div className="flex gap-2">
              <RatingStars />
              <div>5.0</div>
            </div>
            <div>from 3,000+ reviews</div>
          </div>
        </div>
      </div>
    </div>
  );
};
