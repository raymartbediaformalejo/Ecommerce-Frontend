import { useEffect } from "react";
import { Link, SetURLSearchParams } from "react-router-dom";

import { Price } from "../../../components/Products/Product";
import Button from "../../../components/ui/Button";
import classes from "../../../styles/pages/cart/CartOrderTotal.module.css";
import Checkbox from "../../../components/ui/Checkbox";
import { TCartProducts, TSelectedCart } from "../../../redux/cart/cart.types";
import { cartParams } from "../../../utils/productConstant";
import { CartIcon } from "../../../components/icons/CartIcon";

type TCartOrderTotalProps = {
  cartItems: TCartProducts[];
  isCartEmpty: boolean;
  isSelectedAllCartItem: boolean;
  totalItemSelected: number;
  setSearchParams: SetURLSearchParams;
  selectedCartItem: string[];
  subtotal: number;
  totalDiscount: number;
  decodedData: TSelectedCart[];
  onSelectAll: () => void;
};

const CartOrderTotal = ({
  cartItems,
  isCartEmpty = false,
  isSelectedAllCartItem = false,
  totalItemSelected,
  subtotal,
  totalDiscount,
  setSearchParams,
  decodedData,
  onSelectAll,
}: TCartOrderTotalProps) => {
  useEffect(() => {
    setSearchParams((prev) => {
      if (subtotal !== 0 && totalDiscount !== 0) {
        prev.set(
          cartParams.subtotal,
          encodeURIComponent(subtotal.toFixed(2).toString())
        );
        prev.set(
          cartParams.totalDiscount,
          encodeURIComponent(totalDiscount.toFixed(2).toString())
        );
      } else {
        prev.delete(cartParams.subtotal);
        prev.delete(cartParams.totalDiscount);
      }

      return prev;
    });
  }, [subtotal, totalDiscount, setSearchParams]);

  return (
    <div
      className={`${classes["cart-bottom"]} ${
        cartItems.length === 0 ? classes["empty-cart"] : ""
      } `}
    >
      <div className={`container ${classes["cart-bottom-inner-wrapper"]}`}>
        {cartItems.length > 0 && (
          <div className={classes["checkbox-select-all"]}>
            <Checkbox
              label="All"
              size="small"
              onChange={onSelectAll}
              isChecked={isSelectedAllCartItem}
            />
          </div>
        )}
        {isCartEmpty && (
          <div className={classes["price-summary"]}>
            <div className={classes["subtotal"]}>
              <p className={classes["subtotal__title"]}>subtotal:</p>
              <Price price={subtotal} size="medium" isEmphasize={true} />
            </div>
            <div className={classes["saved"]}>
              <p className={classes["saved__title"]}>saved:</p>
              <Price price={totalDiscount} size="small" />
            </div>
          </div>
        )}
        <div className={classes["cart-buttons-wrapper"]}>
          {isCartEmpty ? (
            <Link
              to={`/checkout?${new URLSearchParams({
                product: encodeURIComponent(JSON.stringify(decodedData)),
                subtotal: encodeURIComponent(subtotal),
                totalDiscount: encodeURIComponent(totalDiscount),
              })}`}
            >
              <Button
                size="medium"
                textTransform="capitalize"
                disabled={!totalItemSelected}
              >
                Check out
                <span>{`(${totalItemSelected})`}</span>
              </Button>
            </Link>
          ) : (
            <Link to="/products">
              <Button size="large">
                <CartIcon color="dark" />
                Continue shopping
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartOrderTotal;
