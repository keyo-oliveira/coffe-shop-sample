import { Minus, Plus } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { changeQuantity } from "../../../../store/quantityStepperSlice";
import { RootState } from "../../../../store";

type quantityStepperData = {
  quantity: number;
};

interface QuantityStepperProps {
  productId: number;
  style?: string;
}

export const QuantityStepper = ({ productId, style }: QuantityStepperProps) => {
  const { handleSubmit, register, watch } = useForm<quantityStepperData>();
  const dispatch = useDispatch();
  const quantitySate = useSelector((state: RootState) => state.quantity);

  const productFromState = quantitySate.find(
    (product) => product.id === productId
  );
  const quantityFromState = productFromState?.quantity;

  const quantity = watch("quantity", quantityFromState ?? 1);

  const handleDispatch = () => {
    dispatch(
      changeQuantity({
        id: productId,
        quantity,
      })
    );
  };

  const onSubmit = () => {
    handleDispatch();
  };

  const incrementQuantity = () => {
    dispatch(
      changeQuantity({
        id: productId,
        quantity: quantity + 1,
      })
    );
  };

  const decrementQuantity = () => {
    dispatch(
      changeQuantity({
        id: productId,
        quantity: quantity - 1,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`${style}`}>
      <div className="quantity-stepper__container flex items-center justify-center ">
        <button
          className="quantity-stepper__minus-button bg-base-button pl-2 h-9 rounded-l-lg"
          onClick={decrementQuantity}
        >
          <Minus color="#8047f8" size={14} fontWeight={700} />
        </button>
        <input
          disabled
          value={quantity}
          className="quantity-stepper__input bg-base-button w-[40px] h-9 appearance-none p-3"
          type="number"
          {...register("quantity", {
            required: "Quantity is required",
            min: {
              value: 1,
              message: "Coloque no mínimo um para adicionar ao carrinho.",
            },
          })}
        />
        <button
          className="quantity-stepper__plus-button bg-base-button pr-2 h-9 rounded-r-lg"
          onClick={incrementQuantity}
        >
          <Plus color="#8047f8" size={14} fontWeight={700} />
        </button>
      </div>
    </form>
  );
};
