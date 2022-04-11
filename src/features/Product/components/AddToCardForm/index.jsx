import React from "react";
import PropTypes from "prop-types";
import Button from "@restart/ui/esm/Button";
import QuantityField from "../../../../form-control/QuantityField/QuantityField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import "./style.scss";

function AddToCardForm({onSubmit}) {
  const schema = yup.object().shape({
    quantity: yup
      .number()
      .required("Please enter a quantity")
      .min(1, "Please enter at least 1")
      .nullable(),
  });

  const handleOnSubmit = (values) => {
    if(!onSubmit) return
    onSubmit(values);
  };

  const {
    handleSubmit,
    control,
    setValue,
    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: {
      quantity: 1,
    },
    resolver: yupResolver(schema),
  });
  return (
    <div className="form-card">
      <div className="form-card__wrapper">
        <form
          onSubmit={handleSubmit(handleOnSubmit)}
          className="form-card__form"
        >
          <div className="form-card__quantity">
            <QuantityField
              errors={errors}
              control={control}
              name="quantity"
              setValue={setValue}
            />
          </div>
          <div className="form-card__button-wrapper">
            <Button type="submit">Thêm vào giỏ hàng</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

AddToCardForm.propTypes = {};

export default AddToCardForm;
