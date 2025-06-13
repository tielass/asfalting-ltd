import styled from "@emotion/styled";
import { heroBackground } from "../../assets/images";

export const HeroSection = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${heroBackground || "gray"});
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 0 2rem;
  position: relative; /* For absolute positioning of children */
  overflow: hidden; /* To ensure no content spills out */
`;

export const HeroContent = styled.div`
  max-width: 800px;
  width: 100%;

  @media (min-width: 1600px) {
    max-width: 1000px;
  }
`;

export const Heading = styled.h1`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  letter-spacing: 1px;
  text-transform: uppercase;

  @media (min-width: 1600px) {
    font-size: 5rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  /* Language-specific adjustments */
  &:lang(bg) {
    font-size: calc(4rem * 0.75); /* Scale down Bulgarian text */

    @media (min-width: 1600px) {
      font-size: calc(5rem * 0.75);
    }

    @media (max-width: 768px) {
      font-size: calc(2.5rem * 0.75);
    }
  }
`;

export const Subheading = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.6;

  @media (min-width: 1600px) {
    font-size: 1.5rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PrimaryButton = styled.a`
  background-color: #ff6600;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s ease;
  white-space: nowrap;

  @media (min-width: 1600px) {
    padding: 1rem 2rem;
    font-size: 1.1rem;
  }

  &:hover {
    background-color: #e65c00;
  }
`;

export const SecondaryButton = styled.a`
  background-color: transparent;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  border: 2px solid white;
  transition: background-color 0.3s ease;
  white-space: nowrap;

  @media (min-width: 1600px) {
    padding: 1rem 2rem;
    font-size: 1.1rem;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
