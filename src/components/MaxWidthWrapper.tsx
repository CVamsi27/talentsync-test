"use client";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className={className}>
      <div className={"mx-auto w-full max-w-screen-xl px-2.5"}>{children}</div>
    </div>
  );
};

export default MaxWidthWrapper;
