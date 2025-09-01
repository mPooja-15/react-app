import React from 'react';
import checkCircle from '../../assets/images/check_circle.svg';
import enterpriseIcon from '../../assets/images/enterprise_icon.svg';

export const SubscriptionPurchaseMobile = ({ plans, t, handleOpenModal }) => (
    <>
        <div className="gap-6 flex overflow-x-scroll">
            {plans.map((plan, idx) => (
                <div
                    key={idx}
                    className="bg-white border border-[#D6D6D6] rounded-[14px] pt-[14px] pb-[26px] px-[18px] shadow-[0.84px_4.18px_4.18px_0px_#38383817] flex flex-col justify-between min-w-60"
                >
                    <p className="text-[25px] font-bold text-[#00A481] leading-[100%] mb-[10px] uppercase">
                        {plan.title}
                    </p>

                    <hr className="text-[#00A481] bg-[#00A481] w-14 h-[2px] mt-0 mb-[18px]" />

                    {plan.price ? (
                        <p className="text-[38px] font-bold mb-4 leading-[100%] text-[#000000]">
                            ₪{plan.price}{' '}
                            <span className="text-[21px] font-semibold leading-[100%] text-[#000000]">
                                / {t('subscription.per_month')}
                            </span>
                        </p>
                    ) : (
                        <div className="flex-1 flex flex-col text-[21px] font-semibold text-[#000000]">
                            <p className="mb-6">{plan.features[0]}</p>
                            <div>
                                <img src={enterpriseIcon} alt="enterprise icon" className="w-[84px] h-auto" />
                            </div>
                        </div>
                    )}

                    {plan.price && (
                        <ul className="space-y-1.5 mb-4 pl-0">
                            {plan.features.map((f, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm font-semibold leading-[25.06px]">
                                    <span>
                                        <img src={checkCircle} alt="check circle" className="w-[14px] h-[14px]" />
                                    </span>{' '}
                                    {f}
                                </li>
                            ))}
                        </ul>
                    )}
                    <button
                        className="w-full max-w-[174px] text-sm py-2 rounded-full text-white font-medium bg-gradient-to-r from-[#00A6A4] to-[#55CD85] hover:opacity-90"
                        onClick={() => {
                            if (!plan.price) {
                                handleOpenModal();
                            }
                        }}
                    >
                        {plan.button}
                    </button>
                </div>
            ))}

        </div>
        <div className="mt-[20px]">
            {t('subscription.terms', { returnObjects: true }).map((term, index) => (
                <p key={index} className="text-xs font-normal leading-[15px] mb-0">
                    {term}
                </p>
            ))}
        </div>
    </>
);
