import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import successIcon from "../../assets/images/success_icon.svg";

const ContactSalesModal = ({ show, handleClose }) => {
    const { t } = useTranslation();

    return (
        <Modal
            show={show}
            onHide={handleClose}
            centered
            className="modal-container"
            dialogClassName="!max-w-[581px] !w-full mx-auto p-[24px]"
        >
            <Modal.Header className="border-0 p-3 position-relative">
                <button
                    type="button"
                    className="btn-close position-absolute close-btn text-[#000] mt-2"
                    onClick={handleClose}
                ></button>
            </Modal.Header>

            <Modal.Body className="p-6 text-center">
                <div className="flex justify-center items-center mb-6">
                    <img src={successIcon} alt="success icon" className="lg:w-[84px] w-[41px] lg:h-[84px] h-[41px]" />
                </div>

                <h2 className="text-[#00A481] text-[25px] font-semibold leading-[100%]">
                    {t("subscription.payment_received")}
                </h2>
                <p className="text-[#00A481] text-[25px] font-semibold leading-[100%] mt-1 mb-11">
                    {t("subscription.purchase_success")}
                </p>
            </Modal.Body>
        </Modal>
    );
};

export default ContactSalesModal;
