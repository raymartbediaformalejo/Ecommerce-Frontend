import Brands from "./components/Brands";
import Collections from "./components/Collections";
import Hero from "./components/Hero";
import OpenFashion from "./components/OpenFashion";
import Recommendations from "./components/Recommendations";
import TrendingProducts from "./components/TrendingProducts";

const Home = () => {
  return (
    <>
      <Hero />
      <TrendingProducts />
      <Brands />
      <Collections />
      <Recommendations />
      <OpenFashion />
    </>
  );
};

export default Home;
