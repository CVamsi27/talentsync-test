import {
  Facebook,
  Github,
  Instagram,
  LinkedinIcon,
  Twitter,
  Youtube,
} from "lucide-react";

export const Footer = () => {
  return (
    <div className="w-full bottom-0 flex h-20 text-sm text-gray-500 bg-gray-100 mt-10 px-24 items-center justify-between">
      <div className="">© 2023 ClearLink. All rights reserved.</div>
      <div className="flex gap-4 items-center justify-between">
        <LinkedinIcon />
        <Twitter />
        <Facebook />
        <Instagram />
        <Github />
        <Youtube />
      </div>
    </div>
  );
};
