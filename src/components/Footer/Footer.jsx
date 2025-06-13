import {
  FooterContainer,
  FooterContent,
  FooterLogo,
  FooterInfo,
  CompanyInfo,
  FooterLinks,
  LinksColumn,
  ColumnTitle,
  FooterLink,
  ContactInfo,
  ContactItem,
  FooterBottom,
  Copyright,
} from "./Footer.styles";

const Footer = () => {
  return (
    <FooterContainer id="contact">
      <FooterContent>
        <FooterLogo>
          <CompanyInfo>
            Queensland-based company with over 50 years experience in road
            construction.
          </CompanyInfo>
        </FooterLogo>

        <FooterInfo>
          <FooterLinks>
            <LinksColumn>
              <ColumnTitle>SITEMAP</ColumnTitle>
              <FooterLink href="#home">Home</FooterLink>
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#services">Services</FooterLink>
              <FooterLink href="#projects">Projects</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </LinksColumn>

            <LinksColumn>
              <ColumnTitle>SERVICES</ColumnTitle>
              <FooterLink href="#">Road Construction</FooterLink>
              <FooterLink href="#">Asphalt Paving</FooterLink>
              <FooterLink href="#">Earthworks</FooterLink>
              <FooterLink href="#">Drainage Solutions</FooterLink>
              <FooterLink href="#">Infrastructure</FooterLink>
            </LinksColumn>
          </FooterLinks>

          <ContactInfo>
            <ColumnTitle>CONTACT US</ColumnTitle>
            <ContactItem>123 Construction Way</ContactItem>
            <ContactItem>Brisbane, QLD 4000, Australia</ContactItem>
            <ContactItem>(07) 1234 5678</ContactItem>
            <ContactItem>info@stanleyroads.com.au</ContactItem>
          </ContactInfo>
        </FooterInfo>
      </FooterContent>

      <FooterBottom>
        <Copyright>© 2025 Stanley Roads. All rights reserved.</Copyright>
        <div>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Terms of Service</FooterLink>
        </div>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
