import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useLoginForm } from "../../Services/LoginServices";
import ConfirmModal from "./confirmModal";
import { DesktopView } from "./components/DesktopView";
import { MobileView } from "./components/MobileView";

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
        <DesktopView {...commonProps} />
      </div>
      <div className="lg:hidden">
        <MobileView {...commonProps} />
      </div>
      <ConfirmModal show={showModal} handleClose={() => setShowModal(false)} />
    </>
  );
};

export default Login;
