import Input from "../../../components/ui/Input/Input";
import Button from "../../../components/ui/Button";
import Product from "../../../components/Products/Product";
import classes from "../../../styles/pages/checkout/OrderTotalSummary.module.css";

type TOrderTotalSummary = {
  subtotal: number;
  shippingFee?: number;
};

const OrderTotalSummary = ({ subtotal, shippingFee }: TOrderTotalSummary) => {
  const total = shippingFee ? subtotal + shippingFee : subtotal;
  return (
    <>
      <div className={`container ${classes["discount-code"]}`}>
        <Input placeholder="Discount code or gift card" type="text" />
        <Button
          size="large"
          variant="gray"
          textTransform="capitalize"
          className={classes["discount-code__button"]}
        >
          Apply
        </Button>
      </div>

      <div className={`container ${classes["total-wrapper"]}`}>
        <div>
          <p className={classes["subtotal-title"]}>Subtotal</p>
          <Product.Price price={subtotal} className={classes["price"]} />
        </div>
        <div>
          <p className={classes["shipping-title"]}>Shipping</p>
          {shippingFee && shippingFee > 0 ? (
            <Product.Price
              price={shippingFee}
              className={classes["shipping"]}
            />
          ) : (
            <p className={classes["shipping"]}>Free</p>
          )}
        </div>
        <div>
          <p className={classes["total-title"]}>Total</p>
          <Product.Price price={total} className={classes["total-price"]} />
        </div>
      </div>
    </>
  );
};

export default OrderTotalSummary;