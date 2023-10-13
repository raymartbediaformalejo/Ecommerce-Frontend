import classes from "../../../styles/pages/cart/CartHeader.module.css";
import CartModal from "../../../components/ui/Modal/CartModal";
import { SetURLSearchParams } from "react-router-dom";
import { DeleteIcon } from "../../../components/icons/DeleteIcon";

type TCartHeaderProps = {
  totalCartItems: number;
  selectedCartItem: number[];
  setSearchParams: SetURLSearchParams;
  totalItemSelected: number;
  isOpenModal: boolean;
  onToggleDeleteButton: () => void;
};

const CartHeader = ({
  totalCartItems,
  selectedCartItem,
  setSearchParams,
  totalItemSelected,
  isOpenModal,
  onToggleDeleteButton,
}: TCartHeaderProps) => {
  return (
    <div className={classes["cart-header"]}>
      <h3 className={classes["title"]}>
        Cart <span>{`(${totalCartItems})`}</span>
      </h3>
      {selectedCartItem.length > 0 && (
        <button onClick={onToggleDeleteButton} className={classes["delete"]}>
          <DeleteIcon />
        </button>
      )}
      <CartModal
        title="Confirm to delete?"
        totalItemSelected={totalItemSelected}
        selectedItem={selectedCartItem}
        setSearchParams={setSearchParams}
        isOpened={isOpenModal}
        onClose={onToggleDeleteButton}
      />
    </div>
  );
};

export default CartHeader;
