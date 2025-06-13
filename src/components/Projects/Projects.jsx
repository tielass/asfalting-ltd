import React from "react";
import { projectImages } from "../../assets/images";
import {
  ProjectsSection,
  SectionTitle,
  ProjectsContainer,
  ProjectDescription,
  ProjectCardsContainer,
  ProjectCard,
  ProjectImage,
  ProjectCategory,
  ProjectTitle,
  ViewAllButton,
} from "./Projects.styles";

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <SectionTitle>FEATURED PROJECTS</SectionTitle>

      <ProjectsContainer>
        <ProjectDescription>
          Explore our portfolio of successful road construction and
          infrastructure projects across Queensland and beyond.
        </ProjectDescription>

        <ProjectCardsContainer>
          {" "}
          <ProjectCard>
            <ProjectImage
              style={{
                backgroundImage: `url(${projectImages.roadConstruction})`,
              }}
            />
            <ProjectCategory>Road Construction</ProjectCategory>
            <ProjectTitle>PACIFIC HIGHWAY UPGRADE</ProjectTitle>
          </ProjectCard>
          <ProjectCard>
            <ProjectImage
              style={{
                backgroundImage: `url(${projectImages.infrastructure})`,
              }}
            />
            <ProjectCategory>Infrastructure</ProjectCategory>
            <ProjectTitle>BRISBANE AIRPORT ACCESS ROAD</ProjectTitle>
          </ProjectCard>
          <ProjectCard>
            <ProjectImage
              style={{ backgroundImage: `url(${projectImages.asphaltPaving})` }}
            />
            <ProjectCategory>Asphalt Paving</ProjectCategory>
            <ProjectTitle>GOLD COAST COMMERCIAL DEVELOPMENT</ProjectTitle>
          </ProjectCard>
        </ProjectCardsContainer>

        <ViewAllButton href="#">View All Projects</ViewAllButton>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;
