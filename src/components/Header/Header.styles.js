import styled from "@emotion/styled";

export const HeaderWrapper = styled.header`
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  width: 100vw;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  display: flex;
  justify-content: center;
  padding: 0 2rem;

  @media (min-width: 1600px) {
    padding: 0 5rem;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  padding: 1rem 0;
  position: relative;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  z-index: 1001;

  img {
    width: 140px;
    height: auto;
    margin-right: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;

    img {
      width: 90px;
      height: auto;
    }

    p {
      display: none;

      @media (min-width: 400px) {
        display: block;
      }
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    display: none; /* Hide desktop navigation on mobile */
  }
`;

export const NavItem = styled.a`
  margin: 0 1rem;
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #ff6600;
  }
`;

export const LanguageDropdown = styled.div`
  position: relative;
  margin-left: 2rem;

  @media (max-width: 768px) {
    display: none; /* Hide desktop language selector on mobile */
  }
`;

export const LanguageButton = styled.button`
  background: none;
  border: 1px solid #ddd;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
  font-weight: 500;
  color: #000;
`;

export const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 0.5rem 0;
  min-width: 100px;
  z-index: 1002;

  a {
    display: block;
    padding: 0.5rem 1rem;
    margin: 0;
    text-align: center;
  }
`;

/* Mobile Menu Styles */
export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #333;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileNavOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 1);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem;
`;

export const MobileNavItem = styled.a`
  margin: 1rem 0;
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 1.5rem;
  transition: color 0.3s ease;
  padding: 0.5rem 1rem;

  &:hover {
    color: #ff6600;
  }
`;

export const MobileLanguageOptions = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;

  div {
    cursor: pointer;
    padding: 0.5rem 1.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-weight: 500;
    transition: all 0.3s ease;

    &:hover {
      background-color: #ff6600;
      color: white;
      border-color: #ff6600;
    }
  }
`;
