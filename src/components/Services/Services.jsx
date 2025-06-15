import { Construction, Truck, Bolt, Cog, Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  ServicesSection,
  SectionTitle,
  ServicesContainer,
  ServiceDescription,
  ServiceCardsContainer,
  ServiceCard,
  ServiceIcon,
  ServiceTitle,
  ServiceText,
  ExpandedDescription,
} from "./Services.styles";

const Services = () => {
  const { t, i18n } = useTranslation();

  // Service details
  // const serviceDetails = {
  //   roadConstruction: {
  //     features: [
  //       "Complete project management",
  //       "Surface preparation and grading",
  //       "Drainage solutions",
  //       "Environmental compliance",
  //       "Traffic management planning",
  //     ],
  //   },
  //   asphaltPaving: {
  //     features: [
  //       "Residential driveways",
  //       "Commercial parking lots",
  //       "Industrial facilities",
  //       "Athletic courts and playgrounds",
  //       "Specialized decorative asphalt",
  //     ],
  //   },
  //   roadMaintenance: {
  //     features: [
  //       "Crack sealing and filling",
  //       "Pothole repair",
  //       "Sealcoating application",
  //       "Line striping and marking",
  //       "Annual maintenance programs",
  //     ],
  //   },
  //   concreteCurbing: {
  //     features: [
  //       "Decorative landscape curbing",
  //       "Commercial property edging",
  //       "ADA-compliant sidewalk curbing",
  //       "Parking lot islands and dividers",
  //       "Custom designs and patterns",
  //     ],
  //   },
  // };

  return (
    <ServicesSection id="services">
      <SectionTitle lang={i18n.language}>{t("services.title")}</SectionTitle>
      <ServicesContainer>
        <ServiceDescription>{t("services.subtitle")}</ServiceDescription>

        <ServiceCardsContainer>
          <ServiceCard>
            <ServiceIcon>
              <Truck size={40} strokeWidth={1.5} />
            </ServiceIcon>
            <ServiceTitle lang={i18n.language}>
              {t("services.roadConstruction.title")}
            </ServiceTitle>
            <ServiceText>
              {t("services.roadConstruction.description")}
            </ServiceText>
            <ExpandedDescription>
              {t("services.roadConstruction.additionalInfo")}
            </ExpandedDescription>
            {/* <FeatureList>
              {serviceDetails.roadConstruction.features.map(
                (feature, index) => (
                  <FeatureItem key={index}>
                    <Check size={16} strokeWidth={2} />
                    <span>{feature}</span>
                  </FeatureItem>
                )
              )}
            </FeatureList> */}
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon>
              <Bolt size={40} strokeWidth={1.5} />
            </ServiceIcon>
            <ServiceTitle lang={i18n.language}>
              {t("services.asphaltPaving.title")}
            </ServiceTitle>
            <ServiceText>{t("services.asphaltPaving.description")}</ServiceText>
            <ExpandedDescription>
              {t("services.asphaltPaving.additionalInfo")}
            </ExpandedDescription>
            {/* <FeatureList>
              {serviceDetails.asphaltPaving.features.map((feature, index) => (
                <FeatureItem key={index}>
                  <Check size={16} strokeWidth={2} />
                  <span>{feature}</span>
                </FeatureItem>
              ))}
            </FeatureList> */}
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon>
              <Cog size={40} strokeWidth={1.5} />
            </ServiceIcon>
            <ServiceTitle lang={i18n.language}>
              {t("services.roadMaintenance.title")}
            </ServiceTitle>
            <ServiceText>
              {t("services.roadMaintenance.description")}
            </ServiceText>
            <ExpandedDescription>
              {t("services.roadMaintenance.additionalInfo")}
            </ExpandedDescription>
            {/* <FeatureList>
              {serviceDetails.roadMaintenance.features.map((feature, index) => (
                <FeatureItem key={index}>
                  <Check size={16} strokeWidth={2} />
                  <span>{feature}</span>
                </FeatureItem>
              ))}
            </FeatureList> */}
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon>
              <Construction size={40} strokeWidth={1.5} />
            </ServiceIcon>
            <ServiceTitle lang={i18n.language}>
              {t("services.concreteCurbing.title")}
            </ServiceTitle>
            <ServiceText>
              {t("services.concreteCurbing.description")}
            </ServiceText>
            <ExpandedDescription>
              {t("services.concreteCurbing.additionalInfo")}
            </ExpandedDescription>
            {/* <FeatureList>
              {serviceDetails.concreteCurbing.features.map((feature, index) => (
                <FeatureItem key={index}>
                  <Check size={16} strokeWidth={2} />
                  <span>{feature}</span>
                </FeatureItem>
              ))}
            </FeatureList> */}
          </ServiceCard>
        </ServiceCardsContainer>
      </ServicesContainer>
    </ServicesSection>
  );
};

export default Services;
