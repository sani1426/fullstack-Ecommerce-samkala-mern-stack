import BannerProduct from '../../components/(products)/BannerProduct';
import HorizentalCardProduct from '../../components/(products)/HorizentalCardProduct';
import VerticalCardProduct from '../../components/(products)/VerticalCardProduct';
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
