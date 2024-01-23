import MaxWidthWrapper from "../MaxWidthWrapper";
import P7i1 from "../../../public/images/P7i1.svg";
import P7i2 from "../../../public/images/P7i2.svg";
import P7i3 from "../../../public/images/P7i3.svg";
import P7i4 from "../../../public/images/P7i4.svg";

import { Logo } from "../icons/Logo";
import Image from "next/image";

const PRODUCTS = ["Overview", "Features", "Solutions", "Tutorials", "Pricing"];

const COMPANYS = ["About us", "Careers", "Press", "News", "Contact"];

const RECS = ["Blog", "Events", "Help Center", "Tutorials", "Support"];

const LEGALS = ["Terms", "Privacy", "Cookies", "Licenses", "Contact"];

export const Page7 = () => {
  return (
    <MaxWidthWrapper className="mt-28">
      <div className="grid grid-cols-7 gap-20">
        <div className="col-span-2">
          <div className="flex flex-col gap-8">
            <div className="flex gap-1">
              <Logo />
              <div className="font-semibold text-lg pl-2">ClearLink.</div>
            </div>
            <div className="text-gray-400 text-sm">
              ClearLink is your gateway to effortless, high-quality video
              conferencing. Join us in shaping the future of communication!
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="font-semibold text-xs text-gray-400">Product</div>
          {PRODUCTS.map((product) => (
            <div key={product} className="font-semibold text-sm text-gray-500">
              {product}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <div className="font-semibold text-xs text-gray-400">Company</div>
          {COMPANYS.map((company) => (
            <div key={company} className="font-semibold text-sm text-gray-500">
              {company}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <div className="font-semibold text-xs text-gray-400">Resources</div>
          {RECS.map((rec) => (
            <div key={rec} className="font-semibold text-sm text-gray-500">
              {rec}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <div className="font-semibold text-xs text-gray-400">Legal</div>
          {LEGALS.map((legal) => (
            <div key={legal} className="font-semibold text-sm text-gray-500">
              {legal}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <div className="font-semibold text-xs text-blue-600">Get the app</div>
          <Image src={P7i1} alt="App Store" />
          <div className="bg-black rounded-md px-2 py-1">
            <div className="flex">
              <Image src={P7i4} alt="A" />
              <div className="flex flex-col justify-between ml-1">
                <Image src={P7i2} alt="A" />
                <Image src={P7i3} alt="A" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};
