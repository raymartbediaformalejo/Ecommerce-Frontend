import React from "react";

import classes from "../../../styles/pages/cart/QuantityButtons.module.css";
import { SetURLSearchParams } from "react-router-dom";

type TQuantityButtons = {
  value?: number;
  isDisabled?: boolean;
  searchParams?: URLSearchParams;
  setSearchParams?: SetURLSearchParams;
  onIncrement: () => void;
  onDecrement: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const QuantityButtons = ({
  value = 0,
  isDisabled = false,
  onIncrement,
  onDecrement,
  onChange,
}: TQuantityButtons) => {
  return (
    <div
      className={`${classes["add-minus-wrapper"]} ${
        (value as number) < 0 ? classes["disable"] : ""
      }`}
    >
      <button
        onClick={onDecrement}
        disabled={value === 0 || isDisabled}
        className={`${classes["button"]} ${classes["minus"]}`}
      ></button>
      <input
        disabled={isDisabled}
        onChange={onChange}
        className={classes["quantity"]}
        type="number"
        value={value}
        min="1"
        max="1000"
      />
      <button
        onClick={onIncrement}
        disabled={isDisabled}
        className={`${classes["button"]} ${classes["plus"]}`}
      ></button>
    </div>
  );
};

export default QuantityButtons;
