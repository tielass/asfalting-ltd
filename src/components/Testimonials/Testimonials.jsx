import React from "react";
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
  return (
    <TestimonialsSection>
      <SectionTitle>WHAT OUR CLIENTS SAY</SectionTitle>

      <TestimonialsContainer>
        <TestimonialsIntro>
          Don't just take our word for it. Here's what our clients have to say
          about working with Stanley Roads.
        </TestimonialsIntro>

        <TestimonialsGrid>
          <TestimonialCard>
            <Stars>★★★★★</Stars>
            <TestimonialText>
              "Stanley Roads delivered our highway project on time and on
              budget. Their attention to detail and professional service
              exceeded our expectations."
            </TestimonialText>
            <ClientInfo>
              <ClientName>John Smith</ClientName>
              <ClientPosition>
                Project Manager, Queensland Transport
              </ClientPosition>
            </ClientInfo>
          </TestimonialCard>

          <TestimonialCard>
            <Stars>★★★★★</Stars>
            <TestimonialText>
              "We've worked with Stanley Roads on over the past decade. Their
              expertise in road construction is unmatched in the industry."
            </TestimonialText>
            <ClientInfo>
              <ClientName>Sarah Johnson</ClientName>
              <ClientPosition>
                Brisbane Regional Development Authority
              </ClientPosition>
            </ClientInfo>
          </TestimonialCard>

          <TestimonialCard>
            <Stars>★★★★★</Stars>
            <TestimonialText>
              "The team at Stanley Roads provided excellent solutions to our
              complex drainage issues. Their technical knowledge and
              problem-solving abilities are outstanding."
            </TestimonialText>
            <ClientInfo>
              <ClientName>Michael Wong</ClientName>
              <ClientPosition>Gold Coast City Council</ClientPosition>
            </ClientInfo>
          </TestimonialCard>
        </TestimonialsGrid>
      </TestimonialsContainer>
    </TestimonialsSection>
  );
};

export default Testimonials;
