import { useState } from "react";
import { useTranslation } from "react-i18next";
import bgImage from "../../assets/images/bg_Image.svg";
import mobileBgImage from "../../assets/images/mobile_bg_Image.svg";
import darkToy from "../../assets/images/darkToy.svg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Register = () => {
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

  return (
    <div
      className="min-h-[calc(100vh-64px)] flex items-center justify-center relative bg-no-repeat bg-cover lg:py-4 py-9 lg:px-0 px-[32px] top-[64px]"
      style={{
        backgroundImage: `url(${mobileBgImage})`,
      }}
    >
      <div className="hidden lg:block inset-0 bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${bgImage})` }} />
      <div className="absolute left-60 bottom-16 z-10">
        <img src={darkToy} alt={t("alt_house")} />
      </div>
      <div className="absolute right-60 top-16">
        <img src={darkToy} alt={t("alt_house")} />
      </div>
      <div className="w-full max-w-[1194px] bg-[#FAFAFA] rounded-xl shadow-2xl overflow-hidden lg:py-[37px] z-10">
        <div className="lg:flex hidden justify-center mb-[30px]">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <span
              key={index}
              className={`h-3 w-3 mx-1 rounded-full cursor-pointer transition-all ${step === index + 1 ? "bg-[#00A481]" : "bg-gray-300"
                }`}
              onClick={() => setStep(index + 1)}
            />
          ))}
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validateOnMount
        >
          {({ isValid }) => (
            <Form>
              {/* Step Content */}
              <div className="w-full max-w-[698px] mx-auto lg:p-0 p-4">
                {step === 1 && (
                  <>
                    <h2 className="text-[30px] font-semibold text-center text-[#00A481]">
                      {t("register_title")}
                    </h2>
                    <p className="lg:text-[23px] text-xl font-medium text-[#000000] text-center leading-[34px] mt-1">
                      {t("register_subtitle")}
                    </p>
                    <p className="lg:text-xl text-[17px] text-[#000000] lg:font-normal font-medium lg:leading-[34px] leading-[100%] text-center mt-[30px]">
                      {t("register_intro")}
                    </p>
                    <div className="space-y-[24px] mt-6">
                      <div className="relative">
                        <label className="text-[15px] font-semibold leading-[100%] text-[#000]">{t("label_fullname")}</label>
                        <Field
                          type="text"
                          name="fullname"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-[3px] text-[17px]"
                          placeholder={t("placeholder_fullname")}
                        />
                        <ErrorMessage
                          name="fullname"
                          component="div"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>

                      <div className="grid lg:grid-cols-2 grid-cols-1 gap-[16px]">
                        <div className="relative">
                          <label className="text-[15px] font-semibold leading-[100%] text-[#000]">{t("label_license")}</label>
                          <Field
                            type="text"
                            name="license"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-[3px] text-[17px]"
                            placeholder={t("placeholder_numbers")}
                          />
                          <ErrorMessage
                            name="license"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>

                        <div className="relative">
                          <label className="text-[15px] font-semibold leading-[100%] text-[#000]">{t("label_phone")}</label>
                          <Field
                            type="text"
                            name="phone"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-[3px] text-[17px]"
                            placeholder={t("placeholder_numbers")}
                          />
                          <ErrorMessage
                            name="phone"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>
                      </div>

                      <div className="grid lg:grid-cols-2 grid-cols-1 gap-[16px]">
                        <div className="relative">
                          <label className="text-[15px] font-semibold leading-[100%] text-[#000]">{t("label_password")}</label>
                          <Field
                            type="password"
                            name="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-[3px] text-[17px]"
                            placeholder={t("placeholder_password")}
                          />
                          <ErrorMessage
                            name="password"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>

                        <div className="relative">
                          <label className="text-[15px] font-semibold leading-[100%] text-[#000]">{t("label_confirm_password")}</label>
                          <Field
                            type="password"
                            name="confirmPassword"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-[3px] text-[17px]"
                            placeholder={t("placeholder_confirm_password")}
                          />
                          <ErrorMessage
                            name="confirmPassword"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 space-y-4">
                      <div className="flex items-start gap-1.5">
                        <div className="flex items-center h-5">
                          <Field
                            id="terms"
                            type="checkbox"
                            name="terms"
                            className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="terms" className="text-gray-600">
                            {t("label_terms")}
                          </label>
                          <ErrorMessage
                            name="terms"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>
                      </div>

                      <div className="flex items-start gap-1.5">
                        <div className="flex items-center h-5">
                          <Field
                            id="newsletter"
                            type="checkbox"
                            name="newsletter"
                            className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="newsletter"
                            className="text-gray-600"
                          >
                            {t("label_newsletter")}
                          </label>
                          <ErrorMessage
                            name="terms-or-newsletter"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {step === 2 && <div>{t("step2_placeholder")}</div>}
                {step === 3 && <div>{t("step3_placeholder")}</div>}
              </div>

              {/* Buttons */}
              <div className="w-full max-w-[698px] mx-auto mt-[70px] lg:mb-0 mb-[24px] flex items-center justify-center gap-2 lg:px-0 px-4">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="lg:w-auto w-56 flex items-center justify-center gap-3 bg-white border-[1px] border-solid !border-[#00A481] shadow-[0px_5px_5px_0px_#00000017] rounded-full text-[#00A481] py-2 px-9"
                  >
                    {t("btn_back")}
                  </button>
                )}
                {step < totalSteps && (
                  <button
                    type="button"
                    onClick={() => nextStep(isValid)}
                    disabled={!isValid}
                    className="lg:w-auto w-56 text-white py-2 px-9 rounded-full transition-colors disabled:opacity-50 shadow-[0px_5px_5px_0px_#00000017] bg-[linear-gradient(90deg,#00A6A4_0%,#55CD85_100%)]"
                  >
                    {t("btn_next")}
                  </button>
                )}
                {step === totalSteps && (
                  <button
                    type="submit"
                    className="w-auto text-white py-2 px-9 rounded-full transition-colors disabled:opacity-50 shadow-[0px_5px_5px_0px_#00000017] bg-[linear-gradient(90deg,#00A6A4_0%,#55CD85_100%)]"
                  >
                    {t("btn_finish")}
                  </button>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
