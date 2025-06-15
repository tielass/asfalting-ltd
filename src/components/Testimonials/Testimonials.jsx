import React from "react";
import { useTranslation } from "react-i18next";
import {
  TestimonialsSection,
  SectionTitle,
  TestimonialsContainer,
  TestimonialsIntro,
  TestimonialsGrid,
  TestimonialCard,
  Stars,
  TestimonialText,
  ClientInfo,
  ClientName,
  ClientPosition,
} from "./Testimonials.styles";

const Testimonials = () => {
  const { t, i18n } = useTranslation();

  return (
    <TestimonialsSection>
      <SectionTitle lang={i18n.language}>
        {t("testimonials.title")}
      </SectionTitle>

      <TestimonialsContainer>
        <TestimonialsIntro>{t("testimonials.subtitle")}</TestimonialsIntro>

        <TestimonialsGrid>
          <TestimonialCard>
            <Stars>★★★★★</Stars>
            <TestimonialText>
              "{t("testimonials.testimonial1.text")}"
            </TestimonialText>
            <ClientInfo>
              <ClientName>{t("testimonials.testimonial1.author")}</ClientName>
              <ClientPosition>
                {t("testimonials.testimonial1.position")}
              </ClientPosition>
            </ClientInfo>
          </TestimonialCard>

          <TestimonialCard>
            <Stars>★★★★★</Stars>
            <TestimonialText>
              "{t("testimonials.testimonial2.text")}"
            </TestimonialText>
            <ClientInfo>
              <ClientName>{t("testimonials.testimonial2.author")}</ClientName>
              <ClientPosition>
                {t("testimonials.testimonial2.position")}
              </ClientPosition>
            </ClientInfo>
          </TestimonialCard>

          <TestimonialCard>
            <Stars>★★★★★</Stars>
            <TestimonialText>
              "{t("testimonials.testimonial3.text")}"
            </TestimonialText>
            <ClientInfo>
              <ClientName>{t("testimonials.testimonial3.author")}</ClientName>
              <ClientPosition>
                {t("testimonials.testimonial3.position")}
              </ClientPosition>
            </ClientInfo>
          </TestimonialCard>
        </TestimonialsGrid>
      </TestimonialsContainer>
    </TestimonialsSection>
  );
};

export default Testimonials;
