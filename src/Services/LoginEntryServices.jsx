import { useState } from "react";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";

export const useLoginEntry = () => {
  const { t } = useTranslation();
  const [isLoginTab, setIsLoginTab] = useState(true);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(t("invalid_email"))
      .required(t("required")),
    password: Yup.string().required(t("required")),
  });

  const smsValidationSchema = Yup.object().shape({
    code: Yup.string().required(t("required")),
  });

  const handleLoginSubmit = (values) => {
    console.log("Login Values:", values);
  };

  const handleSmsSubmit = (values) => {
    console.log("SMS Login Values:", values);
  };

  return {
    isLoginTab,
    setIsLoginTab,
    validationSchema,
    smsValidationSchema,
    handleLoginSubmit,
    handleSmsSubmit,
  };
};

export default useLoginEntry;
