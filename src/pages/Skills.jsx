import React from 'react'
import { Container} from "react-bootstrap";
import { programskills, databaseskills, webskills, ide, framework, other } from '../data/data';
import SkillsRow from '../components/SkillsRow';
import Heading from '../components/common/Heading';

const Skills = () => {
  return (
    <section className="skills py-2">
      <Heading title=" Skills"/>
         <Container fluid className="py-2 overflow-hidden">
          <h4>&lt; Programming Language &gt;</h4>
            <SkillsRow skill={programskills}/>
            <h4>&lt; Database &gt;</h4>
            <SkillsRow skill={databaseskills} />
            <h4>&lt; Web Development &gt;</h4>
            <SkillsRow skill={webskills} />
            <h4>&lt; Framework &gt;</h4>
            <SkillsRow skill={framework} />
            <h4>&lt; IDE &gt;</h4>
            <SkillsRow skill={ide} />
            <h4>&lt; Others &gt;</h4>
            <SkillsRow skill={other} />
          </Container>
    </section>
  )
}

export default Skills;