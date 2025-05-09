import BannerProduct from "../../components/(products)/BannerProduct"
import HorizentalCardProduct from "../../components/(products)/HorizentalCardProduct"
import CategoryList from "../../components/UI/CategoryList"


const HomePage = () => {
  return (
    <>
    <CategoryList />
    <BannerProduct />
    <HorizentalCardProduct category={"camera"} heading="Top cameras" />
    <HorizentalCardProduct category={"tv"} heading="Top Tv" />
    </>
  )
}

export default HomePage