import { useState } from 'react';
import { userROLE } from '../../common/role.js'
import { IoMdClose } from "react-icons/io";


const ChangeUserRole = ({
    name , email , role , onClose
}) => {

    const [useRole , setUseRole] =useState(role)

    const handleOnChange = (e)=>{
        setUseRole(e.target.value)
    }

    const updateUserRole = async ()=> {

    }

  return (
   <div className=" w-full h-full z-10 flex-center ">
    <div className=" bg-white p-4 shadow-md mt-10">
<button className='bock ml-auto'  onClick={onClose}>
    <IoMdClose />
</button>
    <h1>Change User Role</h1>
    <p>Name : {name}</p>
    <p>Email : {email}</p>

    <div className="flex-between my-3">
    <p>Role :</p>

<select className='border px-4 py-2'  value={useRole}  onChange={handleOnChange}>
    {
        Object.values(userROLE).map(el => (
            <option key={el} value={el}>{el}</option>
        ))
    }
</select>
    </div>
  <button
  onClick={ChangeUserRole}
  className='w-full mx-auto p-2 rounded-full my-hover text-white'>Change Role</button>
    </div>

   </div>
  )
}

export default ChangeUserRole