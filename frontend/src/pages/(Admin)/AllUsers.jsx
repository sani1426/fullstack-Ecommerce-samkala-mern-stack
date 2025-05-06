import { useEffect, useState } from 'react';
import SummaryApi from '../../common/index.js';
import moment from 'moment';

import { MdDelete } from 'react-icons/md';

import UpdateUserModal from '../../components/(Admin)/UpdateUserModal.jsx';

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);


  const fetchAllUsers = async () => {
    const result = await fetch(SummaryApi.AllUsers.url, {
      methode: SummaryApi.AllUsers.method,
      credentials: 'include',
    });

    const response = await result.json();
    console.log(response);
    setAllUsers(response.data);
    console.log(allUsers);
  };


  // const deleteUser = async (id) => {
  //   const result = await fetch(`${SummaryApi.DeleteUser.url}/${id}`, {
  //     methode: SummaryApi.DeleteUser.method,
  //     credentials: 'include',
  //   });

  //   const response = await result.json();
  //     fetchAllUsers()
  // };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <div className='py-4 pr-4 md:pl-[21rem]'>
      <table className='user-table w-full'>
        <thead>
          <tr className='bg-black text-white'>
            <th>Sr.</th>
            <th>Name</th>
            <th>Email</th>
            <th className='hidden md:block'>Gender</th>
            <th>Role</th>
            <th className='hidden md:block'>Created Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {allUsers.map((user, index) => {
            return (
              <tr key={user?._id}>
                <td>{index + 1}</td>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.gender}</td>
                <td>{user?.role}</td>
                <td>{moment(user?.createdAt).format('ll')}</td>
                <td className='flex-center gap-2'>
      
                  <UpdateUserModal 
                    userId={user._id}
                    name={user.name}
                    email={user.email}
                    gender={user.gender}
                    getAllUsers={fetchAllUsers}
                  />
                  <button
                  // onClick={()=>deleteUser(user?.id)}
                  className='cursor-pointer rounded-full bg-red-100 p-2 transition-all hover:bg-red-500 hover:text-white'>
                    <MdDelete />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

    </div>
  );
};

export default AllUsers;
