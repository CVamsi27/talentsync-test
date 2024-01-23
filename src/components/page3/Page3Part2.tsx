import Image from "next/image";
import MaxWidthWrapper from "../MaxWidthWrapper";
import rectangle from "../../../public/images/rectangle-1.png";
import { AudioLines, Calendar, Lock, VideoIcon } from "lucide-react";

export const Page3Part2 = () => {
  return (
    <MaxWidthWrapper>
      <div className="grid grid-cols-10 mt-16 gap-2">
        <div className="col-span-3 grid grid-rows-2">
          <div className="row-span-1 m-2">
            <VideoIcon className="h-10 w-10 text-blue-500 bg-gray-200 rounded-full p-2" />
            <div className="mt-4 font-medium text-lg">
              Crystal-clear HD video
            </div>
            <div className="mt-1 text-gray-400 text-sm">
              No more pixelation or blurriness – just stunning, lifelike clarity
              that brings your team closer in meetings.
            </div>
          </div>
          <div className="row-span-1 m-2">
            <Calendar className="h-10 w-10 text-blue-500 bg-gray-200 rounded-full p-2" />
            <div className="mt-4 font-medium text-lg">Scheduling made easy</div>
            <div className="mt-1 text-gray-400 text-sm">
              Streamline your agenda with ClearLink&apos;s intuitive scheduling.
              Set up meetings, send invitations, and receive reminders in one
              place.
            </div>
          </div>
        </div>
        <div className="col-span-3 grid grid-rows-2 mr-10">
          <div className="row-span-1 m-2">
            <AudioLines className="h-10 w-10 text-blue-500 bg-gray-200 rounded-full p-2" />
            <div className="mt-4 font-medium text-lg">
              Noise-canceling audio
            </div>
            <div className="mt-1 text-gray-400 text-sm">
              Say goodbye to distractions with our advanced audio tech for
              crisp, interruption-free conversations.
            </div>
          </div>
          <div className="row-span-1 m-2">
            <Lock className="h-10 w-10 text-blue-500 bg-gray-200 rounded-full p-2" />
            <div className="mt-4 font-medium text-lg">Bank-grade security</div>
            <div className="mt-1 text-gray-400 text-sm">
              Your privacy is our priority with bank-grade security protocols
              safeguarding your meetings and data from unwanted intruders.
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <Image src={rectangle} alt="rec" />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};
