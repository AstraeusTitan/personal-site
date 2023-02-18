import { FC } from "react";
import { Container } from "./Container";

const HeroSection: FC = () => {
  return (
    <Container>
      <div
        className="
        h-screen
        flex
        items-center"
      >
        <div
          className="
          px-8"
        >
          <p
            className="
            text-sky-500
            text-lg
            sm:text-xl
            font-bold"
          >
            Hi, my name is
          </p>
          <h1
            className="
            text-4xl
            sm:text-5xl
            font-bold
            text-zinc-900
            mt-4"
          >
            Cody Constant
          </h1>
          <h2
            className="
            text-4xl
            sm:text-5xl
            font-bold
            text-zinc-600
            mt-3"
          >
            I build web tools.
          </h2>
          <p
            className="
            text-zinc-600
            mt-6
            sm:text-xl
            max-w-2xl"
          >
            I am a software developer specializing in building web based tools
            to expand business functionality and improve operations.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
