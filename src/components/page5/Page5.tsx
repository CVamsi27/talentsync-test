import { MinusCircle, PlusCircle } from "lucide-react";
import MaxWidthWrapper from "../MaxWidthWrapper";

const TEXT = [
  "Can I use ClearLink on multiple devices?",
  "Is ClearLink compatible with other video conferencing platforms?",
  "How does ClearLink ensure the security of my video conferences?",
  "Do I need to download any software to use ClearLink?",
  "What kind of customer support does ClearLink provide?",
];

export const Page5 = () => {
  return (
    <MaxWidthWrapper>
      <div className="grid grid-cols-10">
        <div className="col-span-4 flex flex-col gap-3">
          <div className="text-sm text-blue-600">Support</div>
          <div className="text-4xl font-semibold">FAQs</div>
          <div className="text-gray-500">
            Everything you need to know about the product and billing.
            Can&apos;t find the answer you&apos;re looking for? Please{" "}
            <span className="underline">chat to our friendly team.</span>
          </div>
        </div>
        <div className="col-span-6 ml-16 col-start-5 flex flex-col gap-3">
          <div className="flex justify-between gap-16 p-6 bg-gray-50 border-gray-100 border-2 rounded-md">
            <div className="flex flex-col gap-2">
              <div className="font-semibold">
                How many participants can join a ClearLink video conference?
              </div>
              <div className="text-gray-500 text-sm">
                ClearLink offers flexible meeting options. Depending on your
                subscription plan, you can host meetings with varying numbers of
                participants. Our plans are designed to accommodate small team
                collaborations and large-scale webinars, ensuring you have the
                right fit for your needs.
              </div>
            </div>
            <div className="flex items-start">
              <MinusCircle className="text-gray-500 text-xl" />
            </div>
          </div>
          {TEXT.map((i) => (
            <div key={i} className="flex justify-between gap-16 p-6 border-b">
              <div className="font-semibold text-base">{i}</div>
              <div className="flex items-start">
                <PlusCircle className="text-gray-500 text-xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};
