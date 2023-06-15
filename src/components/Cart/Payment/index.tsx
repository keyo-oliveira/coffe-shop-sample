import { PaymentSelector } from "./PaymentSelector"
import { PaymentTitle } from "./PaymentTitle"

export const Payment = () => {
    return (
        <div className="payment__container">
            <PaymentTitle />
            <PaymentSelector />
        </div>
    )
}