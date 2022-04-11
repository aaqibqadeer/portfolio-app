import { Skill } from "../Skill";
import { TechStack } from "../TechStack";

export const SkillsSection = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical Level</span>

      <div className="skills__container container grid">
        <div>
          <TechStack heading1="Frontend Developer" heading2="More than 4 years">
            <Skill name="HTML" expertiseLevel={90} />
            <Skill name="CSS" expertiseLevel={80} />
            <Skill name="Javascript" expertiseLevel={90} />
            <Skill name="React" expertiseLevel={90} />
          </TechStack>

          <TechStack heading1="Backend Developer" heading2="More than 4 years">
            <Skill name="PHP" expertiseLevel={90} />
            <Skill name="Node JS" expertiseLevel={90} />
            <Skill name="Firebase" expertiseLevel={90} />
            <Skill name="Python" expertiseLevel={90} />
          </TechStack>
        </div>
      </div>
    </section>
  );
};
