import styled from "@emotion/styled";
import { ctaBackground } from "../../assets/images";

export const CTASection = styled.section`
  padding: 5rem 2rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${ctaBackground || "gray"});
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  width: 100%;

  @media (min-width: 1600px) {
    padding: 6rem 2rem;
  }
`;

export const CTAContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  width: 100%;

  @media (min-width: 1600px) {
    max-width: 1000px;
  }
`;

export const CTATitle = styled.h2`
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  margin-bottom: 1.5rem;

  &:lang(bg) {
    font-size: calc(3rem * 0.75); /* Scale down Bulgarian text */

    @media (min-width: 1600px) {
      font-size: calc(3.5rem * 0.75);
    }

    @media (max-width: 768px) {
      font-size: calc(2rem * 0.75);
    }
  }
`;

export const CTAText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

// New form styles
export const FormContainer = styled.div`
  max-width: 600px;
  margin: 2rem auto 0;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 8px;
  backdrop-filter: blur(5px);
  text-align: left;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #ffffff;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid
    ${(props) => (props.isError ? "#ff3333" : "rgba(255, 255, 255, 0.3)")};
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  font-size: 1rem;
  transition: border 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ff6600;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid
    ${(props) => (props.isError ? "#ff3333" : "rgba(255, 255, 255, 0.3)")};
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  transition: border 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ff6600;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const ErrorText = styled.div`
  color: #ff3333;
  font-size: 0.85rem;
  margin-top: 0.5rem;
`;

export const SubmitButton = styled.button`
  display: block;
  width: 100%;
  padding: 1rem;
  background-color: #ff6600;
  color: white;
  text-decoration: none;
  font-weight: 600;
  border-radius: 4px;
  font-size: 1.1rem;
  margin-top: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e55c00;
  }

  &:disabled {
    background-color: #999;
    cursor: not-allowed;
  }
`;

export const PhoneInputWrapper = styled.div`
  .react-tel-input .form-control {
    width: 100%;
    padding: 0.8rem 0.8rem 0.8rem 50px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.1);
    color: #ffffff;
    font-size: 1rem;
    height: auto;
  }

  .react-tel-input .flag-dropdown {
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 4px 0 0 4px;
  }

  .react-tel-input .selected-flag:hover,
  .react-tel-input .selected-flag:focus {
    background-color: rgba(255, 255, 255, 0.2);
  }

  .react-tel-input .country-list {
    background-color: rgba(50, 50, 50, 0.95);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: #ffffff;
  }

  .react-tel-input .country-list .country:hover {
    background-color: rgba(255, 102, 0, 0.7);
  }

  .react-tel-input .country-list .country.highlight {
    background-color: #ff6600;
  }
`;

export const SuccessMessage = styled.div`
  background-color: rgba(25, 135, 84, 0.2);
  color: #4ade80;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 4px;
  text-align: center;
  font-weight: 500;
`;

export const ErrorMessageContainer = styled.div`
  background-color: rgba(220, 53, 69, 0.2);
  color: #f87171;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 4px;
  text-align: center;
  font-weight: 500;
`;
