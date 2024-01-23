import MaxWidthWrapper from "../MaxWidthWrapper";
import { HandLine } from "../icons/HandLine";

export const Page3Part1 = () => {
  return (
    <MaxWidthWrapper>
      <div className="grid grid-cols-10 mt-40">
        <div className="col-span-7">
          <div className="text-blue-700 font-bold text-sm">
            The ClearLink Advantage
          </div>
          <div className="font-bold text-4xl mt-4 mb-6">
            Why choose ClearLink?
          </div>
          <div className="text-gray-400 text-lg">
            In a world where connection is everything, ClearLink takes the lead.
            Our
          </div>
          <div className="text-gray-400 text-lg">
            cutting-edge video conferencing app offers:
          </div>
        </div>
        <div className="col-span-3 space-y-[-70px]">
          <HandLine/>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};
