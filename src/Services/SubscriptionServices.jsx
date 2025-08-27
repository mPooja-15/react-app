import { useState } from "react";

export const useSubscriptionServices = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const getSubscriptionData = (t) => {
        return [
            {
                title: t("plans.starter"),
                price: "12",
                features: [
                    t("features.documents", { count: 10 }),
                    t("features.clients", { count: 30 }),
                    t("features.properties", { count: 50 }),
                    t("features.agents", { count: 2 }),
                    t("features.sms_documents", { count: 10 }),
                ],
                button: t("subscription.purchase"),
            },
            {
                title: t("plans.pro"),
                price: "30",
                features: [
                    t("features.documents", { count: 10 }),
                    t("features.clients", { count: 30 }),
                    t("features.properties", { count: 50 }),
                    t("features.agents", { count: 5 }),
                    t("features.sms_documents", { count: 10 }),
                ],
                button: t("subscription.purchase"),
            },
            {
                title: t("plans.business"),
                price: "50",
                features: [
                    t("features.documents", { count: 10 }),
                    t("features.clients", { count: 30 }),
                    t("features.properties", { count: 50 }),
                    t("features.agents", { count: 10 }),
                    t("features.sms_documents", { count: 10 }),
                ],
                button: t("subscription.purchase"),
            },
            {
                title: t("plans.enterprise"),
                price: null,
                features: [
                    t("features.enterprise_message"),
                ],
                button: t("subscription.contact_sales"),
            },
        ];
    };

    return {
        getSubscriptionData,
        isModalOpen,
        handleOpenModal,
        handleCloseModal
    };
};