import { Modal } from "react-bootstrap";
import mailIcon from "../../assets/images/mailIcon.svg";
import { useTranslation } from "react-i18next";

const ConfirmModal = ({ show, handleClose }) => {
    const { t } = useTranslation();

    return (
        <Modal
            show={show}
            onHide={handleClose}
            centered
            className="modal-container"
            dialogClassName="!max-w-[653px] !w-full mx-auto lg:p-0 p-[24px]"
        >
            <Modal.Header className="border-0 p-3 position-relative mt-4">
                <button
                    type="button"
                    className="btn-close position-absolute close-btn text-[#000]"
                    onClick={handleClose}
                ></button>
            </Modal.Header>
            <Modal.Body className="lg:p-0">
                <div className="flex justify-center">
                    <img src={mailIcon} alt="mail icon" className="lg:w-auto h-auto w-32" />
                </div>
                <h3 className="text-[25px] text-[#000] font-semibold leading-[100%] text-center lg:my-[15px] my-[26px]">
                    {t("confirm_title")}
                </h3>
                <div className="w-full max-w-[463px] mx-auto flex flex-col text-center">
                    <p className="lg:text-[23px] text-[20px] lg:font-medium font-normal lg:leading-[34px] leading-[100%] text-[#000] mb-5">
                        {t("confirm_subtitle")} <span className="lg:font-semibold">shirims@gmail.com</span>
                    </p>
                    <p className="lg:text-[23px] text-[20px] lg:font-medium font-normal lg:leading-[34px] leading-[100%] text-[#000] mb-8">
                        {t("confirm_tip")}
                    </p>
                </div>
                <div className="w-full max-w-[463px] mx-auto flex flex-col text-center lg:mb-28 mb-[70px]">
                    <p className="lg:text-xl text-[15px] font-medium leading-[30px] mb-1">
                        {t("confirm_resend_prefix")}{" "}
                        <span className="underline">{t("confirm_resend_action")}</span>
                    </p>
                    <p className="lg:text-xl text-[15px] font-medium leading-[30px]">
                        {t("confirm_change_prefix")}{" "}
                        <span className="underline">{t("confirm_change_action")}</span>
                    </p>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default ConfirmModal;

