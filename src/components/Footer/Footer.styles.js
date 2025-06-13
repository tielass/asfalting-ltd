import styled from "@emotion/styled";

export const FooterContainer = styled.footer`
  background-color: #333;
  color: #f5f5f5;
  padding: 4rem 2rem 0;
  width: 100%;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  margin-bottom: 2rem;
  width: 100%;

  @media (min-width: 1600px) {
    max-width: 1400px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterLogo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const CompanyInfo = styled.p`
  font-size: 0.9rem;
  color: #ccc;
  margin-top: 1rem;
`;

export const FooterInfo = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const LinksColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ColumnTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
  color: white;
`;

export const FooterLink = styled.a`
  color: #ccc;
  text-decoration: none;
  margin-bottom: 0.8rem;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  margin-right: 1rem;

  &:hover {
    color: #ff6600;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactItem = styled.p`
  color: #ccc;
  margin-bottom: 0.8rem;
  font-size: 0.9rem;
`;

export const FooterBottom = styled.div`
  border-top: 1px solid #444;
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

export const Copyright = styled.p`
  font-size: 0.9rem;
  color: #ccc;
`;
