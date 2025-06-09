import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi there, my name is <br />
          Diana Nakiwala, <br />Full Stack Developer
        </SectionTitle>
        <SectionText>
          I'm a passionate software developer, Digital Media & Data Scientist with a background in IT, exploring the world of technology & software development. My journey into tech has been driven by curiosity, problem-solving, & a love for continuous learning.
        </SectionText>
        <Button onClick={props.handleClick}>Download Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;