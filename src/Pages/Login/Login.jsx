import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useLoginForm } from "../../Services/LoginServices";
import ConfirmModal from "./confirmModal";
import { Loginen } from "./Loginen";
import { LoginMobile } from "./LoginMobile";

const Login = () => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const { validationSchema, handleSubmit } = useLoginForm();

  const commonProps = {
    t,
    validationSchema,
    handleSubmit,
    showModal,
    setShowModal,
  };

  return (
    <>
      <div className="hidden lg:block">
        <Loginen {...commonProps} />
      </div>
      <div className="lg:hidden">
        <LoginMobile {...commonProps} />
      </div>
      <ConfirmModal show={showModal} handleClose={() => setShowModal(false)} />
    </>
  );
};

export default Login;
