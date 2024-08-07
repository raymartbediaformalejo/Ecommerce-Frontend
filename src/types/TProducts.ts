export type TProduct = {
  id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type TGetProductResponse = {
  products: TProduct[];
  total: number;
  skip: number;
  limit: number;
};

export type TGetProductProps = {
  limit: number;
  skip: number;
};

export type TCategory = {
  id: string;
  value: string;
  name: string;
};

export type TCategories = {
  categories: TCategory[];
};

export type TBrand = TCategory;

export type TBrands = {
  brands: TBrand[];
};

export type TProductState = {
  products: TProduct[];
  product: TProduct | null;
  categories: TCategory[];
};

export type TProductSizeVariety = {
  [sizeName: string]: string[];
};

export type TProductColorVariety = {
  [colorName: string]: number[];
};

export type TProductDesignVariety = {
  [designName: string]: number[];
};

export type TProductVariety = {
  id: string;
  variety: {
    size?: TProductSizeVariety;
    color?: TProductColorVariety;
    design?: TProductDesignVariety;
  };
};

export type TVarietiesProduct = {
  [varietyName: string]: string;
};
