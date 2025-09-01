import { useTranslation } from "react-i18next";
import { useLoginEntry } from "../../Services/LoginEntryServices";
import LoginEntryen from "./LoginEntryen";
import LoginEntryMobile from "./LoginEntryMobile";

const LoginEntry = () => {
  const { t } = useTranslation();
  const {
    isLoginTab,
    setIsLoginTab,
    validationSchema,
    smsValidationSchema,
    handleLoginSubmit,
    handleSmsSubmit,
  } = useLoginEntry();

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#FCFCFC] relative">
      <div className="lg:relative absolute w-full">
        <div className="hidden lg:block">
          <LoginEntryen
            isLoginTab={isLoginTab}
            setIsLoginTab={setIsLoginTab}
            validationSchema={validationSchema}
            smsValidationSchema={smsValidationSchema}
            handleLoginSubmit={handleLoginSubmit}
            handleSmsSubmit={handleSmsSubmit}
            t={t}
          />
        </div>

        <div className="lg:hidden">
          <LoginEntryMobile
            isLoginTab={isLoginTab}
            setIsLoginTab={setIsLoginTab}
            validationSchema={validationSchema}
            smsValidationSchema={smsValidationSchema}
            handleLoginSubmit={handleLoginSubmit}
            handleSmsSubmit={handleSmsSubmit}
            t={t}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginEntry;
