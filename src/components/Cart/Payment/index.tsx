import { ConfirmButton } from "../Items/ConfirmButton"
import { PaymentSelector } from "./PaymentSelector"
import { PaymentTitle } from "./PaymentTitle"

export const Payment = () => {
    return (
        <div className="payment__container bg-base-card p-10 mt-2 max-w-[672px] rounded-md">
            <PaymentTitle />
            <PaymentSelector />
        </div>
    )
}
