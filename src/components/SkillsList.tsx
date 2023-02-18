import clsx from "clsx";
import { FC, PropsWithChildren, ReactNode } from "react";

const Item: FC<PropsWithChildren<{}>> = ({ children }) => {
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

const SkillsList = ({ children }: PropsWithChildren<{}>) => {
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
