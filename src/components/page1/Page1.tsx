import MaxWidthWrapper from "../MaxWidthWrapper";
import { Page1Part1 } from "./Page1Part1";
import { Page1Part2 } from "./Page1Part2";

export const Page1 = () => {
  return (
    <MaxWidthWrapper>
      <div className="grid grid-cols-11 mt-28">
        <Page1Part1/>
        <Page1Part2/>
      </div>
    </MaxWidthWrapper>
  );
};
