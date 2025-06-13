import styled from "@emotion/styled";

export const TestimonialsSection = styled.section`
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

export const TestimonialsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  @media (min-width: 1600px) {
    max-width: 1400px;
  }
`;

export const TestimonialsIntro = styled.p`
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

export const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

export const TestimonialCard = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const Stars = styled.div`
  color: #ff6600;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const TestimonialText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 1.5rem;
  font-style: italic;
`;

export const ClientInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ClientName = styled.span`
  font-weight: 700;
  font-size: 1.1rem;
  color: #333;
`;

export const ClientPosition = styled.span`
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.25rem;
`;
