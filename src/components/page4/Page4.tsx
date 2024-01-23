import {
  ArrowLeftCircleIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "lucide-react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { Avatar } from "../icons/Avatar";
import { RatingStars } from "../icons/RatingStars";
import { Shopify } from "../icons/Shopify";

export const Page4 = () => {
  return (
    <>
      <div className="w-full h-20 bg-gray-50 mt-20"></div>
      <MaxWidthWrapper className="bg-gray-50">
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-10">
            <Shopify />
            <RatingStars />
            <div className="text-4xl leading-normal tracking-tight font-medium mr-8">
              ClearLink has upgraded our remote meetings. High-quality video,
              screen sharing, and top-notch security make it essential for our
              team.
            </div>
            <div className="flex justify-between">
              <div className="flex">
                <Avatar />
                <div className="ml-2 flex flex-col text-sm justify-between">
                  <div className="font-medium">Sarah Thompson</div>
                  <div className="text-gray-500">Project Manager, Shopify</div>
                </div>
              </div>
              <div className="flex gap-6 text-blue-500 mr-2">
                <ArrowLeftIcon className="rounded-full border-2 border-gray-300 bg-white p-1" />
                <ArrowRightIcon className="rounded-full border-2 border-gray-300 bg-white p-1" />
              </div>
            </div>
          </div>
          <div>B</div>
        </div>
      </MaxWidthWrapper>
      <div className="w-full h-20 bg-gray-50 mb-20"></div>
    </>
  );
};
