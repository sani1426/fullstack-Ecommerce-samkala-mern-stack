import BannerProduct from "../../components/(products)/BannerProduct"
import HorizentalCardProduct from "../../components/(products)/HorizentalCardProduct"
import CategoryList from "../../components/UI/CategoryList"


const HomePage = () => {
  return (
    <>
    <CategoryList />
    <BannerProduct />
    <HorizentalCardProduct category={"airpods"} heading="Top airpodes" />
    </>
  )
}

export default HomePage