import clsx from "clsx";
import { FC, ReactNode } from "react";

type TProps = {
  children: ReactNode;
};

const Item: FC<TProps> = ({ children }) => {
  return (
    <li
      className="
      before:content-['▹']
      before:text-sky-500
      before:text-xl"
    >
      {children}
    </li>
  );
};

const SkillsList = ({ children }: TProps) => {
  return (
    <ul
      className="
      columns-2
      max-w-2xl"
    >
      {children}
    </ul>
  );
};

export default SkillsList;
SkillsList.Item = Item;
