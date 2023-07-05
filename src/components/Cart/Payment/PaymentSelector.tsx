import { CreditCard } from "@phosphor-icons/react";


export const PaymentSelector = () => {
  return (
    <div className="payment-selector__container max-w-2xl pl-10 flex gap-2">
      <button className="payment-select__card-wrapper flex items-center justify-center bg-base-button rounded-md min-w-[178px] min-h-[50px] gap-2" tabIndex={7}>
        <CreditCard color="#8047f8" size={16} />
        <span className="uppercase font-roboto text-xs text-base-text">
          Cartão de Crédito
        </span>
      </button>
    </div>
  );
};
