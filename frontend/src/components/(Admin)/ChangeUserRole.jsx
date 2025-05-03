import { useEffect, useState } from 'react';
import { userROLE } from '../../common/role.js'
import { userGender } from '../../common/role.js'
import { IoMdClose } from "react-icons/io";
import SummaryApi from '../../common/index.js';


const ChangeUserRole = ({
    name , email , role , onClose , gender
}) => {

    const [useRole , setUseRole] =useState(role)
    const [useGender , setUseGender] =useState(gender)
    useEffect(() => {
      setUseGender(gender)
      setUseRole(role)
    
    }, [])
    

    const handleOnChangeRole = (e)=>{
        setUseRole(e.target.value)
    }
    const handleOnChangeGender = (e)=>{
        setUseGender(e.target.value)
    }

    const updateUserRole = async ()=> {
                const  result = await fetch(SummaryApi.UpdateUser.url , {
                    method : SummaryApi.UpdateUser.method ,
                    credentials : "include",
                    headers : {
                        "content-type" : "application/json"
                    },

                        body : JSON.stringify({
                            role : useRole 
                        })
                })

                const response = await result.json()
                console.log(response);
    }

  return (
   <div className=" w-full h-full z-10 flex-center ">
    <div className=" bg-white py-4 px-4 shadow-md mt-10 w-full">
<button className='block ml-auto '  onClick={()=>onClose(false)}>
    <IoMdClose />
</button>
    <h1>Change User Role</h1>

    <div className='flex-between my-3'>
    <p>Name : {name}</p>
    <p>Email : {email}</p>
    </div>


    <div className="flex-between my-3">
    <p>Role :</p>

<select className='border px-4 py-2'  value={useRole}  onChange={handleOnChangeRole}>
    {
        Object.values(userROLE).map(el => (
            <option key={el} value={el}>{el}</option>
        ))
    }
</select>
    </div>
    <div className="flex-between gap-3 my-3">
    <p>gender :</p>

<select className='border px-4 py-2'  value={useGender}  onChange={handleOnChangeGender}>
    {
        Object.values(userGender).map(el => (
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