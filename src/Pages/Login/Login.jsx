import { useTranslation } from "react-i18next";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toyBg from "../../assets/images/bg_toy.svg";
import bgImage from "../../assets/images/bg_Image.svg";
import mobileBgImage from "../../assets/images/mobile_bg_Image.svg";
import couple from "../../assets/images/couple.svg";
import mobile_couple from "../../assets/images/mobile_couple.svg";
import googleIcon from "../../assets/images/google.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "./confirmModal";

const Login = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

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

  return (
    <div
      className="min-h-[calc(100vh-64px)] relative bg-no-repeat bg-cover lg:py-0 py-9 top-[64px]"
      style={{
        backgroundImage: `url(${mobileBgImage})`,
      }}
    >
      <div className="hidden lg:block absolute inset-0 bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${bgImage})` }} />
      <div className="absolute h-screen z-10 flex flex-col items-center justify-center bottom-0 w-full  text-white">
        <div className="absolute w-full xl:flex hidden bottom-0 justify-center">
          <img src={couple} alt={t("alt_couple")} className="2xl:w-auto lg:w-[700px]" />
          <div className="absolute">
            <img
              src={toyBg}
              alt={t("alt_house")}
              className="relative bottom-[150px] right-[10px]"
            />
          </div>
        </div>
        <div className="xl:hidden flex absolute lg:top-[204px] top-[84px]">
          <img src={mobile_couple} alt={t("alt_couple")} />
        </div>
      </div>

      <div className="lg:h-[calc(100vh-64px)] flex">
        <div className="w-full max-w-[1536px] mx-auto xl:flex relative justify-between items-center pt-[20px]">
          <div className="w-full 2xl:max-w-lg xl:max-w-xl flex items-center justify-center 2xl:px-0 lg:px-5 px-8">
            <div className="xl:mb-0 mb-44">
              <p className="text-white font-bold xl:text-[45px] text-[40px] xl:leading-[100%] leading-[50px] xl:px-0 lg:px-[30px]">
                {t("hero_title")}
              </p>
              <p className="text-white font-medium xl:text-[23px] text-[17px] xl:leading-[34px] leading-[100%] xl:px-0 lg:px-[30px]">
                {t("hero_subtitle")}
              </p>
            </div>
          </div>

          <div className="w-full xl:max-w-xl 2xl:px-0 lg:px-5 px-8">
            <div className="bg-[#FAFAFA] py-9 px-6 rounded-2xl z-[99] relative">
              <div className="text-center mb-[30px] w-full">
                <h1 className="lg:text-[45px] text-[30px] font-bold text-[#00A481] mb-[30px] leading-[100%]">
                  {t("login_title")}
                </h1>
                <p className="text-[#000000] lg:text-[23px] text-xl lg:font-normal font-medium lg:leading-[34px] leading-[100%] tracking-normal lg:w-[345px] w-full mx-auto ">
                  {t("login_subtitle")}
                </p>
              </div>
              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={() => setShowModal(true)}
                  className="w-auto flex items-center gap-3 bg-white border-[1px] border-solid !border-[#00A481] shadow-[0px_5px_5px_0px_#00000017] rounded-full text-[#00A481] py-2 lg:px-9 px-4 focus:outline-nonetransition-colors disabled:opacity-50"
                >
                  <img src={googleIcon} alt="Google icon" />
                  {t("login_google")}
                </button>
              </div>
              <div className="justify-center flex w-full mb-6 lg:mt-[50px] mt-8 items-center">
                <hr className="w-full text-[#00A481] mx-2" />
                <p className="text-[#000000] w-full min-w-fit lg:text-xl text-[17px] font-normal py-1 px-2 mb-0">
                  {t("login_or")}
                </p>
                <hr className="w-full text-[#00A481] mx-2" />
              </div>
              <Formik
                initialValues={{ email: "", phone: "" }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ touched, errors, isValid, dirty }) => (
                  <Form className="space-y-6">
                    <div>
                      <Field
                        type="email"
                        name="email"
                        className={`w-full px-9 py-[12px] border border-[#D6D6D6] text-xl rounded-[5px] focus:outline-none font-semibold ${touched.email && errors.email
                          ? "border-red-500"
                          : "border-gray-300"
                          }`}
                        placeholder={t("placeholder_email")}
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div>
                      <Field
                        type="number"
                        name="phone"
                        className={`w-full px-9 py-[12px] border border-[#D6D6D6] text-xl rounded-[5px] focus:outline-none font-semibold ${touched.phone && errors.phone
                          ? "border-red-500"
                          : "border-gray-300"
                          }`}
                        placeholder={t("placeholder_phone")}
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div className="flex justify-center">
                      <button
                        type="submit"
                        disabled={!(isValid && dirty)}
                        className={`lg:w-auto w-full text-white py-3 lg:px-[72px] rounded-full transition-colors disabled:opacity-50
                          ${isValid && dirty
                            ? "shadow-[0px_5px_5px_0px_#00000017] bg-[linear-gradient(90deg,#00A6A4_0%,#55CD85_100%)]"
                            : "bg-[#C5C5C5]"
                          }`}
                      >
                        {t("login_cta")}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            <ConfirmModal show={showModal} handleClose={() => setShowModal(false)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
