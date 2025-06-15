import React from "react";
import { useTranslation } from "react-i18next";
import {
  HeroSection,
  HeroContent,
  Heading,
  Subheading,
  ButtonContainer,
  PrimaryButton,
  SecondaryButton,
} from "./Hero.styles";

const Hero = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <HeroSection id="hero">
      <HeroContent>
        <Heading lang={currentLang}>{t("hero.title")}</Heading>
        <Subheading lang={currentLang}>{t("hero.subtitle")}</Subheading>
        <ButtonContainer>
          <PrimaryButton href="#contact">{t("hero.cta")}</PrimaryButton>
          <SecondaryButton href="#projects">
            {t("projects.viewAll")}
          </SecondaryButton>
        </ButtonContainer>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
