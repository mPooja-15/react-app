import { useSubscriptionServices } from "../../Services/SubscriptionServices";
import { useTranslation } from "react-i18next";
import ContactSalesModal from "./ContactSalesModal";
import { DesktopView } from "./components/DesktopView";
import { MobileView } from "./components/MobileView";

const SubscriptionPurchase = () => {
    const { t } = useTranslation();
    const { 
        getSubscriptionData, 
        isModalOpen, 
        handleOpenModal, 
        handleCloseModal 
    } = useSubscriptionServices();
    const plans = getSubscriptionData(t);

    return (
        <>
            <div className="px-4 bg-white rounded-3 shadow-lg lg:py-0 py-4 2xl:mb-0 xl:mb-16 lg:mb-32 md:!mb-28">
                <p className="text-center text-[25px] font-semibold leading-[100%] text-[#00A481] border-bottom d-none d-md-block pb-[14px] mb-[38px]">
                    {t("subscription.title")}
                </p>
                <div className="custom-scrollbar overflow-y-auto overflow-x-hidden lg:px-3 px-0 md:scroll-height">
                    <p className="w-full max-w-[615px] mx-auto lg:text-center md:text-[23px] text-[17px] font-normal leading-[100%] mb-0">
                        {t("subscription.greeting")}
                        <br />
                        {t("subscription.description")}{" "}
                        <span className="font-semibold">STARTER / PRO / BUSINESS</span>{" "}
                        {t("subscription.description_suffix")}
                    </p>
                    <p className="text-center text-xl font-bold leading-[100%] text-[#00A481] lg:mt-[72px] mt-[30px] lg:mb-[34px] mb-[10px]">
                        {t("subscription.choose_plan")}
                    </p>
                    <DesktopView plans={plans} t={t} handleOpenModal={handleOpenModal} />
                </div>
            </div>
            <div className="mb-[7rem] px-0 md:hidden mt-4">
                <MobileView plans={plans} t={t} handleOpenModal={handleOpenModal} />
            </div>

            <ContactSalesModal show={isModalOpen} handleClose={handleCloseModal} />
        </>
    );
};

export default SubscriptionPurchase;
