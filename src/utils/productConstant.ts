import { TFiltersValue } from "../redux/ui/ProductFilter/productFilter.type";
import { TOptions } from "../types/TDelivery";
import { TTopnavItems } from "../types/TNavigation";
export const RECOMMENDED_PRODUCTS = [
  "5fe8f403-13e6-456f-bbdc-b42829b33fd4",

  "b29bbb34-8d98-4030-b833-43c953e669b5",
  "2ad1e52a-5c2e-4976-92d7-331861ea53ab",
  "8c01c2c8-355f-4a3a-be72-08c1b04540f8",
];

export const PRODUCT_LIMIT = 10;

export const PER_PAGE = 10;

export const initialFiltersValue: TFiltersValue = {
  categoriesToFilter: [],
  rating: 0,
  priceRangeToFilter: { min: 0, max: 0 },
  brandsToFilter: [],
};

export const productQueryKeys = [
  "q",
  "page",
  "categories",
  "rating",
  "price-range",
  "brands",
];

export const ratingsRange = {
  "5 Stars": 5,
  "4 Stars & Up": 4,
  "3 Stars & Up": 3,
  "2 Stars & Up": 2,
  "1 Stars & Up": 1,
};

export const priceRangeAutoCompleteValue = {
  ["0-200"]: [0, 200],
  ["200-400"]: [200, 400],
  ["400-600"]: [400, 600],
};

export const colorsProductVariety = {
  black: "#000000",
  red: "#F82626",
  lightYellow: "#CBC7AA",
  yellow: "#BBAC03",
  pink: "#E4378F",
  lightPink: "#F4D0D4",
  maroon: "#5A1F3B",
  darkBlue: "#172240",
  gray: "#A29697",
  darkGreen: "#151F1A",
  gold: "#9C5100",
  blueGreen: "#103244",
  cream: "#D9C8A5",
  blue: "#0F1534",
  brown: "#8B3803",
  darkBrown: "#1F0C00",
  orange: "#D0522D",
  lightBlue: "#6B90A4",
  fedspar: "#D29271",
  silver: "#E3DFE0",
  redbud: "#AE6366",
  mossIsland: "#CAC6B3",
  spicedCoral: "#D9505A",
  darkGray: "#333333",
};

export const varietyParamsKey = ["color", "design", "variation", "size"];

export const cartParams = {
  product: "product",
  price: "price",
  quantity: "quantity",
  subtotal: "subtotal",
  totalDiscount: "totalDiscount",
};

export const COUNTY_CODE = ["Philippines"];

export const REGION_CODE = [
  "Aurora",
  "Aklan",
  "Agusan del Norte",
  "Agusan del Sur",
  "Antique",
  "Abra",
  "Bataan",
  "Batangas",
  "Biliran",
  "Batanes",
  "Basilan",
  "Bohol",
  "Bulacan",
  "Cavite",
  "Cagayan",
  "Cebu",
  "Cordillera Administrative Region",
  "Cagayan Valley",
  "Compostela Valley",
  "Davao del Norte",
  "Davao del Sur",
  "Davao Occidental",
  "Davao Oriental",
  "Dinagat Islands",
  "Eastern Mindanao Islands",
  "Eastern Visayas (Region VIII)",
  "Guimaras",
  "General Santos (South Cotabato)",
  "Ilocos Norte",
  "Ilocos Sur",
  "Iloilo",
  "Isabela",
  "Lanao del Norte",
  "Lanao del Sur",
  "La Union",
  "Laguna",
  "Leyte",
  "Maguindanao",
  "Metro Manila (National Capital Region)",
  "Misamis Occidental",
  "Nueva Ecija",
  "Nueva Vizcaya",
  "Negros Occidental",
  "Northern Samar",
  "North Cotabato",
  "Pampanga",
  "Pangasinan",
  "Quezon",
  "Quirino",
  "Rizal",
  "Sulu",
  "Samar",
  "Sarangani",
  "Southern Leyte",
  "Siquijor",
  "Sultan Kudarat",
  "Samar",
  "Surigao del Norte",
  "Surigao del Sur",
  "Soccsksargen (Region XII)",
  "Tarlac",
  "Tawi-Tawi",
  "Zamboanga del Norte",
  "Zamboanga del Sur",
  "Zamboanga Sibugay",
];

export const CATEGORY: TTopnavItems = {
  Women: {
    Apparel: {
      Tops: [40, 39, 37, 36],
      Dresses: [45, 41, 43, 42, 44],
      "T-shirt": [52],
    },
    Bags: [75, 72, 71, 73, 74],
    Footware: [49, 60, 58, 56, 50, 59, 47, 46, 48],

    Accessories: {
      Jewellery: [79, 78, 76, 77],
      Watches: [64, 63, 65, 66, 69, 61, 68, 70, 62, 67],
      Sunglasses: [84, 81],
    },
  },

  Men: {
    Apparel: { Shirts: [52, 53, 54, 51] },
    Footware: [57, 60, 58, 56, 59],

    Accessories: {
      Watches: [64, 63, 65, 61, 62],
      Sunglasses: [85, 83, 81, 82],
    },
  },
  Kid: { Apparel: { Tops: [38] } },
};

export const topNavItems: TTopnavItems = {
  Apparel: {
    Men: {
      Shirts: [52, 53, 54, 51],
    },
    Women: {
      Tops: [40, 39, 37, 36],
      Dresses: [45, 41, 43, 42, 44],
      Shirts: [52],
    },
    Kid: { Tops: [38] },
  },
  Accessories: {
    Men: {
      Watches: [64, 63, 65, 61, 62],
      Sunglasses: [85, 83, 81, 82],
    },
    Women: {
      Jewellery: [79, 78, 76, 77],
      Watches: [64, 63, 65, 66, 69, 61, 68, 70, 62, 67],
      Sunglasses: [84, 81],
    },
  },
  Bags: {
    Women: [75, 72, 71, 73, 74],
  },
  Footware: {
    Men: [57, 60, 58, 56, 59],
    Women: [49, 60, 58, 56, 50, 59, 47, 46, 48],
  },
};

export const featuredProductIds: Record<string, string> = {
  apparel: "5fe8f403-13e6-456f-bbdc-b42829b33fd4",
  accessories: "978c559b-2c82-4e2b-859c-93b603c300f7",
  bags: "e431d0fd-c0c9-4d17-a05d-721b8efd0f1f",
  footware: "7408a165-aeb6-4147-af65-006c724894c6",
};

export const currencies: TOptions = [
  { label: "PHP", value: "PHP" },
  { label: "USD", value: "USD" },
];

export const CURRENCY_PHP_TO_USD = 56.08;
