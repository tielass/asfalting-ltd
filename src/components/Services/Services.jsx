import { Construction, Truck, Bolt, Cog } from "lucide-react";
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
  ServiceLink,
  ViewServicesButton,
} from "./Services.styles";

const Services = () => {
  return (
    <ServicesSection id="services">
      <SectionTitle>OUR SERVICES</SectionTitle>

      <ServicesContainer>
        <ServiceDescription>
          We provide a comprehensive range of road construction and
          infrastructure services to meet all your project needs.
        </ServiceDescription>

        <ServiceCardsContainer>
          {" "}
          <ServiceCard>
            <ServiceIcon>
              <Truck size={40} strokeWidth={1.5} />
            </ServiceIcon>
            <ServiceTitle>Road Construction</ServiceTitle>
            <ServiceText>
              Complete road construction services from planning to execution for
              highways, local roads, and private developments.
            </ServiceText>
            <ServiceLink href="#">Learn More →</ServiceLink>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon>
              <Bolt size={40} strokeWidth={1.5} />
            </ServiceIcon>
            <ServiceTitle>Asphalt Paving</ServiceTitle>
            <ServiceText>
              High-quality asphalt paving services for roads, parking lots,
              driveways, and other surfaces.
            </ServiceText>
            <ServiceLink href="#">Learn More →</ServiceLink>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon>
              <Cog size={40} strokeWidth={1.5} />
            </ServiceIcon>
            <ServiceTitle>Earthworks</ServiceTitle>
            <ServiceText>
              Comprehensive earthworks services including excavation, grading,
              and site preparation.
            </ServiceText>
            <ServiceLink href="#">Learn More →</ServiceLink>
          </ServiceCard>
          {/* <ServiceCard>
            <ServiceIcon>
              <Building size={40} strokeWidth={1.5} />
            </ServiceIcon>
            <ServiceTitle>Drainage Solutions</ServiceTitle>
            <ServiceText>
              Effective drainage systems to prevent water damage and ensure
              longevity of road infrastructure.
            </ServiceText>
            <ServiceLink href="#">Learn More →</ServiceLink>
          </ServiceCard>{" "} */}
          <ServiceCard>
            <ServiceIcon>
              <Construction size={40} strokeWidth={1.5} />
            </ServiceIcon>
            <ServiceTitle>Infrastructure Development</ServiceTitle>
            <ServiceText>
              Development of critical infrastructure including bridges,
              culverts, and retaining walls.
            </ServiceText>
            <ServiceLink href="#">Learn More →</ServiceLink>
          </ServiceCard>
        </ServiceCardsContainer>

        <ViewServicesButton href="#contact">
          VIEW ALL SERVICES
        </ViewServicesButton>
      </ServicesContainer>
    </ServicesSection>
  );
};

export default Services;
