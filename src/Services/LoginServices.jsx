import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

export const useLoginForm = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email(t("invalidEmail")).required(t("emailRequired")),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, t("invalidPhone"))
      .required(t("phoneRequired")),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Login attempt with:", values);
    setTimeout(() => {
      setSubmitting(false);
      navigate(`/${i18n.language}/register`);
    }, 500);
  };

  return {
    validationSchema,
    handleSubmit,
  };
};

export default useLoginForm;
