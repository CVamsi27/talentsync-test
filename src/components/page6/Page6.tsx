import { CheckCircle2 } from "lucide-react";
import P6i1 from "../../../public/images/P6i1.png";
import Image from "next/image";

export const Page6 = () => {
  return (
    <div className="grid grid-cols-2 mt-40 ml-24">
      <div className="flex flex-col gap-10 m-16">
        <div className="text-4xl font-bold">
          Ready to clear the path to perfect communication?
        </div>
        <div className="flex flex-col mx-4 gap-4">
          <div className="flex">
            <CheckCircle2 className="text-blue-500" />
            <div className="ml-2 text-gray-500">30 days free trial</div>
          </div>
          <div className="flex">
            <CheckCircle2 className="text-blue-500" />
            <div className="ml-2 text-gray-500">Cancel at any time</div>
          </div>
          <div className="flex">
            <CheckCircle2 className="text-blue-500" />
            <div className="ml-2 text-gray-500">Access to all features</div>
          </div>
          <div className="flex">
            <CheckCircle2 className="text-blue-500" />
            <div className="ml-2 text-gray-500">Peronalized onboarding</div>
          </div>
        </div>
        <div className="flex gap-2 items-center font-medium text-xs">
          <div className="bg-white py-3 px-4 border-2 rounded-full">
            Talk to sales
          </div>
          <div className="bg-blue-600 text-white py-3 px-4 border-2 rounded-full">
            Start your free trial
          </div>
        </div>
      </div>
      <div className="border-l-8 border-t-8 border-black rounded-tl-2xl">
        <Image src={P6i1} alt="R" />
      </div>
    </div>
  );
};
