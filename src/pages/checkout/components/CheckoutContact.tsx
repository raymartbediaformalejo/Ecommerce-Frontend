import { Link } from "react-router-dom";
import { Control } from "react-hook-form";

import Checkbox from "../../../components/ui/Checkbox";
import classes from "../../../styles/pages/checkout/Contact.module.css";
import { TDelivery as TCheckout } from "../../../types/TDelivery";
import CheckoutControllerInput from "../../../components/ui/Input/CheckoutControllerInput";

type TContact = {
  control: Control<TCheckout>;
  isChecked: boolean;
  errorMessage?: string;
  isLogin: boolean;
  onCheckbox: () => void;
};

const CheckoutContact = ({
  control,
  isChecked,
  isLogin,
  errorMessage,
  onCheckbox,
}: TContact) => {
  return (
    <div className={`${classes["contact"]}`}>
      <div className="container__small">
        <div className={classes["contact__header"]}>
          <h2 className={classes["contact__title"]}>Contact</h2>
          <p
            className={`${classes["login"]} ${isLogin ? classes["hide"] : ""}`}
          >
            Have and account? <Link to={"/login"}>Login</Link>
          </p>
        </div>
        <div className={classes["input"]}>
          <CheckoutControllerInput
            name="email"
            placeholder="Email"
            type="text"
            control={control}
            errorMessage={errorMessage}
          />
          <Checkbox
            label="Email me with news and offers"
            size="small"
            onChange={onCheckbox}
            isChecked={isChecked}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckoutContact;
