import { FC } from "react";
import { Container } from "./Container";
import Section from "./Section";
import Tabs from "./Tabs";

type TExperience = {
  title: string;
  company: string;
  dates: string;
  points: string[];
};
const experiences: TExperience[] = [
  {
    title: "Senior Web Developer",
    company: "CashForYourMac.com",
    dates: "Oct 2020 - Nov 2022",
    points: [
      "Integrated analytics into CMS tools to improve visibility of key performance metrics and aid in operational planning",
      "Created a simple blog portal to help the business expand the written content on the site for SEO purposes",
      "Created a partner account system with partner pages and resource hosting to allow for greater community interaction",
      "Worked on rebuilding portions of the monolithic codebase as micro-services to increase maintainability and support future business plans",
      "Refactored portions of the CMS and checkout flow to use web sockets to improve responsiveness",
    ],
  },
  {
    title: "Web Developer",
    company: "CashForYourMac.com",
    dates: "May 2019 - Oct 2020",
    points: [
      "Expanded quote form functionality and CMS to allow for dynamically hiding and locking options based on the product definition to allow for greater control over what users are allowed to select",
      "Designed and created email templates for standard business operations to improve customer facing bran consistency",
      "Extended CMS access controls to support more granular employee permissions",
      "Performed large scale refactor of codebase to fix bugs, improve code readability, increase performance, and reduce technical debt",
      "Integrated Webpacker into Rails 5 application to allow for use of more modern front end tooling",
    ],
  },
  {
    title: "Junior Web Developer",
    company: "CashForYourMac.com",
    dates: "May 2018 - May 2019",
    points: [
      "Converted static website designs to add interactivity, dynamic content, and run on Rails 5",
      "Designed and implemented a PostgreSQL database to drive a dynamic quote form",
      "Created a dynamic quote form that captures device information from users",
      "Created a checkout system that automatically creates a purchase offer based on information captured by the quote form",
      "Designed and implemented a CMS tool for controlling the data that drives the dynamic quote form",
    ],
  },
];

const WorkDescription: FC<{ className?: string; experience: TExperience }> = ({
  className,
  experience,
}) => {
  return (
    <div className={className}>
      <div className="grid ">
        <h4 className="text-xl mb-4">{experience.title}</h4>
        <p className="text-sky-500 mb:justify-self-end">{experience.company}</p>
      </div>
      <div>
        <p className="text-zinc-600 text-sm">{experience.dates}</p>
      </div>
      <ul className="mt-4">
        {experience.points.map((point, i) => {
          return (
            <li
              key={i}
              className="
              before:content-['▹']
              before:text-sky-500
              before:text-xl
              mt-2"
            >
              {point}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

type TTimelineNode = {
  title: string;
  company: string;
};
type TTimelineProps = {
  nodes: TTimelineNode[];
  className?: string;
};

const Timeline: FC<TTimelineProps> = ({ nodes, className }) => {
  return (
    <div className={className}>
      <ol>
        {nodes.map((node, i) => {
          return (
            <Tabs.Trigger
              target={`panel-${i + 1}`}
              key={i}
              className="w-fit group cursor-pointer"
              activeClass="active"
            >
              <li className="w-56 mb-4">
                <h4 className="text-lg group-[.active]:text-sky-400">
                  {node.title}
                </h4>
                <p>{node.company}</p>
              </li>
            </Tabs.Trigger>
          );
        })}
      </ol>
    </div>
  );
};

const WorkSection: FC = () => {
  return (
    <Section>
      <Section.Title>Work</Section.Title>
      <Tabs initialTarget="panel-1" className="flex flex-col lg:flex-row mt-8">
        {/* timeline goes here */}
        <Timeline nodes={experiences} className="hidden lg:block" />
        {experiences.map((exp, i) => {
          return (
            <Tabs.Target
              target={`panel-${i + 1}`}
              key={i}
              inactiveClass="lg:hidden"
            >
              <WorkDescription experience={exp} className="" />
            </Tabs.Target>
          );
        })}
      </Tabs>
    </Section>
  );
};

export default WorkSection;
