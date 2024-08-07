import { useEffect } from "react";
import Product, {
  ProductImage,
  Price,
} from "../../../components/Products/Product";
import { useGetProductQuery } from "../../../redux/products/products.api";
import { Link } from "react-router-dom";

import classes from "../../../styles/components/home/RecommendedProductItem.module.css";

type RecommendedProductItemProps = {
  onIsLoadingProduct: (isLoading: boolean) => void;
  productId: string;
};

const RecommendedProductItem = ({
  onIsLoadingProduct,
  productId,
}: RecommendedProductItemProps) => {
  const { data, isLoading } = useGetProductQuery({ id: productId });
  // console.log(data);

  useEffect(() => {
    onIsLoadingProduct(isLoading);
  }, [isLoading, onIsLoadingProduct]);

  return (
    <>
      {data && (
        <Link to={`/product/${productId}`}>
          <Product.Wrapper className={classes["product-wrapper"]}>
            <ProductImage
              src={data.thumbnail}
              alt={data.title}
              variant="variant-2"
              className={classes["product-image"]}
            />
            <Product.BodyWrapper>
              <Product.Title className={classes["product-name"]}>
                {data.title}
              </Product.Title>
              <Price
                className={classes["product-price"]}
                price={data.price}
                discountPercentage={data.discountPercentage}
              />
            </Product.BodyWrapper>
          </Product.Wrapper>
        </Link>
      )}
    </>
  );
};

export default RecommendedProductItem;
