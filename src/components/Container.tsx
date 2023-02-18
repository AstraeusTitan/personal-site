import { FC, ReactNode, PropsWithChildren } from "react";
import { clsx } from "clsx";

type TContainerProps = PropsWithChildren<{
  className?: string;
}>;

const Outer: FC<TContainerProps> = ({ children, className }) => {
  return (
    <div className={clsx("sm:px-8", className)}>
      <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
    </div>
  );
};

const Inner: FC<TContainerProps> = ({ children, className }) => {
  return (
    <div className={clsx("relative px-4 sm:px-8 lg:px-12", className)}>
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
    </div>
  );
};

export const Container = ({ children }: PropsWithChildren<{}>) => {
  return (
    <Outer>
      <Inner>{children}</Inner>
    </Outer>
  );
};

Container.Outer = Outer;
Container.Inner = Inner;
