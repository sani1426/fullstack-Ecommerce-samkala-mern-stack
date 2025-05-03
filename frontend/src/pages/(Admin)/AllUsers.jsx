import { useEffect, useState } from "react"
import SummaryApi from '../../common/index.js'
import moment from 'moment'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import ChangeUserRole from "../../components/(Admin)/ChangeUserRole.jsx";

const AllUsers = () => {

  

const [allUsers , setAllUsers]=useState([])

const fetchAllUsers = async ()=> {

    const result = await fetch(SummaryApi.AllUsers.url , {
      methode : SummaryApi.AllUsers.method ,
      credentials : "include"
    })

    const response = await result.json()
console.log(response);
   setAllUsers(response.data)
    console.log(allUsers);
}

useEffect(() => {
  fetchAllUsers()
}, [])




  return (
    <div className="md:pl-[21rem] py-4 pr-4" >
           <table className="w-full user-table">
            <thead>
           <tr>
           <th>Sr.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Role</th>
              <th>Created Date</th>
              <th>Action</th>
           </tr>
            </thead>
            <tbody className="text-center ">
                  {
                    allUsers.map((user , index) => {
                      return(
                        <tr  key={user?._id}>
                          <td>
                              {index + 1}
                          </td>
                          <td>
                              {user?.name}
                          </td>
                          <td>
                              {user?.email}
                          </td>
                          <td>
                              {user?.gender}
                          </td>
                          <td>
                              {user?.role}
                          </td>
                          <td>
                              {moment(user?.createdAt).format('ll')}
                          </td>
                          <td className="flex-center gap-2">
                              <button className="bg-green-100 p-2 rounded-full cursor-pointer hover:bg-green-500 transition-all hover:text-white">
                                <MdEdit />
                              </button>
                              <button className="bg-red-100 p-2 rounded-full cursor-pointer hover:bg-red-500 transition-all hover:text-white">
                                <MdDelete />
                              </button>
                          </td>
                        </tr>
                      )
                    })
                  }
            </tbody>
           </table>
           <ChangeUserRole   />
    </div>
  )
}

export default AllUsers