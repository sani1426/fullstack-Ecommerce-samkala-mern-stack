import { useEffect, useState } from 'react';
import SummaryApi from '../../common/index.js';
import moment from 'moment';
import { MdEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import ChangeUserRole from '../../components/(Admin)/ChangeUserRole.jsx';

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [openRoleUpdate, setOpenRoleUpdate] = useState(false);
  const [updatedUserDetail, setUpdateUserDetail] = useState({
    email: '',
    name: '',
    role: '',
    gender: '',
  });

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

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <div className='py-4 pr-4 md:pl-[21rem]'>
      <table className='user-table w-full'>
        <thead>
          <tr>
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
                  <button
                    onClick={() => {
                      setUpdateUserDetail(user)
                      setOpenRoleUpdate(true);
                    }}
                    className='cursor-pointer rounded-full bg-green-100 p-2 transition-all hover:bg-green-500 hover:text-white'
                  >
                    <MdEdit />
                  </button>
                  <button className='cursor-pointer rounded-full bg-red-100 p-2 transition-all hover:bg-red-500 hover:text-white'>
                    <MdDelete />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {openRoleUpdate && (
        <ChangeUserRole
          name={updatedUserDetail.name}
          email={updatedUserDetail.email}
          gender={updatedUserDetail.gender}
          onClose={setOpenRoleUpdate}
        />
      )}
    </div>
  );
};

export default AllUsers;
