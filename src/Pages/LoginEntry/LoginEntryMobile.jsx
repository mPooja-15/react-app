import { Formik, Form, Field, ErrorMessage } from "formik";
import mobileLoginBg from "../../assets/images/mobile_login_bg.svg";
import mobileBgImage from "../../assets/images/mobile_bg_Image.svg";
import googleIcon from "../../assets/images/google.svg";
import mobile_logo from '../../assets/images/mobile_logo.svg';
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LoginEntryMobile = ({
  isLoginTab,
  setIsLoginTab,
  validationSchema,
  smsValidationSchema,
  handleLoginSubmit,
  handleSmsSubmit,
  t,
}) => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  return (
    <div className="flex flex-col bg-[#FCFCFC] relative h-screen"  style={{ backgroundImage: `url(${mobileBgImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <div className="lg:hidden flex w-full justify-between items-center px-4 py-6">
        <a className="logo_main" href="/">
          <img src={mobile_logo} width="158px" height="30px" alt="mobile_logo" />
        </a>
        <button onClick={() => navigate(`/${i18n.language}/login-entry`)} className="bg-[#006650] text-white rounded-full px-4 py-1.5">{t("login")}</button>
      </div>

      <div className="absolute w-full mt-20">
        <div>
          <h1 className="text-[40px] font-bold text-[#FFFFFF] text-center leading-[50px] mb-3">
            {t("login_entry_title")}
          </h1>
          <p className="text-[#FFFFFF] font-medium text-[20px] leading-[100%] text-center">
            {t("login_entry_subtitle")}
          </p>
        </div>
        <div className="w-full flex justify-center">
          <img src={mobileLoginBg} alt="Login background" className="" />
        </div>
        <div className="py-6 px-6  bottom-[90px] bg-[#FCFCFC] h-full relative mx-[16px] rounded-[16px]">
          <div className="w-full max-w-[508px] mx-auto h-full flex items-center">
            <div className="w-full">
              <div className="flex justify-center mb-9">
                <button
                  onClick={() => setIsLoginTab(true)}
                  className={`py-2 text-xl w-full ${
                    isLoginTab
                      ? "text-[#00A481] font-bold border-b-[4px] [border-image-source:linear-gradient(90deg,#00A6A4_0%,#55CD85_100%)] [border-image-slice:1]"
                      : "text-[#848484] font-normal border-b-[4px] border-b-[#D6D6D6]"
                  }`}
                >
                  {t("login_with_password")}
                </button>
                <button
                  onClick={() => setIsLoginTab(false)}
                  className={`py-2 text-xl w-full ${
                    !isLoginTab
                      ? "text-[#00A481] font-bold border-b-[4px] [border-image-source:linear-gradient(90deg,#00A6A4_0%,#55CD85_100%)] [border-image-slice:1]"
                      : "text-[#848484] font-normal border-b-[4px] border-b-[#D6D6D6]"
                  }`}
                >
                  {t("login_with_sms")}
                </button>
              </div>

              {isLoginTab && (
                <Formik
                  initialValues={{ email: "", password: "" }}
                  validationSchema={validationSchema}
                  onSubmit={handleLoginSubmit}
                >
                  {() => (
                    <Form>
                      <div className="space-y-5">
                        <div>
                          <label className="text-[#000000] font-semibold text-[15px] mb-1">
                            {t("email")}*
                          </label>
                          <Field
                            type="email"
                            name="email"
                            className="w-full px-3 py-[9px] border border-[#D6D6D6] rounded-lg focus:outline-none"
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>
                        <div>
                          <label className="text-[#000000] font-semibold text-[15px] mb-1">
                            {t("password")}*
                          </label>
                          <Field
                            type="password"
                            name="password"
                            className="w-full px-3 py-[9px] border border-[#D6D6D6] rounded-lg focus:outline-none"
                          />
                          <ErrorMessage
                            name="password"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>
                        <div className="flex items-center justify-end">
                          <a
                            href="#"
                            className="text-[17px] font-normal text-[#000] leading-[34px]"
                          >
                            {t("forgot_password")}
                          </a>
                        </div>
                      </div>

                      <div className="w-full flex flex-col items-center justify-center gap-[20px] text-xl mt-10">
                        <button
                          type="submit"
                          className="w-[218px] text-white px-2 py-[12px] rounded-full shadow-[0px_5px_5px_0px_#00000017] bg-[linear-gradient(90deg,#00A6A4_0%,#55CD85_100%)]"
                        >
                          {t("login")}
                        </button>
                        <button
                          type="button"
                          className="w-[218px] flex items-center justify-center gap-3 bg-white border border-[#00A481] shadow-[0px_5px_5px_0px_#00000017] rounded-full text-[#00A481] p-2"
                        >
                          <img src={googleIcon} alt="Google icon" />
                          {t("quick_login")}
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              )}

              {!isLoginTab && (
                <Formik
                  initialValues={{ code: "" }}
                  validationSchema={smsValidationSchema}
                  onSubmit={handleSmsSubmit}
                >
                  {() => (
                    <Form>
                      <div className="bg-[#E9FAF4] p-3 rounded-2xl">
                        <p className="text-[#31405D] text-base text-center mb-2">
                          {t("sms_sent_message", { number: "05*-***673" })}
                        </p>
                        <p className="text-[#0D47A1] text-[14px] text-center underline">
                          {t("resend_code")}
                        </p>
                      </div>
                      <div className="mt-[20px]">
                        <label className="text-[#000000] font-semibold text-[15px] mb-1">
                          {t("enter_code")}*
                        </label>
                        <Field
                          type="text"
                          name="code"
                          className="w-full px-3 py-[9px] border border-[#D6D6D6] rounded-lg focus:outline-none"
                        />
                        <ErrorMessage
                          name="code"
                          component="div"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>
                      <div className="w-full flex justify-center mt-20">
                        <button
                          type="submit"
                          className="w-[218px] text-[23px] text-white px-2 py-[12px] rounded-full shadow-[0px_5px_5px_0px_#00000017] bg-[linear-gradient(90deg,#00A6A4_0%,#55CD85_100%)]"
                        >
                          {t("login")}
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginEntryMobile;
