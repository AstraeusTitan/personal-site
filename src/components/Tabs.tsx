import clsx from "clsx";
import {
  createContext,
  FC,
  PropsWithChildren,
  ReactNode,
  useContext,
  useState,
} from "react";

const TabContext = createContext({
  trigger: (target: string) => {},
  target: "",
});

const Trigger: FC<
  PropsWithChildren<{
    className?: string;
    target: string;
    activeClass?: string;
    inactiveClass?: string;
  }>
> = ({ children, className, target, activeClass, inactiveClass }) => {
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

const Target: FC<
  PropsWithChildren<{
    className?: string;
    target: string;
    activeClass?: string;
    inactiveClass?: string;
  }>
> = ({ children, className, target, activeClass, inactiveClass }) => {
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

const Tabs = ({
  children,
  className,
  initialTarget,
}: PropsWithChildren<{ className?: string; initialTarget: string }>) => {
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
