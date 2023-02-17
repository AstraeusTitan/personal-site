import { FC } from "react";
import Section from "./Section";

const ContactSection: FC = () => {
  return (
    <Section>
      <Section.Title>Contact</Section.Title>
      <div
        className="
        flex
        flex-col
        items-center
        pb-12"
      >
        <h3
          className="
          text-3xl
          sm:text-4xl
          font-bold
          text-zinc-700
          mt-8"
        >
          Get In Touch
        </h3>
        <p className="max-w-md mt-4 text-center">
          I am currently looking for new work opportunities. If you want to work
          together or have any questions, send me a message and I'll get back to
          you.
        </p>
        <a
          href="mailto:clconstant21@gmail.com"
          className="
          mt-6
          px-6
          py-2
          border-2
          border-sky-400
          text-sky-400
          leading-tight
          uppercase
          rounded
          hover:bg-black
          hover:bg-opacity-5
          focus:outline-none
          focus:ring-0
          transition
          duration-150
          ease-in-out"
        >
          Say Hello
        </a>
      </div>
    </Section>
  );
};

export default ContactSection;
