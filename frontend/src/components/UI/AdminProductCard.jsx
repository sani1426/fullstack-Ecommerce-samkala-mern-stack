
import EditProductModal from "../(Admin)/EditProductModal";

const AdminProductCard = ({ data , fetchAll }) => {
  return (
    <div className='rounded bg-white p-4'>
      <img
        src={data?.productImages[0]}
        alt={data?.productName}
        width={130}
        height={130}
      />
      <h1>{data?.productName}</h1>

      <div className="w-fit ml-auto p-2 cursor-pointer  rounded-full ">
    <EditProductModal   productData={data} fetchdata={fetchAll} />
      </div>
    </div>
  );
};

export default AdminProductCard;
