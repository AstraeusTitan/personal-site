import clsx from "clsx";
import { createContext, FC, ReactNode, useContext, useState } from "react";

const TabContext = createContext({
  trigger: (target: string) => {},
  target: "",
});

type TTriggerProps = {
  children: ReactNode;
  className?: string;
  target: string;
  activeClass?: string;
  inactiveClass?: string;
};
const Trigger = ({
  children,
  className,
  target,
  activeClass,
  inactiveClass,
}: TTriggerProps) => {
  const cx = useContext(TabContext);
  return (
    <div
      onClick={() => cx.trigger(target)}
      className={clsx(
        className,
        target === cx.target ? activeClass : inactiveClass
      )}
    >
      {children}
    </div>
  );
};

type TTargetProps = {
  children: ReactNode;
  className?: string;
  target: string;
  activeClass?: string;
  inactiveClass?: string;
};
const Target = ({
  children,
  className,
  target,
  activeClass,
  inactiveClass,
}: TTargetProps) => {
  const cx = useContext(TabContext);
  return (
    <div
      className={clsx(
        className,
        target === cx.target ? activeClass : inactiveClass
      )}
    >
      {children}
    </div>
  );
};

type TTabsProps = {
  children: ReactNode;
  className?: string;
  initialTarget: string;
};
const Tabs = ({ children, className, initialTarget }: TTabsProps) => {
  const [target, setTarget] = useState(initialTarget);
  return (
    <TabContext.Provider value={{ target: target, trigger: setTarget }}>
      <div className={className}>{children}</div>
    </TabContext.Provider>
  );
};

export default Tabs;
Tabs.Trigger = Trigger;
Tabs.Target = Target;
