import styled from "@emotion/styled";

export const ServicesSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f5f5f5;
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

export const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  @media (min-width: 1600px) {
    max-width: 1400px;
  }
`;

export const ServiceDescription = styled.p`
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

export const ServiceCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

export const ServiceCard = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  text-align: left;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  border-left: 3px solid #ff6600;

  // &:hover {
  //   transform: translateY(-5px);
  //   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  // }
`;

export const ServiceIcon = styled.div`
  margin-bottom: 1.5rem;
  color: #ff6600;
  display: flex;
  height: 60px;
`;

export const ServiceTitle = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 1rem;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  line-height: 1.2;
`;

export const ServiceText = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`;

export const ExpandedDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 1.5rem;
  padding-top: 0.5rem;
  border-top: 1px dashed rgba(0, 0, 0, 0.1);
`;

export const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1rem;
  padding-left: 0.5rem;
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 0.5rem;

  svg {
    color: #ff6600;
    min-width: 16px;
    flex-shrink: 0;
    height: 16px;
    width: 16px;
  }
`;

export const ViewServicesButton = styled.a`
  display: block;
  width: fit-content;
  margin: 0 auto;
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
