import React from "react";
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
  ImagePlaceholder,
  LearnMoreButton,
} from "./About.styles";

const About = () => {
  return (
    <AboutSection id="about">
      <AboutContainer>
        <TextColumn>
        <SectionTitle>WHO WE ARE</SectionTitle>
          <AboutDescription>
            Stanley Roads is a Queensland based company with a company heritage
            of over 50 years experience and expertise in the road construction
            industry. Dedicated to enhancing the road construction industry in
            Australia by providing the highest quality products and services.
          </AboutDescription>

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
                <FeatureTitle>EXPERIENCED TEAM</FeatureTitle>
                <FeatureText>
                  Our team brings decades of combined experience in road
                  construction.
                </FeatureText>
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
                <FeatureTitle>QUALITY ASSURANCE</FeatureTitle>
                <FeatureText>
                  We maintain the highest standards in all our projects with
                  rigorous quality control.
                </FeatureText>
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
                <FeatureTitle>MODERN EQUIPMENT</FeatureTitle>
                <FeatureText>
                  Using the latest technology and machinery for efficient and
                  precise construction.
                </FeatureText>
              </div>
            </FeatureItem>
          </FeatureList>
        </TextColumn>

        <ImagesColumn>
          <ImagePlaceholder className="large" />
          <ImagePlaceholder className="small" />
        </ImagesColumn>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
