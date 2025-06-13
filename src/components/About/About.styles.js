import styled from "@emotion/styled";

export const AboutSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f9f9f9;
  width: 100%;

  @media (min-width: 1600px) {
    padding: 6rem 2rem;
  }
`;

export const SectionTitle = styled.h2`
  text-align: left;
  font-size: 3rem;
  margin-bottom: 3rem;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  gap: 3rem;

  @media (max-width: 992px) {
    flex-direction: column;
  }

  @media (min-width: 1600px) {
    max-width: 1400px;
  }
`;

export const TextColumn = styled.div`
  flex: 1;

  @media (max-width: 992px) {
    order: 1;
  }
`;

export const ImagesColumn = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 992px) {
    order: 0;
    margin-bottom: 2rem;
  }
`;

export const AboutDescription = styled.p`
  text-align: left;
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  color: #555;
`;

export const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

export const FeatureIcon = styled.div`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  color: #ff6600;
  margin-top: 0.2rem;
`;

export const FeatureTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  line-height: 1.2;
`;

export const FeatureText = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
`;

export const ImagePlaceholder = styled.div`
  background-color: #e5e5e5;
  border-radius: 4px;
  overflow: hidden;

  &.large {
    height: 370px;

    @media (min-width: 1200px) {
      height: 370px;
    }
  }

  &.small {
    height: 320px;
    margin-top: 5rem;

    @media (min-width: 1200px) {
      height: 370px;
    }
  }
`;

export const LearnMoreButton = styled.a`
  display: inline-block;
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  background-color: #ff6600;
  color: white;
  text-decoration: none;
  font-weight: 600;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e65c00;
  }
`;
