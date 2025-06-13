import { useState } from "react";
import { Origami, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  HeaderContainer,
  Logo,
  Nav,
  NavItem,
  LanguageDropdown,
  LanguageButton,
  DropdownContent,
  MobileMenuButton,
  MobileNav,
  MobileNavItem,
  MobileNavOverlay,
  MobileLanguageOptions,
} from "./Header.styles";
import { HeaderWrapper } from "./Header.styles";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleLanguageChange = (event, lang) => {
    // Prevent default behavior which causes page to scroll to top
    if (event) {
      event.preventDefault();
    }

    // Remember current scroll position
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;

    i18n.changeLanguage(lang.toLowerCase());
    setShowLanguageOptions(false);
    setMobileMenuOpen(false);

    // Restore scroll position after a small delay to ensure rendering is complete
    setTimeout(() => {
      window.scrollTo(0, scrollPosition);
    }, 100);
  };
  const toggleMobileMenu = () => {
    const newMenuState = !mobileMenuOpen;
    setMobileMenuOpen(newMenuState);
    // Close language dropdown when opening/closing mobile menu
    if (showLanguageOptions) setShowLanguageOptions(false);

    // Prevent body scrolling when menu is open
    document.body.style.overflow = newMenuState ? "hidden" : "";
  };

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo>
          <Origami size={40} strokeWidth={1.5} color="#ff6600" />
          <p>Asfalting ltd</p>
        </Logo>

        {/* Desktop Navigation */}
        <Nav>
          <NavItem href="#about">{t("header.about")}</NavItem>
          <NavItem href="#services">{t("header.services")}</NavItem>
          <NavItem href="#projects">{t("header.projects")}</NavItem>
          <NavItem href="#contact">{t("header.contact")}</NavItem>
        </Nav>

        {/* Desktop Language Selector */}
        <div>
          <LanguageDropdown>
            <LanguageButton
              onClick={() => setShowLanguageOptions(!showLanguageOptions)}
            >
              {i18n.language === "bg" ? "BG" : "EN"}
            </LanguageButton>
            {showLanguageOptions && (
              <DropdownContent>
                {" "}
                <NavItem
                  href="#"
                  onClick={(e) => handleLanguageChange(e, "en")}
                >
                  EN
                </NavItem>
                <NavItem
                  href="#"
                  onClick={(e) => handleLanguageChange(e, "bg")}
                >
                  BG
                </NavItem>
              </DropdownContent>
            )}
          </LanguageDropdown>
        </div>

        {/* Mobile Menu Button */}
        <MobileMenuButton onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </MobileMenuButton>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <MobileNavOverlay>
            <MobileNav>
              <MobileNavItem
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("header.about")}
              </MobileNavItem>
              <MobileNavItem
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("header.projects")}
              </MobileNavItem>
              <MobileNavItem
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("header.contact")}
              </MobileNavItem>{" "}
              <MobileLanguageOptions>
                <div onClick={(e) => handleLanguageChange(e, "en")}>EN</div>
                <div onClick={(e) => handleLanguageChange(e, "bg")}>BG</div>
              </MobileLanguageOptions>
            </MobileNav>
          </MobileNavOverlay>
        )}
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
