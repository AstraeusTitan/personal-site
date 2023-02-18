import { ComponentProps, FC, ReactNode } from "react";
import { Container } from "./Container";

const Divider: FC = () => {
  return (
    <div
      className="
      flex
      items-center
      grow
      pl-4"
    >
      <div
        className="
        border-b
        border-zinc-400
        w-full"
      />
    </div>
  );
};

const Title: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div
      className="
      flex
      mt-8"
    >
      <h3
        className="
        text-sky-500
        text-2xl
        font-bold"
      >
        {children}
      </h3>
      <Divider />
    </div>
  );
};

const Section = ({ children, ...restProps }) => {
  return (
    <Container>
      <section
        className="
        px-8
        mb-16"
        {...restProps}
      >
        {children}
      </section>
    </Container>
  );
};

export default Section;
Section.Title = Title;
