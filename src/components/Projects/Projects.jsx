import React from "react";
import { useTranslation } from "react-i18next";
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
  const { t, i18n } = useTranslation();

  return (
    <ProjectsSection id="projects">
      <SectionTitle lang={i18n.language}>{t("projects.title")}</SectionTitle>

      <ProjectsContainer>
        <ProjectDescription>{t("projects.subtitle")}</ProjectDescription>

        <ProjectCardsContainer>
          <ProjectCard>
            <ProjectImage
              style={{
                backgroundImage: `url(${projectImages.roadConstruction})`,
              }}
            />
            <ProjectCategory>
              {t("services.roadConstruction.title")}
            </ProjectCategory>
            <ProjectTitle lang={i18n.language}>
              {t("projects.project1.title")}
            </ProjectTitle>
          </ProjectCard>
          <ProjectCard>
            <ProjectImage
              style={{
                backgroundImage: `url(${projectImages.infrastructure})`,
              }}
            />
            <ProjectCategory>
              {t("services.concreteCurbing.title")}
            </ProjectCategory>
            <ProjectTitle lang={i18n.language}>
              {t("projects.project2.title")}
            </ProjectTitle>
          </ProjectCard>
          <ProjectCard>
            <ProjectImage
              style={{ backgroundImage: `url(${projectImages.asphaltPaving})` }}
            />
            <ProjectCategory>
              {t("services.asphaltPaving.title")}
            </ProjectCategory>
            <ProjectTitle lang={i18n.language}>
              {t("projects.project3.title")}
            </ProjectTitle>
          </ProjectCard>
        </ProjectCardsContainer>

        <ViewAllButton href="#">{t("projects.viewAll")}</ViewAllButton>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;
