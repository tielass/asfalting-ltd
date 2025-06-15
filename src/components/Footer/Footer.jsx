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
  ContactIconWrapper,
  FooterBottom,
  Copyright,
} from "./Footer.styles";
import { MapPin, Phone, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const fullYear = new Date().getFullYear();

  return (
    <FooterContainer id="contact">
      <FooterContent>
        <FooterLogo>
          <CompanyInfo>{t("footer.companyDesc")}</CompanyInfo>
        </FooterLogo>

        <FooterInfo>
          <FooterLinks>
            <LinksColumn>
              <ColumnTitle>{t("footer.sitemap")}</ColumnTitle>
              <FooterLink href="#home">{t("footer.links.home")}</FooterLink>
              <FooterLink href="#about">{t("footer.links.about")}</FooterLink>
              <FooterLink href="#services">
                {t("footer.links.services")}
              </FooterLink>
              <FooterLink href="#projects">
                {t("footer.links.projects")}
              </FooterLink>
              <FooterLink href="#contact">
                {t("footer.links.contact")}
              </FooterLink>
            </LinksColumn>

            <LinksColumn>
              <ColumnTitle>{t("footer.servicesTitle")}</ColumnTitle>
              <FooterLink href="#">
                {t("services.roadConstruction.title")}
              </FooterLink>
              <FooterLink href="#">
                {t("services.asphaltPaving.title")}
              </FooterLink>
              <FooterLink href="#">
                {t("services.roadMaintenance.title")}
              </FooterLink>
              <FooterLink href="#">
                {t("services.concreteCurbing.title")}
              </FooterLink>
            </LinksColumn>
          </FooterLinks>

          <ContactInfo>
            <ColumnTitle>{t("footer.contactTitle")}</ColumnTitle>
            <ContactItem>
              <ContactIconWrapper>
                <MapPin size={18} strokeWidth={1.5} />
              </ContactIconWrapper>
              {t("footer.address")}
            </ContactItem>
            <ContactItem>
              <ContactIconWrapper>
                <Phone size={18} strokeWidth={1.5} />
              </ContactIconWrapper>
              {t("footer.phone")}
            </ContactItem>
            <ContactItem>
              <ContactIconWrapper>
                <Mail size={18} strokeWidth={1.5} />
              </ContactIconWrapper>
              {t("footer.email")}
            </ContactItem>
          </ContactInfo>
        </FooterInfo>
      </FooterContent>

      <FooterBottom>
        <Copyright>
          © {fullYear} {t("footer.company")}. {t("footer.allRightsReserved")}
        </Copyright>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
