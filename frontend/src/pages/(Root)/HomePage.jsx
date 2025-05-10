import BannerProduct from '../../components/(products)/BannerProduct';
import CategorySection from '../../components/CategorySection';
import CategoryList from '../../components/UI/CategoryList';


const HomePage = () => {
  return (
    <>
      <CategoryList />
      <BannerProduct />
      <CategorySection />

    </>
  );
};

export default HomePage;
