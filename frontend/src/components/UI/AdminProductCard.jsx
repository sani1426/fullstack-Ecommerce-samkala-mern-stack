
import EditProductModal from "../(Admin)/EditProductModal";

const AdminProductCard = ({ data , fetchAll }) => {
  return (
    <div className='rounded bg-white m-3 py-2 px-4'>
      <img
        src={data?.productImages[0]}
        alt={data?.productName}
        width={70}
        height={70}
      />
      <h1>{data?.productName}</h1>

      <div className="w-fit ml-auto p-2 cursor-pointer  rounded-full ">
    <EditProductModal   productData={data} fetchdata={fetchAll} />
      </div>
    </div>
  );
};

export default AdminProductCard;
