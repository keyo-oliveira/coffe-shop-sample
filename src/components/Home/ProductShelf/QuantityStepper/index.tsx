import { Minus, Plus } from "@phosphor-icons/react";
import React from "react";
import { useForm } from "react-hook-form";

export const QuantityStepper = () => {
  const { handleSubmit, register, setValue, watch } = useForm();
  const quantity = watch("quantity", 1);

  const onSubmit = (data: any) => console.log(data);

  const incrementQuantity = () => {
    setValue("quantity", parseInt(quantity) + 1);
  };

  const decrementQuantity = () => {
    setValue("quantity", parseInt(quantity) - 1);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
