import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  CTASection,
  CTAContainer,
  CTATitle,
  CTAText,
  FormContainer,
  FormGroup,
  Label,
  Input,
  TextArea,
  ErrorText,
  SubmitButton,
  PhoneInputWrapper,
  SuccessMessage,
  ErrorMessageContainer,
} from "./CTA.styles";

const CTA = () => {
  const { t, i18n } = useTranslation();
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const ContactSchema = Yup.object().shape({
    name: Yup.string().required(t("contactForm.required")),
    email: Yup.string()
      .email(t("contactForm.invalidEmail"))
      .required(t("contactForm.required")),
    phone: Yup.string().required(t("contactForm.required")),
    message: Yup.string(),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    // This function would be replaced with your actual form submission logic
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form values:", values);

      // Reset form and show success message
      resetForm();
      setSubmissionStatus("success");
      setTimeout(() => {
        setSubmissionStatus(null);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <CTASection id="contact">
      <CTAContainer>
        <CTATitle lang={i18n.language}>{t("contactForm.title")}</CTATitle>
        <CTAText>{t("contactForm.subtitle")}</CTAText>

        <FormContainer>
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              message: "",
            }}
            validationSchema={ContactSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, errors, touched, setFieldValue, values }) => (
              <Form>
                <FormGroup>
                  <Label htmlFor="name">{t("contactForm.name")}</Label>
                  <Field
                    as={Input}
                    type="text"
                    id="name"
                    name="name"
                    placeholder={t("contactForm.namePlaceholder")}
                    isError={errors.name && touched.name}
                  />
                  <ErrorMessage name="name" component={ErrorText} />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="email">{t("contactForm.email")}</Label>
                  <Field
                    as={Input}
                    type="email"
                    id="email"
                    name="email"
                    placeholder={t("contactForm.emailPlaceholder")}
                    isError={errors.email && touched.email}
                  />
                  <ErrorMessage name="email" component={ErrorText} />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="phone">{t("contactForm.phone")}</Label>
                  <PhoneInputWrapper>
                    <PhoneInput
                      country={"bg"}
                      value={values.phone}
                      onChange={(phone) => setFieldValue("phone", phone)}
                      inputProps={{
                        name: "phone",
                        id: "phone",
                        required: true,
                      }}
                      isValid={() => {
                        return true; // Use Yup for validation
                      }}
                    />
                  </PhoneInputWrapper>
                  <ErrorMessage name="phone" component={ErrorText} />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="message">{t("contactForm.message")}</Label>
                  <Field
                    as={TextArea}
                    id="message"
                    name="message"
                    placeholder={t("contactForm.messagePlaceholder")}
                    rows={4}
                    isError={errors.message && touched.message}
                  />
                  <ErrorMessage name="message" component={ErrorText} />
                </FormGroup>

                {submissionStatus === "success" && (
                  <SuccessMessage>{t("contactForm.success")}</SuccessMessage>
                )}

                {submissionStatus === "error" && (
                  <ErrorMessageContainer>
                    {t("contactForm.error")}
                  </ErrorMessageContainer>
                )}

                <SubmitButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "..." : t("contactForm.submit")}
                </SubmitButton>
              </Form>
            )}
          </Formik>
        </FormContainer>
      </CTAContainer>
    </CTASection>
  );
};

export default CTA;
