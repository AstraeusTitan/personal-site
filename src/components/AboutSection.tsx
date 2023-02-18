import { FC } from "react";
import Headshot from "./Headshot";
import Section from "./Section";
import SkillsList from "./SkillsList";

const AboutSection: FC = () => {
  return (
    <Section id="about" className="scroll-mt-20">
      <Section.Title>About</Section.Title>
      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        pt-6
        pb-8
        hoverable:pb-12"
      >
        <div>
          <p>
            Hello! My name is Cody and I enjoy creating tools that help people
            get their work done.
          </p>
          <p className="mt-4">
            I have had the privilege to work with operations teams to determine
            what the difficulties in their work flow and then implement
            solutions. I also worked to translate business ideas into usable
            tools.
          </p>
          <p className="mt-4 mb-4">
            Here are a few of the technologies that I have been working with
            recently:
          </p>
          <SkillsList>
            <SkillsList.Item>Javascript</SkillsList.Item>
            <SkillsList.Item>Typescript</SkillsList.Item>
            <SkillsList.Item>Next.js</SkillsList.Item>
            <SkillsList.Item>Tailwind CSS</SkillsList.Item>
            <SkillsList.Item>Ruby</SkillsList.Item>
            <SkillsList.Item>Rails</SkillsList.Item>
          </SkillsList>
        </div>
        <div
          className="
          flex
          justify-center
          mt-8
          md:mt-0
          md:ml-8"
        >
          <Headshot />
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
