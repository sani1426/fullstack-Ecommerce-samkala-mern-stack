import React, { useState } from 'react';
import { Modal } from 'antd';

import { userROLE } from '../../common/role.js'
import { userGender } from '../../common/role.js'

import SummaryApi from '../../common/index.js';
import { MdEdit } from 'react-icons/md';
import useFetchData from '../../hooks/useFetchData.js';

const UpdateUserModal = ({
    name , email , role , gender ,userId , getAllUsers
}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  const [useRole , setUseRole] =useState(role)
  const [useGender , setUseGender] =useState(gender)



  const handleOnChangeRole = (e)=>{
      setUseRole(e.target.value)

  }
  const handleOnChangeGender = (e)=>{
      setUseGender(e.target.value)
  }



  const updateUserRole = async ()=> {
              const {responseData} = await useFetchData(SummaryApi.UpdateUser.url , SummaryApi.UpdateUser.method , {
                userId : userId ,
                role : useRole ,
                gender : useGender
              } )
              getAllUsers()
              setIsModalOpen(false);
  }


  return (
    <>
      <button   className='cursor-pointer rounded-full bg-green-100 p-2 transition-all hover:bg-green-500 hover:text-white' onClick={showModal}>
        <MdEdit  />
      </button>
      <Modal
        title='Update User'
        open={isModalOpen}
        footer={null}
        onOk={handleOk}
        onCancel={handleCancel}
      >
    
    <div className=" w-full h-full z-10 flex-center ">
    <div className=" bg-white py-4 px-4 shadow-md mt-10 w-full">

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
  onClick={updateUserRole}
  className='w-full mx-auto p-2 rounded-full my-hover text-white'>Change Role</button>
    </div>

   </div>

      </Modal>
    </>
  );
};
export default UpdateUserModal;
