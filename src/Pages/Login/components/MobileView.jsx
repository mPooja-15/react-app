import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import mobileBgImage from "../../../assets/images/mobile_bg_Image.svg";
import mobile_couple from "../../../assets/images/mobile_couple.svg";
import googleIcon from "../../../assets/images/google.svg";
import bgImage from "../../../assets/images/bg_Image.svg";
import ConfirmModal from "../confirmModal";

const MobileView = ({ t, validationSchema, handleSubmit, showModal, setShowModal }) => {
  return (
    <div
      className="min-h-[calc(100vh-64px)] relative bg-no-repeat bg-cover lg:py-0 py-9 top-[64px]"
      style={{
        backgroundImage: `url(${mobileBgImage})`,
      }}
    >
      <div className="hidden lg:block absolute inset-0 bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${bgImage})` }} />
      <div className="xl:mb-0 2xl:px-0 lg:px-5 px-8">
        <p className="text-white font-bold xl:text-[45px] text-[40px] xl:leading-[100%] leading-[50px] xl:px-0 lg:px-[30px]">
          {t("hero_title")}
        </p>
        <p className="text-white font-medium xl:text-[23px] text-[17px] xl:leading-[34px] leading-[100%] xl:px-0 lg:px-[30px]">
          {t("hero_subtitle")}
        </p>
      </div>

      <div className="absolute h-screen z-10 flex flex-col items-center justify-center bottom-0 w-full text-white">
        <div className="xl:hidden flex absolute lg:top-[204px] top-[84px]">
          <img src={mobile_couple} alt={t("alt_couple")} />
        </div>
      </div>
      <div className="w-full flex justify-center px-8">
        <div className="bg-[#FAFAFA] py-9 px-6 rounded-2xl z-[99] relative mt-[200px] w-full max-w-md">
          <div className="text-center mb-[30px] w-full">
            <h1 className="text-[30px] font-bold text-[#00A481] mb-[30px] leading-[100%]">
              {t("login_title")}
            </h1>
            <p className="text-[#000000] text-xl font-medium leading-[100%] tracking-normal w-full mx-auto">
              {t("login_subtitle")}
            </p>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="w-auto flex items-center gap-3 bg-white border-[1px] border-solid !border-[#00A481] shadow-[0px_5px_5px_0px_#00000017] rounded-full text-[#00A481] py-2 px-4 focus:outline-none transition-colors disabled:opacity-50"
            >
              <img src={googleIcon} alt="Google icon" />
              {t("login_google")}
            </button>
          </div>
          <div className="justify-center flex w-full mb-6 mt-8 items-center">
            <hr className="w-full text-[#00A481] mx-2" />
            <p className="text-[#000000] w-full min-w-fit text-[17px] font-normal py-1 px-2 mb-0">
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
                    className={`w-full px-4 py-3 border border-[#D6D6D6] text-base rounded-[5px] focus:outline-none font-semibold ${touched.email && errors.email
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
                    type="tel"
                    name="phone"
                    className={`w-full px-4 py-3 border border-[#D6D6D6] text-base rounded-[5px] focus:outline-none font-semibold ${touched.phone && errors.phone
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
                <button
                  type="submit"
                  disabled={!isValid || !dirty}
                  className="w-full bg-[#00A481] text-white py-3 px-4 rounded-[5px] font-semibold text-base disabled:opacity-50"
                >
                  {t("login_button")}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      <ConfirmModal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export { MobileView };
