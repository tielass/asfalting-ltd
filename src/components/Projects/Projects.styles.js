import styled from "@emotion/styled";

export const ProjectsSection = styled.section`
  padding: 5rem 2rem;
  background-color: white;
  width: 100%;

  @media (min-width: 1600px) {
    padding: 6rem 2rem;
  }
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 3rem;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  @media (min-width: 1600px) {
    max-width: 1400px;
  }
`;

export const ProjectDescription = styled.p`
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

export const ProjectCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

export const ProjectCard = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const ProjectImage = styled.div`
  height: 200px;
  background-color: #ddd; /* Placeholder for actual images */
  background-size: cover;
  background-position: center;

  @media (min-width: 1600px) {
    height: 250px;
  }
`;

export const ProjectCategory = styled.p`
  font-size: 1rem;
  color: #ff6600;
  font-weight: 600;
  padding: 1rem 1rem 0.5rem;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  padding: 0 1rem 1rem;
  color: #333;
`;

export const ViewAllButton = styled.a`
  display: block;
  width: fit-content;
  margin: 0 auto;
  padding: 0.75rem 1.5rem;
  background-color: transparent;
  color: #333;
  text-decoration: none;
  font-weight: 600;
  border: 2px solid #333;
  border-radius: 4px;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  &:hover {
    background-color: #333;
    color: white;
  }
`;
