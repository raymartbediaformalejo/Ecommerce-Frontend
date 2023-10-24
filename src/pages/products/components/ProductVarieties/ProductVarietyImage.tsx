import classes from "../../../../styles/pages/Products/ProductVarietyImage.module.css";

type TProductVarietyImageProps = {
  images: string[];
  selectedVarietyImageId: number;
};

const ProductVarietyImage = ({
  images,
  selectedVarietyImageId,
}: TProductVarietyImageProps) => {
  console.log(selectedVarietyImageId);

  return (
    <img
      src={images[selectedVarietyImageId]}
      className={classes["variety-image"]}
    />
  );
};

export default ProductVarietyImage;
