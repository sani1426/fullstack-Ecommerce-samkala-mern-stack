import HorizentalCardProduct from './(products)/HorizentalCardProduct';
import VerticalCardProduct from './(products)/VerticalCardProduct';

const CategorySection = () => {
  return (
    <>
      <HorizentalCardProduct category={'airpodes'} heading="Top's Airpode's" />
      <HorizentalCardProduct category={'mouse'} heading="Popular's Mouse's" />

      <VerticalCardProduct category={'mobile'} heading='Mobile' />
      <VerticalCardProduct category={'watches'} heading='Watche' />
      <VerticalCardProduct category={'tv'} heading='Television' />
      <VerticalCardProduct category={'camera'} heading='Camera & Photography' />
      <VerticalCardProduct category={'earphones'} heading="Wired Earphone's" />
      <VerticalCardProduct
        category={'speakers'}
        heading="Bluetooth Speaker's"
      />
      <VerticalCardProduct category={'refrigerator'} heading="Refrigerator's" />
      <VerticalCardProduct category={'trimmers'} heading="Trimmer's" />
    </>
  );
};

export default CategorySection;
