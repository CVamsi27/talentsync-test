import { ChevronDown } from "lucide-react";
import { Logo } from "./icons/Logo";

export const TopBar = () => {
  return (
    <div className="sticky z-50 top-0 inset-x-0 pb-2.5 mt-10 mx-28">
      <div className="flex justify-between border-2 border-gray-300 bg-gray-100 rounded-full h-16 items-center px-6">
        <div className="flex gap-1">
          <Logo />
          <div className="font-semibold text-lg pl-2">ClearLink.</div>
        </div>
        <div className="flex gap-2 text-gray-500 text-sm">
          <div>Products</div>
          <ChevronDown className="pr-2 mr-2" />
          <div>Solutions</div>
          <ChevronDown className="pr-2 mr-2" />
          <div>Resources</div>
          <ChevronDown className="pr-2 mr-2" />
          <div>Pricing</div>
        </div>
        <div className="flex gap-2 items-center font-medium text-xs">
          <div className="bg-white py-3 px-4 border-2 rounded-full">
            Talk to sales
          </div>
          <div className="bg-blue-600 text-white py-3 px-4 border-2 rounded-full">
            Sign up for free
          </div>
        </div>
      </div>
    </div>
  );
};
