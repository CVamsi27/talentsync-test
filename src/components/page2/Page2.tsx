import { CompanyNames } from "@/lib/utils";
import MaxWidthWrapper from "../MaxWidthWrapper";
export const Page2 = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex justify-center mt-40">
        Join 1,500+ companies already video conferencing the ClearLink way
      </div>
      <div className="flex justify-center gap-10 items-center mt-10">
        {CompanyNames.map((company) => (
          <div key={company.name}>
            <company.logo />
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};
