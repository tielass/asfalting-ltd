import { useTranslation } from "react-i18next";
import {
  AboutSection,
  SectionTitle,
  AboutContainer,
  TextColumn,
  ImagesColumn,
  AboutDescription,
  FeatureList,
  FeatureItem,
  FeatureIcon,
  FeatureTitle,
  FeatureText,
  AboutImage,
  ImageContainer,
} from "./About.styles";
import { aboutImages } from "../../assets/images";

const About = () => {
  const { t, i18n } = useTranslation();

  return (
    <AboutSection id="about">
      <AboutContainer>
        <TextColumn>
          <SectionTitle lang={i18n.language}>{t("about.title")}</SectionTitle>
          <AboutDescription>{t("about.description")}</AboutDescription>

          <FeatureList>
            <FeatureItem>
              <FeatureIcon>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="24"
                  height="24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12,8 L12,16 M8,12 L16,12"
                    strokeWidth="2"
                    stroke="currentColor"
                  />
                </svg>
              </FeatureIcon>
              <div>
                <FeatureTitle lang={i18n.language}>
                  {t("about.history")}
                </FeatureTitle>
                <FeatureText>{t("about.historyText")}</FeatureText>
              </div>
            </FeatureItem>

            <FeatureItem>
              <FeatureIcon>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="24"
                  height="24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M8,12 L11,15 L16,9"
                    strokeWidth="2"
                    stroke="currentColor"
                  />
                </svg>
              </FeatureIcon>
              <div>
                <FeatureTitle lang={i18n.language}>
                  {t("about.expertise")}
                </FeatureTitle>
                <FeatureText>{t("about.expertiseText")}</FeatureText>
              </div>
            </FeatureItem>

            <FeatureItem>
              <FeatureIcon>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="24"
                  height="24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M7,15 L10,12 L7,9 M14,9 L17,12 L14,15"
                    strokeWidth="2"
                    stroke="currentColor"
                  />
                </svg>
              </FeatureIcon>
              <div>
                <FeatureTitle lang={i18n.language}>
                  {t("about.quality")}
                </FeatureTitle>
                <FeatureText>{t("about.qualityText")}</FeatureText>
              </div>
            </FeatureItem>
          </FeatureList>
        </TextColumn>

        <ImagesColumn>
          <ImageContainer className="large">
            <AboutImage
              src={aboutImages.image1}
              alt={t("about.imageAlt1")}
              loading="lazy"
            />
          </ImageContainer>
          <ImageContainer className="small">
            <AboutImage
              src={aboutImages.image2}
              alt={t("about.imageAlt2")}
              loading="lazy"
            />
          </ImageContainer>
        </ImagesColumn>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
