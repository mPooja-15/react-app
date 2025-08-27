import { useState } from "react";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";

export const useRegister = () => {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required(t("error_required")),
    license: Yup.string()
      .matches(/^\d+$/, t("error_numbers_only"))
      .required(t("error_required")),
    phone: Yup.string()
      .matches(/^\d+$/, t("error_numbers_only"))
      .min(9, t("error_phone_length"))
      .required(t("error_required")),
    password: Yup.string()
      .min(8, t("error_password_length"))
      .required(t("error_required")),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], t("error_password_match"))
      .required(t("error_required")),
    terms: Yup.boolean(),
    newsletter: Yup.boolean(),
  }).test(
    "terms-or-newsletter",
    t("error_terms_or_newsletter"),
    (values) => values.terms || values.newsletter
  );

  const initialValues = {
    fullname: "",
    license: "",
    phone: "",
    password: "",
    confirmPassword: "",
    terms: false,
    newsletter: true,
  };

  const nextStep = (isValid) => {
    if (step < totalSteps && isValid) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (values) => {
    console.log("Form submitted:", values);
  };

  return {
    step,
    totalSteps,
    initialValues,
    validationSchema,
    nextStep,
    prevStep,
    handleSubmit,
    setStep,
  };
};

export default useRegister;
