import Image from "next/image";
import { FC } from "react";
import headshot from "../../public/headshot.jpg";

const Headshot: FC = () => {
  return (
    <div
      className="
        relative
        max-h-xs
        max-w-xs
        before:absolute
        before:transition-all
        before:duration-300
        before:content-['']
        before:max-h-xs
        before:w-full
        before:h-full
        before:bg-sky-400
        before:opacity-30
        before:rounded-lg
        after:absolute
        after:transition-all
        after:duration-300
        after:content-['']
        after:w-full
        after:h-full
        after:border-2
        after:border-slate-900
        after:rounded-lg
        after:top-8
        after:left-8
        after:-z-10
        hover:before:opacity-0
        hover:after:top-4
        hover:after:left-4"
    >
      <Image
        src={headshot}
        className="rounded-lg"
        alt="Cody Constant headshot"
      ></Image>
    </div>
  );
};

export default Headshot;
