
import EditProductModal from "../(Admin)/EditProductModal";

const AdminProductCard = ({ data , fetchAll }) => {
  return (
    <div className='flex flex-col justify-center items-center gap-y-4 rounded-lg shadow-sm hover:shadow-lg transition-all bg-white m-3 py-2 px-8 '>
      <div className="w-[70px] h-[70]">
      <img
        src={data?.productImages[0]}

        alt={data?.productName}
className="w-[70px] h-[70px] object-contain"
      />
      </div>
     
      <h1 className="text-ellipsis line-clamp-2">{data?.productName}</h1>
<div className="flex-between w-full gap-8">
  <p>${data?.sellingPrice.toLocaleString()}</p>

      <div className="w-fit ml-auto p-2 cursor-pointer  rounded-full ">
    <EditProductModal   productData={data} fetchdata={fetchAll} />
      </div>
      </div>
    </div>
  );
};

export default AdminProductCard;
